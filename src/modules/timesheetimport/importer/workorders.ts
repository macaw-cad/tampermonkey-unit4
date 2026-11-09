import { Utils } from "../../global/utils";
import { FoundField, headerMatchesDay, ImportTask, ImportTaskResult, setValueWithoutRequest } from "./importtask";

export type WorkOrder = {
    workOrder: string;
    activity: string;
    timeCode: string;
    description: string;
}

/**
 * Does a time entry row belong to this work order? An empty activity, time code or description in
 * the import data (e.g. the FtZ import) matches whatever Unit4 prefilled (activity 100, time code 0,
 * its default description).
 */
export function rowMatchesWorkOrder(wo: WorkOrder, row: { workOrder?: string, activity?: string, timeCode?: string, description?: string }): boolean {
    const matches = (expected: string | undefined, actual: string | undefined) => !expected || expected === actual;
    return wo.workOrder === row.workOrder
        && matches(wo.activity, row.activity)
        && matches(wo.timeCode, row.timeCode)
        && (matches(wo.description, row.description) || row.description === 'Internal - Break Time');
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
            case 'EmptyRowStartWorkOrderImportTask':
                return new EmptyRowStartWorkOrderImportTask(taskData.groupId, taskData.workOrder);
            case 'TimecodeImportTask':
                return new TimecodeImportTask(taskData.groupId, taskData.workOrder);
            case 'WorkOrderImportTask':
                return new WorkOrderImportTask(taskData.groupId, taskData.workOrder);
            case 'ActivityImportTask':
                return new ActivityImportTask(taskData.groupId, taskData.workOrder);
            case 'DescriptionImportTask':
                return new DescriptionImportTask(taskData.groupId, taskData.workOrder);
            case 'RowHoursImportTask':
                return new RowHoursImportTask(taskData.groupId, taskData.workOrder, taskData.hours);
            case 'StartBreakRowImportTask':
                return new StartBreakRowImportTask(taskData.groupId);
            case 'WorkOrderSummaryTask':
                return new WorkOrderSummaryTask(taskData.sum, taskData.breaks, taskData.rows, taskData.days);
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
        const found = await this.findExistingRow();
        if (found !== null) {
            return found;
        }

        // no mathing row found, create one by clicking "Add" button
        // => this will reload the page
        WOImportTask.addButton.dispatchEvent(new Event('click'));
        return true;
    }

    /**
     * Search an existing row for the given work order (without adding a new one).
     *
     * @returns
     *   - HTMLElement of the editable row if found
     *   - true if an existing row will be made editable (=> page reload)
     *   - null if there is no matching row
     */
    protected async findExistingRow(): Promise<HTMLElement | true | null> {
        // check all rows
        const rows = await this.waitForElements('tr.ListItem,tr.AltListItem,tr.EditRow');
        for (const row of rows) {
            const workOrder = row.querySelector('td[data-type="cell-workorder"] div.ww.ellipsis')?.textContent;
            const activity = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent;
            const description = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent;
            const timeCode = row.querySelector('td[data-type="cell-timecode"] div.ww.ellipsis')?.textContent;
            if (this.matchesRow(workOrder, activity, timeCode, description)) {
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
            if (this.matchesRow(workOrder, activity, timeCode, description)) {
                // found existing row (editable), use it
                return row as HTMLElement;
            }
        }
        return null;
    }

    protected async activeRow() {
        return this.waitForElement('tr.EditRow');
    }

    private matchesRow(workOrder?: string, activity?: string, timeCode?: string, description?: string): boolean {
        return rowMatchesWorkOrder(this.workOrder, { workOrder, activity, timeCode, description });
    }

}

