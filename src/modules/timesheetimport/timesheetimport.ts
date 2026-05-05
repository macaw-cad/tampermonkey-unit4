import './timesheetimport.less'
import {Configuration} from "../../configuration";
import { AbstractModule } from '../AbstractModule';
import { Utils } from '../global/utils';

// definition of a time entry with date ("M/D" format) and number of hours
type DailyHours = {
  date: string;
  hours: number;
}

// definition of a work order entry for Unit4
type WorkOrder = {
  timeCode?: string;
  workOrder: string;
  activity: string;
  description: string;
  time: DailyHours[];
}

// status of currently imported work order
enum ImportWorkOrderStatus {
  ADD = 1,            // use "Add" button to create a new row
  TIMECODE = 6,       // fill in time code
  WORKORDER = 2,      // fill work order
  ACTIVITY = 3,       // fill in activity
  DESCRIPTION = 4,    // fill description
  TIME = 5,           // fill in hours (per day)
  DONE = 100          // import done
}

type FoundField = {
  field?: HTMLInputElement;
  value: string;
}

// status of currently imported working hour
enum ImportWorkingHourStatus {
  CLICK_START = 1,    // click on existing start to activate
  ENTER_START = 2,    // fill in start time
  CLICK_END = 3,      // click on existing end to activate
  ENTER_END = 4,      // fill in end time
  DONE = 100          // import done
}

// class for storing work orders to import
type ImportWorkOrder = {
  status: ImportWorkOrderStatus;
  workOrder: WorkOrder;
}

// definition of a working hour entry for Unit4
type WorkingHour = {
  date: string;
  start: string;
  end: string;
}

// class for storing working hours to import
type ImportWorkingHour = {
  status: ImportWorkingHourStatus;
  workingHour: WorkingHour;
}

type FailedImport = {
  entry: ImportWorkOrder|ImportWorkingHour;
  message: string;
}

export class Timesheetimport extends AbstractModule {
  // max waiting time for a field to be available / get focus
  private static readonly retrySeconds = 10;

  private standardAddBtn!: Element;
  private dialog!: HTMLElement;
  private dialogEntry!: HTMLTextAreaElement;

  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  private section!: HTMLElement;
  private sectionWorkingHours!: HTMLElement;
  private progress!: HTMLElement;

  public initModule(): Promise<void> {
    if (Configuration.getInstance().experimentalJsonImport()) {
      // add import button and progress if this feature is enabled in configuration
      document.querySelectorAll('h2.SectionTitle').forEach(e => {
          if (e.textContent.startsWith('Time entry')) {
            let section = e.closest('.u4-section-placeholder');
            if (section != null) {
              this.section = section as HTMLElement;              
              this.section.classList.add("timeentry-section");
              this.setActive();

              this.progress = document.createElement("span");
              this.progress.classList.add("progress");
              e.after(this.progress);
              this.updateProgress();
            }
          } else if (e.textContent.startsWith('Working hours')) {
            let section = e.closest('.u4-section-placeholder');
            if (section != null) {
              this.sectionWorkingHours = section as HTMLElement;
              this.sectionWorkingHours.classList.add("workinghours-section");

            }
          }
      });
    }
    return Promise.resolve();
  }

