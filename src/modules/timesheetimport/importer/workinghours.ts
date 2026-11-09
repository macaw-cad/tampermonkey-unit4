import { trans } from "../../global/trans";
import { headerMatchesDay, ImportTask, ImportTaskResult, setValueWithoutRequest } from "./importtask";

export type WorkingHours = {
  date: string;
  start: string;
  end: string;
}

export abstract class WHImportTask extends ImportTask {

    public static createTask(taskData: any) {
        switch (taskData.task) {
            case 'WorkingRowImportTask':
                return new WorkingRowImportTask(taskData.groupId, taskData.type, taskData.times);
        }
    }

    constructor(groupId: string, public type: "start" | "end") {
        super(groupId);
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
}

// fills the whole From (or To) row at once. Only activating the row reloads the page; the values
// are sent with the next request (activating the other row or closing the editing mode).
export class WorkingRowImportTask extends WHImportTask {
    // day (weekday token like "mon" or ISO date, see headerMatchesDay) -> time (HH:MM)
    public times: { [day: string]: string };
    constructor(groupId: string, type: "start" | "end", times: { [day: string]: string }) {
        super(groupId, type);
        this.times = times;
    }

    actionDescription(): string {
        return "Enter working time (" + (this.type === "start" ? "From" : "To") + ") for " + Object.keys(this.times).join(', ');
    }

    public async run(): Promise<ImportTaskResult> {
      const headers = await this.waitForElements('.tmWorkinghours th');
      const rows = await this.waitForElements('.workinghours-section .ListItem, .workinghours-section .AltListItem, .workinghours-section .EditRow');
      // first row: From, second row: To
      const row = rows[this.type === "start" ? 0 : 1];

      const cells: { [day: string]: HTMLElement } = {};
      for (var i=0 ; i<headers.length ; ++i) {
        const day = Object.keys(this.times).find(d => headerMatchesDay(headers[i], d));
        const cell = row?.querySelector('td:nth-of-type(' + (i+1) + ')') as HTMLElement | null;
        if (day && cell) {
          cells[day] = cell;
        }
      }
      const missing = Object.keys(this.times).filter(w => !cells[w]);
      if (missing.length === Object.keys(this.times).length) {
        return this.failure(trans('error_date_cell_not_found', missing.join(', ')));
      }

      const first = Object.values(cells)[0];
      if (!first.querySelector('.InputCell input')) {
        // row is not editable yet: click to activate and try again
        first.click();
        return this.retryAfterReload();
      }

      Object.entries(cells).forEach(([day, cell]) => {
        const input = cell.querySelector('.InputCell input') as HTMLInputElement | null;
        if (input) {
          setValueWithoutRequest(input, this.formatLocalTime(this.times[day], input));
        }
      });
      return missing.length > 0 ? this.failure(trans('error_date_cell_not_found', missing.join(', '))) : this.next();
    }
}