export class StartWorkOrderImportTask extends WOImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder);
    }

    actionDescription(): string {
        return "Begin new work order entry for " + this.workOrder.workOrder;
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

// reuse an empty time entry row before adding a new one. The import dialog adds such a row to get
// a context for Unit4's workorder lookup; Unit4 keeps it with an "Illegal value" warning.
// Only for normal hours (time code 0), as the empty row is prefilled with that time code.
export class EmptyRowStartWorkOrderImportTask extends StartWorkOrderImportTask {
    public async run(): Promise<ImportTaskResult> {
        // an existing row of this work order (repeated import) takes precedence over the empty row
        const existing = await this.findExistingRow();
        if (existing === true) {
            return this.nextAfterReload();
        } else if (existing !== null) {
            return this.next();
        }

        const rows = await this.waitForElements('.timeentry-section tr.ListItem, .timeentry-section tr.AltListItem, .timeentry-section tr.EditRow');
        for (const row of rows) {
            const cell = row.querySelector('td[data-type="cell-workorder"]');
            if (!cell) {
                continue; // no time entry row (e.g. summary rows)
            }
            // only an empty normal-hours row: no workorder, no hours and time code 0 (or none).
            // Unit4 prefills the description ("Normal hours") and activity (100) of a new row,
            // rows with another time code (e.g. absences) have no workorder either.
            // read the value only (input or value div), not the description the timeentry module
            // appends to workorder cells ("always show descriptions")
            const text = (td: Element | null, valueDiv: string) =>
                ((td?.querySelector('.InputCell input') as HTMLInputElement | null)?.value ?? td?.querySelector(valueDiv)?.textContent ?? '').trim();
            const hasHours = [...row.querySelectorAll('td[data-type="cell-weekday"]')].some(td => (Utils.toNumber(text(td, 'div.ww')) || 0) !== 0);
            const timeCode = text(row.querySelector('td[data-type="cell-timecode"]'), 'div.ww.ellipsis');
            if (text(cell, 'div.ww.ellipsis') !== '' || hasHours || (timeCode !== '' && timeCode !== '0')) {
                continue;
            }
            if (row.classList.contains('EditRow')) {
                // empty row is already editable, fill it directly
                return this.next();
            }
            const description = row.querySelector('td[data-type=cell-description] div.ww.ellipsis') as HTMLElement | null;
            if (description) {
                // make the empty row editable => page reload
                description.click();
                return this.nextAfterReload();
            }
        }
        return super.run();
    }
}

// activate the break booking that Unit4 auto-inserts (activity 999 / "Internal - Break Time"),
// so that the following hour tasks can write into its day cells
export class StartBreakRowImportTask extends ImportTask {
    constructor(groupId: string) {
        super(groupId);
    }

    actionDescription(): string {
        return "Open break row (activity 999)";
    }

    private isBreakRow(row: Element): boolean {
        const activityText = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent?.trim();
        const activityInput = (row.querySelector('td[data-type="cell-activity"] .InputCell input') as HTMLInputElement)?.value?.trim();
        const descText = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent?.trim();
        const descInput = (row.querySelector('td[data-type="cell-description"] .InputCell input') as HTMLInputElement)?.value?.trim();
        return activityText === '999' || activityInput === '999'
            || descText === 'Internal - Break Time' || descInput === 'Internal - Break Time';
    }

    public async run(): Promise<ImportTaskResult> {
        const rows = await this.waitForElements('tr.ListItem, tr.AltListItem, tr.EditRow');
        for (const row of rows) {
            if (this.isBreakRow(row)) {
                if (row.classList.contains('EditRow')) {
                    // break row is already editable
                    return this.next();
                }
                const cell = row.querySelector('td[data-type=cell-description] div.ww.ellipsis') as HTMLElement;
                if (cell) {
                    // make the break row editable => page reload
                    cell.click();
                    return this.nextAfterReload();
                }
                return this.failure('Break row description cell not found');
            }
        }
        return this.failure('Break row (activity 999) not found');
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

    actionDescription(): string {
        return "Enter time code for " + this.workOrder.workOrder;
    }
}
export class WorkOrderImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-workorder', workOrder.workOrder, true);
    }

    actionDescription(): string {
        return "Enter work order for " + this.workOrder.workOrder;
    }
}
export class ActivityImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-activity', workOrder.activity, true);
    }

    actionDescription(): string {
        return "Enter activity for " + this.workOrder.workOrder;
    }
}
export class DescriptionImportTask extends WOFieldImportTask {
    constructor(groupId: string, workOrder: WorkOrder) {
        super(groupId, workOrder, 'cell-description', workOrder.description, false);
    }

    actionDescription(): string {
        return "Enter description for " + this.workOrder.workOrder;
    }
}
// enters the hours of all days into the active row at once. The values are only marked dirty and
// sent with the next request (Add for the next row or Close editing mode), instead of one page
// reload per day.
export class RowHoursImportTask extends WOImportTask {
    // day (weekday token like "mon" or ISO date, see headerMatchesDay) -> hours
    public hours: { [day: string]: number };
    constructor(groupId: string, workOrder: WorkOrder, hours: { [day: string]: number }) {
        super(groupId, workOrder);
        this.hours = hours;
    }