  public executeModule(): void {
    if(this.section){
      const table = this.section.querySelector('.TableButtonRow')?.closest('table');

      if(table){
        //get Instance of original 'Add' btn
        table.querySelectorAll('button').forEach(e => {
          if (e.textContent === 'Add') {
            this.standardAddBtn = e;
          }
        });

        if (this.standardAddBtn) {
          // create modal import dialog
          this.dialog = document.createElement("div");
          this.dialog.classList.add("modalDialog");
          this.dialog.style.display = 'none';

          this.dialogEntry = document.createElement("textarea");
          this.dialog.appendChild(this.dialogEntry);

          const dialogButtons = document.createElement("div");
          dialogButtons.classList.add("modalDialog__buttons");
          this.dialog.appendChild(dialogButtons);

          const dialogOK = document.createElement("button");
          dialogOK.setAttribute("type", "button");
          dialogOK.classList.add("RibbonInlineButton", "RibbonInlineButtonHappy");
          dialogOK.innerHTML = "<span>Start Import</span>";
          dialogOK.addEventListener('click', this.actionImport.bind(this));
          dialogButtons.appendChild(dialogOK);

          const dialogCancel = document.createElement("button");
          dialogCancel.setAttribute("type", "button");
          dialogCancel.classList.add("RibbonInlineButton");
          dialogCancel.innerHTML = "<span>Cancel</span>";
          dialogCancel.addEventListener('click', this.actionClose.bind(this));
          dialogButtons.appendChild(dialogCancel);

          document.body.appendChild(this.dialog);

          //create new table cell
          const buttonCell = document.createElement("td");
          table.rows[0].insertBefore(buttonCell, this.standardAddBtn.parentElement);
          buttonCell.classList.add('Button');

          //create new button
          const button = document.createElement("button");
          button.setAttribute("id", "json-import-btn");
          button.setAttribute("type", "button");
          button.setAttribute("role", "button");
          button.setAttribute("title", "Import data from JSON");
          button.setAttribute("onclick", "");
          button.classList.add('BaseButton');
          button.classList.add('SectionButton');
          button.innerHTML = "<span>Import JSON</span>"
          button.addEventListener("click", this.actionDialog.bind(this));        
          buttonCell.appendChild(button);
        }

        // Handle remaining data from last JSON import
        this.handleImport();
      }
    }
  }

  // show modal dialog
  private actionDialog() {
    this.dialogEntry.value = '';
    this.dialog.style.display = 'flex';
    this.dialogEntry.focus();
  }

  // close modal dialog
  private actionClose() {
    this.dialog.style.display = 'none';
    this.dialogEntry.value = '';
  }

  // start the import
  private actionImport() {
    try {
      const json = JSON.parse(this.dialogEntry.value);
      // use "entries" (new format) if available, otherwise fall back to root object
      const data = json.entries ? json.entries : json;
      // use "days" (new format) if available to set working times for days with entries
      const days = Object.entries(json.days ? json.days : {}).map(([date, times]: [string, any]) => ({ date, ...times }));


      /*
      New format (including working times):
      {
        "days": {
            "2026-04-27": {
                "start": "08:00",
                "end": "18:00"
            }
        },
        "entries": [
          {
            "workOrder": "400002-10027", "activity": "100", "description": "Import test #1",
            "time": [
              { "date": "2023-05-01", "hours": "1.5" },
              { "date": "2023-05-02", "hours": "0.75" }
            ]
          },
          {
            "workOrder": "400002-10025", "activity": "100", "description": "Import test #2",
            "time": [
              { "date": "2023-05-03", "hours": "1.25" },
              { "date": "2023-05-05", "hours": "4.75" }
            ]
          }
        ]      
      }
      */

      // put data in session and start with first entry
      sessionStorage.setItem("workorder_import_running", "true");
      if (data.length > 0) {
        const next = data.shift();
        sessionStorage.setItem("workorder_import_next", JSON.stringify({status: ImportWorkOrderStatus.ADD, workOrder: next}));
        sessionStorage.setItem("workorder_import_pending", JSON.stringify(data));
        sessionStorage.setItem("workorder_import_max", data.length);
        sessionStorage.setItem("workorder_import_failed", "[]");
      } else {
        sessionStorage.removeItem("workorder_import_next");
        sessionStorage.removeItem("workorder_import_max");
        sessionStorage.removeItem("workorder_import_failed");
      }
      if (days.length > 0) {
        const next = days.shift();
        sessionStorage.setItem("workinghour_import_next", JSON.stringify({status: ImportWorkingHourStatus.CLICK_START, workingHour: next}));
        sessionStorage.setItem("workinghour_import_pending", JSON.stringify(days));
        sessionStorage.setItem("workinghour_import_failed", "[]");
      } else {
        sessionStorage.removeItem("workinghour_import_next");
        sessionStorage.removeItem("workinghour_import_pending");
        sessionStorage.removeItem("workinghour_import_failed");
      }

      this.updateProgress(data.length);
      // close dialog
      this.actionClose();
      // handle first import item
      this.handleImport();
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
    }
  }

