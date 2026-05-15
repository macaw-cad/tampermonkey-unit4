import { ImportWorkingHours, ImportWorkOrder, SanityDaily } from "../timesheetimport";

export type FoundField = {
  field?: HTMLInputElement;
  value: string;
}

export type ImportTaskResult = {
    done?: boolean;
    retry?: boolean;
    reload?: boolean;
    recoverable?: boolean;
    failed?: boolean;
    failureReason?: string;
    task?: ImportTask;
}
export abstract class ImportTask {
    // max waiting time for a field to be available / get focus
    private static readonly retrySeconds = 10;

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
        return { done: true };
    }
    protected nextAfterReload(recoverable: boolean = true): ImportTaskResult {
        return { retry: false, reload: true, recoverable };
    }
    protected retryAfterReload(recoverable: boolean = true): ImportTaskResult {
        return { retry: true, reload: true, recoverable };
    }
    protected failure(reason: string): ImportTaskResult {
        return { failed: true, task: this, failureReason: reason };
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

    protected fieldElement(cell: HTMLElement, fieldType: string): FoundField {
        // check if there is an input field in this cell
        const input = cell.querySelector('.InputCell input') as HTMLInputElement;
        if (input !== null) {
            input.focus();
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
    constructor(private data: SanityDaily) {
        super('sanity-check');
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
            sumBookedHours += (day.hours - day.breaks);
            if (workingTime > 10) {
                errors.push(
                    "Working time issue: more than 10 hours of working time on date: " + dateStr
                    + "\n   Working time: " + workingTime.toFixed(2) + " hours, breaks: " + day.breaks.toFixed(2) + " hours"
                );
            } else if (day.workingTime <= 0) {
                errors.push("Working time issue: no working time on date: " + dateStr);
            }
        });
        if (sumWorkingTime < 40) {
            errors.push("Working time issue: total working time less than 40 hours: " + sumWorkingTime);
        }
        if (sumBookedHours < 40) {
            errors.push("Booked hours issue: total booked hours less than 40 hours: " + sumBookedHours);
        }

        return (errors.length > 0) ? this.failure("Sanity check issues:\n\n * " + errors.join("\n\n * ")) : this.next();
    }
}