    actionDescription(): string {
        return "Enter hours for " + (this.workOrder.workOrder || this.workOrder.description) + " on " + Object.keys(this.hours).join(', ');
    }

    public async run(): Promise<ImportTaskResult> {
      // scope to the time entry grid: the working hours grid uses the same cell-weekday markup
      // and would otherwise receive the hours whenever its From/To row is in editing mode
      const headers = await this.waitForElements('.timeentry-section th[data-type=cell-weekday]');
      const cells = await this.waitForElements('.timeentry-section .EditRow [data-type=cell-weekday]');

      const missing: string[] = [];
      Object.entries(this.hours).forEach(([day, hours]) => {
        const i = headers.findIndex(head => headerMatchesDay(head, day));
        const input = i >= 0 ? cells[i]?.querySelector('.InputCell input') as HTMLInputElement | null : null;
        if (input) {
          // leave unchanged values alone (e.g. zeros in a new row on a repeated import)
          if (Math.abs((Utils.toNumber(input.value) || 0) - hours) > 0.001) {
            setValueWithoutRequest(input, Utils.toLocaleString(hours));
          }
        } else {
          missing.push(day);
        }
      });
      return missing.length > 0 ? this.failure(`Could not find hour field for ${missing.join(', ')}`) : this.next();
    }
}

// a time entry row of the import (work order + description)
export type ImportedRow = { workOrder: string, description: string };

export class WorkOrderSummaryTask extends ImportTask {
    /**
     * @param rows rows of this import and
     * @param days imported days (weekday tokens or ISO dates, see headerMatchesDay):
     *   used to list other rows with hours on these days when the sum does not match
     */
    constructor(private sum: number, private breaks: number, private rows: ImportedRow[] = [], private days: string[] = []) {
        super('work-order-summary');
    }

    actionDescription(): string {
        return "Final check of work order summary";
    }

    async run(): Promise<ImportTaskResult> {
        // get the sum of hours from Unit4 and compare with
        // given values
        const sumCells = await this.waitForElements('.SumColumn');
        const sumCell = sumCells.pop();
        if (sumCell) {
            // parse locale-aware: Unit4 renders the total with a decimal comma (e.g. "47,50"),
            // and parseFloat would stop at the comma and drop the fraction.
            const unit4Sum = Utils.toNumber(sumCell.textContent || "0");
            if (Math.abs(unit4Sum - this.sum) > 0.001) {
                // sum of hours does not match
                return this.failure(`Sum of hours does not match, expected: ${this.sum}, actual: ${unit4Sum}` + this.foreignRows());
            }
        }
        return this.next();
    }

    // explain a sum mismatch: rows with hours on imported days that are not part of this import,
    // e.g. an outdated row after the description changed, a partial import or manual bookings
    private foreignRows(): string {
        const section = ImportTask.section;
        const headers = [...section.querySelectorAll('th[data-type=cell-weekday]')] as HTMLElement[];
        const dayColumns = headers
            .map((head, i) => ({ i, label: head.title.replace(/\s*-\s*Header\s*$/, '').trim() }))
            .filter(({ i }) => this.days.some(day => headerMatchesDay(headers[i], day)));

        const lines: string[] = [];
        section.querySelectorAll('tr.ListItem, tr.AltListItem').forEach(row => {
            const value = (type: string) => row.querySelector(`td[data-type="${type}"] div.ww.ellipsis`)?.textContent?.trim() ?? '';
            const workOrder = value('cell-workorder');
            const description = value('cell-description');
            if (workOrder === '' || value('cell-activity').startsWith('999')
                || this.rows.some(r => r.workOrder === workOrder && (!r.description || r.description === description))) {
                return; // no work order row (break, absence, summary) or part of this import
            }
            const cells = row.querySelectorAll('td[data-type=cell-weekday]');
            const hours = dayColumns
                .map(({ i, label }) => ({ label, text: cells[i]?.textContent?.trim() ?? '' }))
                .filter(({ text }) => (Utils.toNumber(text) || 0) !== 0)
                .map(({ label, text }) => `${label} ${text}`);
            if (hours.length > 0) {
                lines.push(` * ${workOrder} · ${description} (${hours.join(', ')})`);
            }
        });

        return lines.length === 0 ? '' :
            "\n\nRows with hours on imported days that are not part of this import"
            + " (e.g. changed description or work order, partial import, or booked manually):\n"
            + lines.join("\n");
    }
}