  // get the import object that is currently active
  private getCurrentImportWorkOrder() : ImportWorkOrder|undefined {
    // do we have a current import object?
    const rawNext = sessionStorage.getItem("workorder_import_next");
    if (rawNext !== null && rawNext !== "") {
      var next = JSON.parse(rawNext);
      if (next.status === ImportWorkOrderStatus.DONE) {
        // use next item from remaining list
        next = this.getNextFromPending();
      }
      return next;
    }
  }

  // store the import object that is currently active (e.g. after status change)
  private storeCurrentImportWorkOrder(next: ImportWorkOrder) {
    sessionStorage.setItem("workorder_import_next", JSON.stringify(next));
  }

  // add an entry to the failed ones
  private addFailed(failed: ImportWorkOrder|ImportWorkingHour, message: string) {
    // load failed ones    
    var failedList = this.getFailed();
    failedList.push({ entry: failed, message });
    sessionStorage.setItem("workorder_import_failed", JSON.stringify(failedList));
  }
  private getFailed(): FailedImport[] {
    var rawFailedList = sessionStorage.getItem("workorder_import_failed");
    var failedList = [];
    if (rawFailedList !== null && rawFailedList !== "") {
      failedList = JSON.parse(rawFailedList);
    }
    return failedList;
  }

  // change status of import object and store in session
  private updateImportState(next: ImportWorkOrder, status: ImportWorkOrderStatus) {
    next.status = status;
    this.storeCurrentImportWorkOrder(next);
  }

  // get the next import object from the list of pending work orders
  private getNextFromPending() : ImportWorkOrder|undefined {
    const raw = sessionStorage.getItem("workorder_import_pending");
    if(raw !== null && raw !== ""){
      const data = JSON.parse(raw);
      this.updateProgress(data.length);
      if (data.length > 0) {
        // get next item
        const next = data.shift();
        // update shortened list in session
        sessionStorage.setItem("workorder_import_pending", JSON.stringify(data));
        // return an import object with initial state
        return {status: ImportWorkOrderStatus.ADD, workOrder: next};
      } else {
        // no pending elements left
        sessionStorage.setItem("workorder_import_pending", "");
      }
    }
  }

