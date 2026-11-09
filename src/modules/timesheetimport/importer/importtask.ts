import { Utils } from "../../global/utils";
import { ImportWorkingHours, ImportWorkOrder, SanityDaily } from "../timesheetimport";

/**
 * Set the value of a Unit4 input without triggering its request (page reload).
 * Unit4 takes over every field whose hidden IsDirty flag is set with the next request of the page
 * (e.g. Add, Close editing mode or activating another row), so several fields can be filled at once.
 */
export function setValueWithoutRequest(input: HTMLInputElement, value: string) {
  input.value = value;
  const dirty = input.closest('td[data-type]')?.querySelector('input[id$="_IsDirty"]') as HTMLInputElement | null;
  if (!dirty) {
    console.warn('No IsDirty flag found for ' + input.id + ', value will not be sent');
    return;
  }
  // do NOT fall back to a change event: for hour cells Unit4's onchange handler sends the request
  // right away, before the other cells of the row are filled
  const before = dirty.value;
  callPageFunction('setDirty', dirty.id);
  if (dirty.value === before) {
    console.warn('setDirty did not mark ' + dirty.id + ' as dirty, value may not be sent');
  }
}

/**
 * Call a global function of the Unit4 page. Tampermonkey may run the userscript in a sandbox where
 * the page's globals are not visible, in that case the call runs in a short-lived script element
 * inside the page context.
 */
function callPageFunction(name: string, ...args: string[]) {
  const fn = (window as any)[name];
  if (typeof fn === 'function') {
    fn(...args);
    return;
  }
  const script = document.createElement('script');
  script.textContent = name + '(' + args.map(arg => JSON.stringify(arg)).join(', ') + ');';
  (document.head ?? document.documentElement).appendChild(script);
  script.remove();
}

/**
 * Check if a day column header belongs to the given day: either an English weekday token as used
 * by the FtZ import (mon, tue, ...) or an ISO date as used by the JSON import (YYYY-MM-DD).
 */
export function headerMatchesDay(head: HTMLElement, day: string): boolean {
  if (/^\d{4}-\d{2}-\d{2}$/.test(day)) {
    const date = new Date(day);
    const dateEN = (date.getMonth()+1) + "/" + date.getDate(); // EN format: M/D
    const dateDE = date.getDate() + "." + String(date.getMonth()+1).padStart(2, '0'); // DE format: DD.MM.
    return head.title.includes(dateEN) || head.title.includes(dateDE);
  }
  return (head.textContent ?? '').replace(/[_.\s]/g, '').toLowerCase().startsWith(day);
}

/**
 * Expected hours of the timesheet from the "Normal hours" field of the timesheet header
 * (already reduced by bank holidays, part-time and month boundaries), null if not available.
 */
export function readNormalHours(doc: Document): number | null {
  for (const td of doc.querySelectorAll('td.label')) {
    if (td.textContent?.includes('Normal hours')) {
      const input = td.nextElementSibling?.querySelector('input[type="text"]') as HTMLInputElement | null;
      const hours = input ? Utils.toNumber(input.value) : NaN;
      if (!isNaN(hours)) {
        return hours;
      }
    }
  }
  return null;
}

export type FoundField = {
  field?: HTMLInputElement;
  value: string;
}

export type ImportTaskResult = {
    task: ImportTask;
    done?: boolean;
    retry?: boolean;
    reload?: boolean;
    recoverable?: boolean;
    failed?: boolean;
    failureReason?: string;
}

export abstract class ImportTask {
    // max waiting time for a field to be available / get focus
    private static readonly retrySeconds = 10;

    abstract actionDescription(): string;

    abstract run(): Promise<ImportTaskResult>;

    constructor(protected groupId: string) {
        if (!ImportTask.section) {
            throw new Error('Section not set');
        }
    }

    public getGroupId(): string {
        return this.groupId;
    }

    protected next(): ImportTaskResult {
        return { task: this, done: true };
    }
    protected nextAfterReload(recoverable: boolean = true): ImportTaskResult {
        return { task: this, retry: false, reload: true, recoverable };
    }
    protected retryAfterReload(recoverable: boolean = true): ImportTaskResult {
        return { task: this, retry: true, reload: true, recoverable };
    }
    protected failure(reason: string): ImportTaskResult {
        return { task: this, failed: true, failureReason: reason };
    }
    // wait a few milliseconds
    protected wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //
    // handling of DOM elements in Unit4
    //

    protected static section: HTMLElement;
    public static setSection(section: HTMLElement) {
        ImportTask.section = section;
    }

