import { ImportTask, ImportTaskResult } from "./importtask";

export type WorkingHours = {
  date: string;
  start: string;
  end: string;
}

type FoundCell = {
    cell?: HTMLElement;
    input?: HTMLInputElement;
}
export abstract class WHImportTask extends ImportTask {

    public static createTask(taskData: any) {
        switch (taskData.task) {
            case 'WorkingStartImportTask':
                return new WorkingStartImportTask(taskData.groupId, new Date(taskData.date), taskData.value);
            case 'WorkingEndImportTask':
                return new WorkingEndImportTask(taskData.groupId, new Date(taskData.date), taskData.value);
        }
    }

    constructor(groupId: string, public date: Date, public type: "start" | "end", public value: string) {
        super(groupId);
    }

    protected async lookupCell(): Promise<FoundCell> {
      const headers = await this.waitForElements('.tmWorkinghours th');
      const rows = await this.waitForElements('.workinghours-section .ListItem, .workinghours-section .AltListItem, .workinghours-section .EditRow');
      const date = new Date(this.date);
      const dateEN = (date.getMonth()+1) + "/" + date.getDate(); // eEN format: M/D
      const dateDE = date.getDate() + "." + (date.getMonth()+1) + "."; // DE format: D.M.

      for(var i=0 ; i<headers.length ; ++i) {
        const head = headers[i] as HTMLElement;        
        if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
          for(var j=0 ; j<rows.length ; ++j) {
            const cell = rows[j].querySelector('td:nth-of-type(' + (i+1) + ')') as HTMLElement;
            const input = cell?.querySelector('.InputCell input') as HTMLInputElement;
            if (j === 0 && this.type === "start") {
                return { cell, input };
            } else if (j === 1 && this.type === "end") {
                return { cell, input };
            }
          }
        }
      }        
      return {};
    }

    // format time string to AM/PM format
    protected formatLocalTime(timeString: string, field: HTMLInputElement): string {
        // Parse the time string (assuming HH:MM or H:MM format)
        const [hours, minutes] = timeString.split(':').map(str => parseInt(str, 10));

        if (field.value.endsWith('AM') || field.value.endsWith('PM')) { 
        // Field used AM/PM - convert to 12 hour format
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        const displayMinutes = String(minutes).padStart(2, '0');
        return `${displayHours}:${displayMinutes}${period}`;
        }

        // Fallback: 24-hour format
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }


    public async run(): Promise<ImportTaskResult> {
        const cell = await this.lookupCell();
        if (cell.input) {
            // fill value
            cell.input.focus();
            cell.input.value = this.formatLocalTime(this.value, cell.input);
            cell.input.blur();
            return this.next();
        } else if (cell.cell) {
            // click to activate and try again
            cell.cell.click();
            return this.retryAfterReload();
        }
        return this.failure("Could not find cell for date " + this.date);
    }
}

export class WorkingStartImportTask extends WHImportTask {
    constructor(groupId: string, day: Date, time: string) {
        super(groupId, day, "start", time);
    }
}
export class WorkingEndImportTask extends WHImportTask {
    constructor(groupId: string, day: Date, time: string) {
        super(groupId, day, "end", time);
    }
}