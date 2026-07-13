import { trans } from "../../global/trans";
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
            case 'FtZWorkingImportTask':
                return new FtZWorkingImportTask(taskData.groupId, taskData.weekday, taskData.type, taskData.value);
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

      const month = String(date.getMonth()+1).padStart(2, '0');
      const dateDE = date.getDate() + "." + month; // DE format: DD.MM.

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

    // format time string based on naviogator.language (e.g. AM/PM format)
    protected formatLocalTime(timeString: string, field: HTMLInputElement): string {
        // Parse the time string (assuming HH:MM or H:MM format)
        const [hours, minutes] = timeString.split(':').map(str => parseInt(str, 10));
        // create date object with the time
        const date = new Date();
        date.setHours(hours, minutes);
        // Format the time based on the user's locale
        return new Intl.DateTimeFormat(navigator.language, { hour: "numeric", minute: "numeric" }).format(date);
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
        return this.failure(trans('error_date_cell_not_found', this.date.toLocaleDateString()));
    }

}

export class WorkingStartImportTask extends WHImportTask {
    constructor(groupId: string, day: Date, time: string) {
        super(groupId, day, "start", time);
    }

    actionDescription(): string {
        return "Enter working time (From) for " + this.date.toLocaleDateString();
    }
}
export class WorkingEndImportTask extends WHImportTask {
    constructor(groupId: string, day: Date, time: string) {
        super(groupId, day, "end", time);
    }

    actionDescription(): string {
        return "Enter working time (To) for " + this.date.toLocaleDateString();
    }
}

// working-hours variant that matches the day column by its weekday token instead of a date
export class FtZWorkingImportTask extends WHImportTask {
    // English weekday token as used in the grid headers: mon/tue/wed/thu/fri/sat/sun
    private weekday: string;
    constructor(groupId: string, weekday: string, type: "start" | "end", time: string) {
        super(groupId, new Date(0), type, time);
        this.weekday = weekday;
    }

    actionDescription(): string {
        return "Enter working time (" + (this.type === "start" ? "From" : "To") + ") for " + this.weekday;
    }

    protected async lookupCell(): Promise<FoundCell> {
      const headers = await this.waitForElements('.tmWorkinghours th');
      const rows = await this.waitForElements('.workinghours-section .ListItem, .workinghours-section .AltListItem, .workinghours-section .EditRow');

      for(var i=0 ; i<headers.length ; ++i) {
        const head = headers[i] as HTMLElement;
        const text = (head.textContent ?? '').replace(/[_.\s]/g, '').toLowerCase();
        if (text.startsWith(this.weekday)) {
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
}