    // wait for element to be available (queried by CSS selector)
    protected async waitForElements(query: string): Promise<HTMLElement[]> {
        var retries = ImportTask.retrySeconds;
        do {
        const res = ImportTask.section.ownerDocument.querySelectorAll(query);
        if (res !== null && res.length > 0) {
            return [...res] as HTMLElement[];
        }
        await this.wait(1000);
        } while(--retries > 0);    
        throw new Error(`Element field not found for: ${query}`);
    }

    protected async waitForElement(query: string): Promise<HTMLElement> {
        const elements = await this.waitForElements(query);    
        return elements[0];
    }

    protected async fieldElement(cell: HTMLElement, fieldType: string): Promise<FoundField> {
        // check if there is an input field in this cell
        const input = cell.querySelector('.InputCell input') as HTMLInputElement;
        if (input !== null) {
            input.focus();
            await this.wait(100);
            return { field: input, value: input.value };
        }
        // otherwise return the text of the first div
        const div = cell.querySelector('& > div') as HTMLElement;
        if (div !== null) {
            return { value: div.textContent };
        }
        throw new Error(`Field not found for: ${fieldType}`);
    }

    protected async waitForField(dataType: string): Promise<FoundField> {
        // find the cell for the data type in the current edited row
        const cell = await this.waitForElement(`.EditRow td[data-type=${dataType}`);

        // check if there is an input field in this cell
        return this.fieldElement(cell, dataType);
    }

    protected async focusElement(query: string): Promise<HTMLElement> {
        const elements = await this.waitForElements(query);
        const ele = elements[0] as HTMLElement;
        ele.focus();
        return ele;
    }


}


export class CloseEditingModeTask extends ImportTask {
    constructor() {
        super('close-editing-mode');
    }

    actionDescription(): string {
        return "Close editing mode";
    }

    async run(): Promise<ImportTaskResult> {
        // click on "Close" button to close the editing mode
        const closeButton = ImportTask.section.ownerDocument.querySelector('[title="Close editing mode"') as HTMLButtonElement;
        if (closeButton) {
            closeButton.click();
            // try to find another button after reload
            return this.retryAfterReload();
        }
        return this.next();
    }
}

export class SanityCheckTask extends ImportTask {
    /**
     * @param nonWorkingHours hours of the week that are no work but count towards the normal hours
     *   (e.g. vacation, overtime compensation)
     */
    constructor(private data: SanityDaily, private nonWorkingHours: number = 0) {
        super('sanity-check');
    }

    actionDescription(): string {
        return "Final sanity check";
    }

    // expected hours of this timesheet, 40 if the "Normal hours" field is not available
    private static normalHours(): number {
        return readNormalHours(ImportTask.section.ownerDocument) ?? 40;
    }

    async run(): Promise<ImportTaskResult> {
        const errors: string[] = [];
        var sumWorkingTime = 0;
        var sumBookedHours = 0;
        Object.entries(this.data).forEach(([dateStr, day]) => {
            if (day.hours > 9 && day.breaks < 0.75) {
                errors.push("Break issue: min. 45 min breaks on a day with " + day.hours + " hours of work, date: " + dateStr);
            } else if (day.hours > 6 && day.breaks < 0.5) {
                errors.push("Break issue: min. 30 min breaks on a day with " + day.hours + " hours of work, date: " + dateStr);
            }

            const workingTime = day.workingTime - day.breaks;
            sumWorkingTime += workingTime;
            // day.hours already excludes the breaks (they are counted separately)
            sumBookedHours += day.hours;
            if (workingTime > 10) {
                errors.push(
                    "Working time issue: more than 10 hours of working time on date: " + dateStr
                    + "\n   Working time: " + Utils.toLocaleString(workingTime) + " hours, breaks: " + Utils.toLocaleString(day.breaks) + " hours"
                );
            } else if (day.workingTime <= 0) {
                errors.push("Working time issue: no working time on date: " + dateStr);
            }
        });
        const normalHours = SanityCheckTask.normalHours();
        const nonWorking = this.nonWorkingHours > 0 ? " + " + this.nonWorkingHours + " non-working" : "";
        if (sumWorkingTime + this.nonWorkingHours < normalHours) {
            errors.push("Working time issue: total working time less than " + normalHours + " hours (normal hours): " + sumWorkingTime + nonWorking);
        }
        if (sumBookedHours + this.nonWorkingHours < normalHours) {
            errors.push("Booked hours issue: total booked hours less than " + normalHours + " hours (normal hours): " + sumBookedHours + nonWorking);
        }

        if (errors.length > 0) {
            return this.failure(errors.join("\n\n * "));
        } else {
            return this.next();
        }
    }
}