  // wait a few seconds
  private wait(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  // wait for a input field to be focussed (queried by title of parent element)
  private async waitForFocus(title: string): Promise<HTMLInputElement|HTMLButtonElement> {
    var retries = Timesheetimport.retrySeconds;
    do {
      const act = document.activeElement;
      if (act && act.nodeName === "INPUT" && act.parentElement?.title === title) {
        return act as HTMLInputElement;
      }
      if (act && act.nodeName === "BUTTON" && (act as HTMLButtonElement).title === title) {
        return act as HTMLButtonElement;
      }
      await this.wait(1);
    } while(--retries > 0);    
    throw new Error(`Input field not found for: ${title}`);
  }

  // wait for element to be available (queried by CSS selector)
  private async waitForElements(query: string): Promise<HTMLElement[]> {
    var retries = Timesheetimport.retrySeconds;
    do {
      const res = this.standardAddBtn.ownerDocument.querySelectorAll(query);
      if (res !== null && res.length > 0) {
        return [...res] as HTMLElement[];
      }
      await this.wait(1);
    } while(--retries > 0);    
    throw new Error(`Element field not found for: ${query}`);
  }

  private async waitForElement(query: string): Promise<HTMLElement> {
    const elements = await this.waitForElements(query);    
    return elements[0];
  }

  private async waitForField(dataType: string): Promise<FoundField> {
    // find the cell for the data type in the current edited row
    const cell = await this.waitForElement(`.EditRow td[data-type=${dataType}`);

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
    throw new Error(`Field not found for data-type: ${dataType}`);
  }


  private async focusElement(query: string): Promise<HTMLElement> {
    const elements = await this.waitForElements(query);
    const ele = elements[0] as HTMLElement;
    ele.focus();
    return ele;
  }
  // searches for a matching existing row
  private searchExistingRow(next: ImportWorkOrder) {
    // check all rows
    const rows = this.section.querySelectorAll('tr.ListItem,tr.AltListItem');
    for (const row of rows) {
      const workOrder = row.querySelector('td[data-type="cell-workorder"] div.ww.ellipsis')?.textContent;
      const activity = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent;
      const description = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent;
      if (next.workOrder.workOrder === workOrder && next.workOrder.activity === activity && next.workOrder.description === description) {
        return row;
      }
    }

    const editRows = this.section.querySelectorAll('tr.EditRow');
    for (const row of editRows) {
      const workOrder = (row.querySelector('td[data-type="cell-workorder"] td.InputCell input') as HTMLInputElement)?.value;
      const activity = (row.querySelector('td[data-type="cell-activity"] td.InputCell input') as HTMLInputElement)?.value;
      const description = (row.querySelector('td[data-type="cell-description"] td.InputCell input') as HTMLInputElement)?.value;
      if (next.workOrder.workOrder === workOrder && next.workOrder.activity === activity && next.workOrder.description === description) {
        return row;
      }
    }
  }    

  // add a new row in timesheet
  private addNewRow(next: ImportWorkOrder) {
    // next state is time code or workorder
    if (Configuration.getInstance().hideTimeCodeColumn()) {
      // time code is hidden, next row would be workorder
      this.updateImportState(next, ImportWorkOrderStatus.WORKORDER);
    } else {
      // time code before workorder
      this.updateImportState(next, ImportWorkOrderStatus.TIMECODE);
    }
    // click "Add" button
    this.standardAddBtn.dispatchEvent(new Event('click'));
    // adding a row will reload the page
    return true;
  }

  private activateRow(row: Element, next: ImportWorkOrder) {
    // next state is time entry
    this.updateImportState(next, ImportWorkOrderStatus.TIME);
    // click on description field to activate the row
    const cell = row.querySelector("td[data-type=cell-description] div.ww.ellipsis") as HTMLElement;
    cell.click();
    // activating a row always triggers a page reload
    return true;
  }

  // wait for time code input in current row to get focus and fill in the given text
  private async fillTimeCode(next: ImportWorkOrder) {
    // next state is work order
    this.updateImportState(next, ImportWorkOrderStatus.WORKORDER);
    // fill in time code
    const input = await this.waitForFocus("Time code");
    const curr = input.value;
    const code = next.workOrder.timeCode || "0";
    if (curr !== code) {
      // code changed - one tab will reload
      input.value = code;
      input.dispatchEvent(new KeyboardEvent('keydown', {code:"Tab", key:"Tab", keyCode: 9, which: 9, bubbles: true, cancelable: true}));
      return true;
    } else {
      // no change = no reload
      return false;
    }
  }


  // wait for workorder input in current row to get focus and fill in the given text
  private async fillWorkorder(next: ImportWorkOrder) {
    // next state is description
    this.updateImportState(next, ImportWorkOrderStatus.ACTIVITY);

    // get the current field or value
    const field = await this.waitForField("cell-workorder");
    const newValue = next.workOrder.workOrder;
    if (field.value !== newValue) {
      if (field.field) {
        field.field.value = newValue;
        field.field.dispatchEvent(new KeyboardEvent('keydown', {code:"Tab", key:"Tab", keyCode: 9, which: 9, bubbles: true, cancelable: true}));
        // page reloads if value has changed
        return true;
      } else {
        this.addFailed(next, "read-only workorder mismatch");
      }
    }
    return false;
  }

  // wait for activity input in current row to get focus and fill in the given text
  private async fillActivity(next: ImportWorkOrder) {
    // next state is workorder
    this.updateImportState(next, ImportWorkOrderStatus.DESCRIPTION);

    // get the current field or value
    const field = await this.waitForField("cell-activity");
    const newValue = next.workOrder.activity || '100';
    if (field.value !== newValue) {
      if (field.field) {
        field.field.value = newValue;
        field.field.dispatchEvent(new KeyboardEvent('keydown', {code:"Tab", key:"Tab", keyCode: 9, which: 9, bubbles: true, cancelable: true}));
        // page reloads if value has changed
        return true;
      } else {
        // not editable - remember this as error
        this.addFailed(next, "read-only activity mismatch");
      }
    }
    return false;
  }

  // look for description area in current row and fill in the given text
  private async fillDescription(next: ImportWorkOrder) {
    // next state is time entry
    this.updateImportState(next, ImportWorkOrderStatus.TIME);
    const input = await this.focusElement('.EditRow [data-type=cell-description] .InputCell input') as HTMLInputElement;
    input.value =  next.workOrder.description;
    input.dispatchEvent(new Event("blur"));
    // description changes NEVER trigger a page reload
    return false;
  }

  // look for next time entry with matching (date) title and fill in value
  private async fillTime(next: ImportWorkOrder) { 
    if (next.workOrder.time.length > 0) {
      // handle next time entry (we are sure we have one)
      const entry = next.workOrder.time.shift()!;
      this.storeCurrentImportWorkOrder(next);
      const headers = await this.waitForElements('th[data-type=cell-weekday]');
      const fields = await this.waitForElements('.EditRow [data-type=cell-weekday] .InputCell input');
      // TODO: when workorder is not valid, there is no EditRow InputCell and this throws an Exception
      // requested date
      const date = new Date(entry.date);
      const dateEN = (date.getMonth()+1) + "/" + date.getDate(); // eEN format: M/D
      const dateDE = date.getDate() + "." + (date.getMonth()+1) + "."; // DE format: D.M.

      for(var i=0 ; i<headers.length ; ++i) {
        const head = headers[i] as HTMLElement;        
        if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
          // seems to match the date
          const field = fields[i] as HTMLInputElement;
          field.focus();
          field.value = `${entry.hours}`;
          field.blur();

          // page reloads if value has changed
          return false;
          //return entry.hours !== field.value; 
        }
      }
      this.addFailed(next, "Date not found: " + dateEN + " | " + dateDE);
      return false;
    }

    // set to done if there are no more time entries left
    this.updateImportState(next, ImportWorkOrderStatus.DONE);
    return false;
  }
  
