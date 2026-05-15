import { FoundField, ImportTask, ImportTaskResult } from "./importtask";

export type WorkOrder = {
    workOrder: string;
    activity: string;
    timeCode: string;
    description: string;
}

export abstract class WOImportTask extends ImportTask {
    private static addButton: HTMLButtonElement;
    public static setAddButton(button: HTMLButtonElement) {
        WOImportTask.addButton = button;
    }

    public static createTask(taskData: any) {
        switch (taskData.task) {
            case 'StartWorkOrderImportTask':
                return new StartWorkOrderImportTask(taskData.groupId, taskData.workOrder);
            case 'TimecodeImportTask':
                return new TimecodeImportTask(taskData.groupId, taskData.workOrder);
            case 'WorkOrderImportTask':
                return new WorkOrderImportTask(taskData.groupId, taskData.workOrder);
            case 'ActivityImportTask':
                return new ActivityImportTask(taskData.groupId, taskData.workOrder);
            case 'DescriptionImportTask':
                return new DescriptionImportTask(taskData.groupId, taskData.workOrder);
            case 'HoursImportTask':
                return new HoursImportTask(taskData.groupId, taskData.workOrder, new Date(taskData.date), taskData.value);
            case 'WorkOrderSummaryTask':
                return new WorkOrderSummaryTask(taskData.sum, taskData.breaks);
        }
    }

    constructor(groupId: string, public workOrder: WorkOrder) {
        super(groupId);
        if (!WOImportTask.addButton) {
            throw new Error('Add button not set');
        }
    }

    /**
     * Search a row for the given work order.
     * 
     * @returns
     *   - HTMLElement of the editable row if found
     *   - true if new row will be created or exising row will be made editable (=> page reload)
     */
    protected async searchExistingRow() {
        // check all rows
        const rows = await this.waitForElements('tr.ListItem,tr.AltListItem,tr.EditRow');
        for (const row of rows) {
            const workOrder = row.querySelector('td[data-type="cell-workorder"] div.ww.ellipsis')?.textContent;
            const activity = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent;
            const description = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent;
            const timeCode = row.querySelector('td[data-type="cell-timecode"] div.ww.ellipsis')?.textContent;
            if (this.workOrder.workOrder === workOrder && this.workOrder.activity === activity && this.workOrder.timeCode === timeCode && (this.workOrder.description === description || description === 'Internal - Break Time')) {
                // found existing row (readonly), make editable by clicking on it
                // => will reload the page
                const cell = row.querySelector("td[data-type=cell-description] div.ww.ellipsis") as HTMLElement;
                cell.click();
                return true;
            }
        }
        
        const editRows = WOImportTask.addButton.ownerDocument.querySelectorAll('tr.EditRow');
        for (const row of editRows) {
            const workOrder = (row.querySelector('td[data-type="cell-workorder"] td.InputCell input') as HTMLInputElement)?.value;
            const activity = (row.querySelector('td[data-type="cell-activity"] td.InputCell input') as HTMLInputElement)?.value;
            const description = (row.querySelector('td[data-type="cell-description"] td.InputCell input') as HTMLInputElement)?.value;
            const timeCode = (row.querySelector('td[data-type="cell-timecode"] td.InputCell input') as HTMLInputElement)?.value;
            if (this.workOrder.workOrder === workOrder && this.workOrder.activity === activity && this.workOrder.timeCode === timeCode && (this.workOrder.description === description || description === 'Internal - Break Time')) {
                // found existing row (editable), use it
                return row;
            }
        }

        // no mathing row found, create one by clicking "Add" button
        // => this will reload the page
        WOImportTask.addButton.dispatchEvent(new Event('click'));
        return true;
    }

    protected async activeRow() {
        return this.waitForElement('tr.EditRow');
    }

}

export class StartWorkOrderImportTask extends WOImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder);
    }

    public async run(): Promise<ImportTaskResult> {
        const row = await this.searchExistingRow();
        if (row === true) {
            // row is not yet ready, retry after page reload
            return this.nextAfterReload();
        }
        // we found an editable row, use it directly
        return this.next();
    }
}

abstract class WOFieldImportTask extends WOImportTask {
    private cellType: string;
    private value: string;
    private reloads: boolean;
    constructor(groupId: string, workOrder: WorkOrder, cellType: string, value: string, reloads: boolean) {
        super(groupId, workOrder);
        this.cellType = cellType;
        this.value = value;
        this.reloads = reloads;
    }

    protected async lookupField(row: HTMLElement): Promise<FoundField|null> {
        return this.waitForField(this.cellType);
    }
    public async run(): Promise<ImportTaskResult> {
        const row = await this.activeRow();
        if (row) {
            const field = await this.lookupField(row);
            if (field === null) {
                // field not found, this should not happen
                return this.failure(`Could not find field for ${this.cellType}`);
            } else if (field.value !== this.value) {
                if (field.field) {
                    field.field.dispatchEvent(new Event('focus'));
                    field.field.value = this.value;
                    field.field.dispatchEvent(new Event('blur'));
                    field.field.dispatchEvent(new KeyboardEvent('keydown', {code:"Tab", key:"Tab", keyCode: 9, which: 9, bubbles: true, cancelable: true}));
                    await this.wait(100);
                    // page may reload if value has changed
                    return this.reloads ? this.nextAfterReload() : this.next();
                } else {
                    return this.failure(`Read-only field for ${this.cellType} has mismatched values, expected: ${this.value}, actual: ${field.value}`);
                }
            } else {
                // value already set, continue with next field
                return this.next();
            }
        } else {
            return this.failure("Could not find active row");
        }
    }
}
export class TimecodeImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-timecode', workOrder.timeCode, true);
    }
}
export class WorkOrderImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-workorder', workOrder.workOrder, true);
    }
}
export class ActivityImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-activity', workOrder.activity, true);
    }
}
export class DescriptionImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-description', workOrder.description, false);
    }
}
export class HoursImportTask extends WOFieldImportTask {
    private date: Date;
    constructor(groupId: string, workOrder: WorkOrder, day: Date, hours: string) {
        super(groupId, workOrder, 'cell-weekday', hours, true);
        this.date = day;
    }
    protected async lookupField(row: HTMLElement): Promise<FoundField|null> {
      const headers = await this.waitForElements('th[data-type=cell-weekday]');
      const cells = await this.waitForElements('.EditRow [data-type=cell-weekday]');

      // requested date
      const dateEN = (this.date.getMonth()+1) + "/" + this.date.getDate(); // eEN format: M/D
      const dateDE = this.date.getDate() + "." + (this.date.getMonth()+1) + "."; // DE format: D.M.

      for(var i=0 ; i<headers.length ; ++i) {
        const head = headers[i] as HTMLElement;        
        if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
          // seems to match the date          
          return await this.fieldElement(cells[i] as HTMLElement, 'cell-weekday['+i+']');
        }
      }
      return null;
    }

}

export class WorkOrderSummaryTask extends ImportTask {
    constructor(private sum: number, private breaks: number) {
        super('work-order-summary');
    }

    async run(): Promise<ImportTaskResult> {
        // get the sum of hours from Unit4 and compare with
        // given values
        const sumCells = await this.waitForElements('.SumColumn');
        const sumCell = sumCells.pop();
        if (sumCell) {
            const unit4Sum = parseFloat(sumCell.textContent || "0");
            if (unit4Sum !== this.sum) {
                // sum of hours does not match
                return this.failure(`Sum of hours does not match, expected: ${this.sum}, actual: ${unit4Sum}`);
            }
        }
        return this.next();
    }
}