  private async handleImport() {
    // repeat until we are done
    for(;;) {
      const cont = await this.handleImportNextItem();
      if (!cont) {
        break;
      }
    }
  }

  private async handleImportWorkOrder(next: ImportWorkOrder) {
    // we still have workorders to import
    var willReload = false;

    // run actions as long as we do not have a page reload
    var lastAction = "";
    var recoverable = true;
    do {
      if (next.status === ImportWorkOrderStatus.ADD) {
        const existingRow = this.searchExistingRow(next);
        if (!existingRow) {
          lastAction = "Add a new row";
          willReload = this.addNewRow(next);
        } else {
          lastAction = "Activated an existing row";
          willReload = this.activateRow(existingRow, next);
        }
      } else if (next.status === ImportWorkOrderStatus.TIMECODE) {
        lastAction = "Insert time code";
        willReload = await this.fillTimeCode(next);
      } else if (next.status === ImportWorkOrderStatus.WORKORDER) {
        lastAction = "Insert workorder";
        recoverable = false;  // wrong workorders are not recoverable!
        willReload = await this.fillWorkorder(next);
      } else if (next.status === ImportWorkOrderStatus.ACTIVITY) {
        lastAction = "Insert activity";
        willReload = await this.fillActivity(next);
      } else if (next.status === ImportWorkOrderStatus.DESCRIPTION) {
        lastAction = "Insert description";
        willReload = await this.fillDescription(next);
      } else if (next.status === ImportWorkOrderStatus.TIME) {
        lastAction = "Insert time";
        try {
          willReload = await this.fillTime(next);
        } catch (e) {
          // time field not found = invalid workorder 
          // skip the whole entry and mark as failed
          this.addFailed(next, "Time field not found - likely invalid workorder");
          this.updateImportState(next, ImportWorkOrderStatus.DONE);
        }
      } else if (next.status === ImportWorkOrderStatus.DONE) {          
        // TODO: process with next from list
        // just reload the frame to finish
        //lastAction = "Reload page";
        //window.location.reload();
        // willReload = true;
        return true;
      } else {
          // remember this as failed, mark as done and try next one
          this.addFailed(next, "unknown action " + lastAction);
          this.updateImportState(next, ImportWorkOrderStatus.DONE);
      }
      if (willReload) {
        // last action should reload the page - if this has not been done for 5s,
        // log an error and proceed with next action?
        await new Promise(f => setTimeout(f, 5000));
        if (recoverable) {
          // move to next action
          this.addFailed(next, "Last action (" + lastAction + ") seems to have failed, will retry next action");
          willReload = false;
        } else {
          // remember this as failed, mark as done and try next one
          this.addFailed(next, "Last action (" + lastAction + ") seems to have failed, aborting");
          this.updateImportState(next, ImportWorkOrderStatus.DONE);
        }
      }
    } while(!willReload);

    return false;
  }

  private async handleImportWorkingHour(next: ImportWorkingHour) {
    var willReload = false;

    // run actions as long as we do not have a page reload
    var lastAction = "";
    var recoverable = true;
    do {
      const headers = await this.waitForElements('.tmWorkinghours th');
      const rows = await this.waitForElements('.workinghours-section .ListItem, .workinghours-section .AltListItem, .workinghours-section .EditRow');
      const date = new Date(next.workingHour.date);
      const dateEN = (date.getMonth()+1) + "/" + date.getDate(); // eEN format: M/D
      const dateDE = date.getDate() + "." + (date.getMonth()+1) + "."; // DE format: D.M.
      const dayCells: HTMLElement[] = [];
      const dayInputs: HTMLInputElement[] = [];

      for(var i=0 ; i<headers.length ; ++i) {
        const head = headers[i] as HTMLElement;        
        if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
          for(var j=0 ; j<rows.length ; ++j) {
            const cell = rows[j].querySelector('td:nth-of-type(' + (i+1) + ')') as HTMLElement;
            dayCells[j] = cell;
            dayInputs[j] = (cell?.querySelector('.InputCell input') as HTMLInputElement);
          }
        }
      }

      if (next.status === ImportWorkingHourStatus.CLICK_START) {
        // click on start time to activate the field
        if (dayCells[0]) {       
          dayCells[0].click();
          // activating the cell reloads the page
          lastAction = "Click start time cell";
          willReload = true;
        } else {
          this.addFailed(next, "start time cell not found");
        }
        this.updateWorkingHourImportState(next, ImportWorkingHourStatus.ENTER_START);
      } else if (next.status === ImportWorkingHourStatus.ENTER_START) {        
        // fill start date
        if (dayInputs[0]) {
          dayInputs[0].focus();
          dayInputs[0].value = this.formatLocalTime(next.workingHour.start, dayInputs[0]);
          dayInputs[0].blur();
        } else {
          this.addFailed(next, "start time input field not found");
        }
        this.updateWorkingHourImportState(next, ImportWorkingHourStatus.CLICK_END);
      } else if (next.status === ImportWorkingHourStatus.CLICK_END) {
        // click on start time to activate the field
        if (dayCells[1]) {       
          dayCells[1].click();
          // activating the cell reloads the page
          lastAction = "Click end time cell";
          willReload = true;
        } else {
          this.addFailed(next, "end time cell not found");
        }
          this.updateWorkingHourImportState(next, ImportWorkingHourStatus.ENTER_END);
      } else if (next.status === ImportWorkingHourStatus.ENTER_END) {        
        // fill end date
        if (dayInputs[1]) {
          dayInputs[1].focus();
          dayInputs[1].value = this.formatLocalTime(next.workingHour.end, dayInputs[1]);
          dayInputs[1].blur();
        } else {
          this.addFailed(next, "end time input field not found");
        }
        this.updateWorkingHourImportState(next, ImportWorkingHourStatus.DONE);
      } else if (next.status === ImportWorkingHourStatus.DONE) {          
        // process with next from list
        return true;
      } else {
          // remember this as failed, mark as done and try next one
          this.addFailed(next, "unknown action " + lastAction);
          this.updateWorkingHourImportState(next, ImportWorkingHourStatus.DONE);
      }

      if (willReload) {
        // last action should reload the page - if this has not been done for 5s,
        // log an error and proceed with next action?
        await new Promise(f => setTimeout(f, 5000));
        if (recoverable) {
          // move to next action
          this.addFailed(next, "Last action (" + lastAction + ") seems to have failed, will retry next action");
          willReload = false;
        } else {
          // remember this as failed, mark as done and try next one
          this.addFailed(next, "Last action (" + lastAction + ") seems to have failed, aborting");
          this.updateWorkingHourImportState(next, ImportWorkingHourStatus.DONE);
        }
      }
 
    } while(!willReload);

    return false;
  }

  // handle the import of the current import item
  private async handleImportNextItem() {
    let next = this.getCurrentImportWorkOrder();
    if (next) {
      // we still have workorders to import
      if (await this.handleImportWorkOrder(next)) {
        return true
      }
    } else {
      let nextWH = this.getCurrentImportWorkingHour();
      if (nextWH) {
        // We still have working hours to import
        if (await this.handleImportWorkingHour(nextWH)) {
          return true;
        }
      } else if (sessionStorage.getItem("workorder_import_running") === "true") {
        // Import done (workorders & working hours)
        sessionStorage.setItem("workorder_import_running", "false");
        const failed = this.getFailed();
        if (failed.length === 0) {
          // no failed rows!
          Utils.showDialog("JSON import finished without errors");
        } else {
          // we had some failed rows, show them in alert
          var failedMsg = "";
          failed.forEach(f => {            
            failedMsg += ('workOrder' in f.entry)
              ? `Failed: ${f.entry.workOrder.workOrder} - ${f.entry.workOrder.description}:\n${f.message}\n\n`
              : `Failed: ${f.entry.workingHour.date} - ${f.entry.workingHour.start} to ${f.entry.workingHour.end}:\n${f.message}\n\n`;
          })
          Utils.showDialog("JSON import finished with " + failed.length + " failed workorders:\n\n" + failedMsg);
        }
      }
    }      

    return false;
  }

  updateProgress(pendingCount?: number) {
    let text = '';
    if (pendingCount === undefined) {
      text = sessionStorage.getItem("workorder_progress") || '';
    } else {
      const max = sessionStorage.getItem("workorder_import_max");
      text = pendingCount > 0 ? `${pendingCount}/${max} pending` : '';
      sessionStorage.setItem("workorder_progress", text);
    }
    if(this.progress) {
      this.progress.textContent = text;
      this.progress.style.display = (text !== '') ? 'inline-block' : 'none';
    }
  }



  // get the import object that is currently active
  private getCurrentImportWorkingHour() : ImportWorkingHour|undefined {
    // do we have a current import object?
    const rawNext = sessionStorage.getItem("workinghour_import_next");
    if (rawNext !== null && rawNext !== "") {
      var next = JSON.parse(rawNext);
      if (next.status === ImportWorkingHourStatus.DONE) {
        // use next item from remaining list
        next = this.getNextWorkingHourFromPending();
      }
      return next;
    }
  }

  // store the import object that is currently active (e.g. after status change)
  private storeCurrentImportWorkingHour(next: ImportWorkingHour) {
    sessionStorage.setItem("workinghour_import_next", JSON.stringify(next));
  }

  // get the next import object from the list of pending working hours
  private getNextWorkingHourFromPending() : ImportWorkingHour|undefined {
    const raw = sessionStorage.getItem("workinghour_import_pending");
    if(raw !== null && raw !== ""){
      const data = JSON.parse(raw);
      if (data.length > 0) {
        // get next item
        const next = data.shift();
        // update shortened list in session
        sessionStorage.setItem("workinghour_import_pending", JSON.stringify(data));
        // return an import object with initial state
        return {status: ImportWorkingHourStatus.CLICK_START, workingHour: next};
      } else {
        // no pending elements left
        sessionStorage.setItem("workinghour_import_pending", "");
      }
    }
  }

  // change status of import object and store in session
  private updateWorkingHourImportState(next: ImportWorkingHour, status: ImportWorkingHourStatus) {
    next.status = status;
    this.storeCurrentImportWorkingHour(next);
  }

  // format time string to AM/PM format
  private formatLocalTime(timeString: string, field: HTMLInputElement): string {
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

}
