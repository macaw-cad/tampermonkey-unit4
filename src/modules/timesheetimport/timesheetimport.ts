import './timesheetimport.less'
import {Configuration} from "../../configuration";

// definition of a time entry with date ("M/D" format) and number of hours
type DailyHours = {
  date: string;
  hours: number;
}

// definition of a work order entry for Unit4
type WorkOrder = {
  workOrder: string;
  activity: string;
  description: string;
  time: DailyHours[];
}

// status of currently imported work order
enum ImportWorkOrderStatus {
  ADD = 1,            // use "Add" button to create a new row
  WORKORDER = 2,      // fill work order
  ACTIVITY = 3,       // fill in activity (TODO)
  DESCRIPTION = 4,    // fill description
  TIME = 5,           // fill in hours (per day)
  DONE = 100          // import done
}

// class for storing work orders to import
class ImportWorkOrder {
  status: ImportWorkOrderStatus;
  workOrder: WorkOrder;
}

export class Timesheetimport {
  // max waiting time for a field to be available / get focus
  private static readonly retrySeconds = 20;

  private active = false;
  private standardAddBtn: Element;
  private dialog: HTMLElement;
  private dialogEntry: HTMLTextAreaElement;

  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  constructor() {
    // add import button if this feature is enabled in configuration
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().experimentalJsonImport()) {
        if (e.textContent.startsWith('Time entry')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.active = true;
            this.importButton(section);
          }
        }
      }
    });
  }

  public isActive() {
    return this.active;
  }

  private importButton(tablesection: Element) {
    if(tablesection){
      const table = tablesection.querySelector('.TableButtonRow').closest('table');

      if(table){

        //get Instance of original 'Add' btn
        table.querySelectorAll('button').forEach(e => {
          if (e.textContent.startsWith('Add')) {
            this.standardAddBtn = e;
          }
        });

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
        const buttonCell = table.rows[0].insertCell(1);
        buttonCell.classList.add('Button');

        //create new button
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("role", "button");
        button.setAttribute("title", "Import data from JSON");
        button.classList.add('BaseButton');
        button.classList.add('SectionButton');
        button.innerHTML = "<span>Impot JSON</span>";
        button.addEventListener("click", this.actionDialog.bind(this));        
        buttonCell.appendChild(button);

        // Handle remaining data from last JSON import
        this.handleImportNextItem();
      }
    }
  }

  // show modal dialog
  private actionDialog() {
    this.dialogEntry.value = '';
    this.dialog.style.display = 'flex';
  }

  // close modal dialog
  private actionClose() {
    this.dialog.style.display = 'none';
    this.dialogEntry.value = '';
  }

  // start the import
  private actionImport() {
    try {
      const data = JSON.parse(this.dialogEntry.value);

      /*
      [
        {
          "workOrder": "400002-10027", "activity": "100", "description": "Import test #1",
          "time": [
            { "date": "5/1", "hours": "1.5" },
            { "date": "5/2", "hours": "0.75" }
          ]
        },
        {
          "workOrder": "400002-10025", "activity": "100", "description": "Import test #2",
          "time": [
            { "date": "5/3", "hours": "1.25" },
            { "date": "5/5", "hours": "4.75" }
          ]
        }
      ]      
      /*
      // TODO: remove test data
      const data: WorkOrder[] = [
        {
          workOrder: "400002-10027", activity: "100", description: "Import test #1",
          time: [
            { date: "5/1", hours: "1.5" },
            { date: "5/2", hours: "0.75" },
          ]
        },
        {
          workOrder: "400002-10025", activity: "100", description: "Import test #2",
          time: [
            { date: "5/3", hours: "1.25" },
            { date: "5/5", hours: "4.75" },
          ]
        }
      ];
      */

      // put data in session and start with first entry
      const next = data.shift();
      sessionStorage.setItem("workorder_import_running", "true");
      sessionStorage.setItem("workorder_import_next", JSON.stringify({status: ImportWorkOrderStatus.ADD, workOrder: next}));
      sessionStorage.setItem("workorder_import_pending", JSON.stringify(data));
      // close dialog
      this.actionClose();
      // handle first import item
      this.handleImportNextItem();
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
    }
  }

  // get the import object that is currently active
  private getCurrentImportWorkOrder() : ImportWorkOrder {
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

  // change status of import object and store in session
  private updateImportState(next: ImportWorkOrder, status: ImportWorkOrderStatus) {
    next.status = status;
    this.storeCurrentImportWorkOrder(next);
  }

  // get the next import object from the list of pending work orders
  private getNextFromPending() : ImportWorkOrder {
    const raw = sessionStorage.getItem("workorder_import_pending");
    if(raw !== null && raw !== ""){
      const data = JSON.parse(raw);
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
      if (act && act.nodeName === "INPUT" && act.parentElement.title === title) {
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
  private async waitForElements(query: string): Promise<Element[]> {
    var retries = Timesheetimport.retrySeconds;
    do {
      const res = this.standardAddBtn.ownerDocument.querySelectorAll(query);
      if (res !== null && res.length > 0) {
        return [...res];
      }
      await this.wait(1);
    } while(--retries > 0);    
    throw new Error(`Element field not found for: ${query}`);
  }

  // add a new row in timesheet
  private addNewRow(next: ImportWorkOrder) {
    // next state is workorder
    this.updateImportState(next, ImportWorkOrderStatus.WORKORDER);
    // click "Add" button
    //console.log("Add a new row");
    this.standardAddBtn.dispatchEvent(new Event('click'));
    // adding a row will reload the page
    return true;
  }

  // wait for workorder input in current row to get focus and fill in the given text
  private async fillWorkorder(next: ImportWorkOrder) {
    // next state is description
    this.updateImportState(next, ImportWorkOrderStatus.ACTIVITY);
    // fill in workorder
    const input = await this.waitForFocus("Work order");
    const curr = input.value;
    input.value = next.workOrder.workOrder;
    input.dispatchEvent(new KeyboardEvent('keydown', {code:"Tab", key:"Tab", keyCode: 9, which: 9, bubbles: true, cancelable: true}));
    // page reloads if value has changed
    return curr !== input.value;
  }

  // wait for activity input in current row to get focus and fill in the given text
  private async fillActivity(next: ImportWorkOrder) {
    // next state is workorder
    this.updateImportState(next, ImportWorkOrderStatus.DESCRIPTION);
    //console.log("Fill in activity");
    var input = await this.waitForFocus("Activity");
    const curr = input.value;
    input.value = next.workOrder.activity || "100";
    input.dispatchEvent(new Event("blur"));
    // page reloads if value has changed
    return curr !== input.value;
  }

  // look for description area in current row and fill in the given text
  private async fillDescription(next: ImportWorkOrder) {
    // next state is time entry
    this.updateImportState(next, ImportWorkOrderStatus.TIME);
    //console.log("Fill in description", next.workOrder.description);
    const input = this.standardAddBtn.ownerDocument.querySelector(".EditRow [data-type=cell-description] .InputCell input") as HTMLInputElement;
    input.dispatchEvent(new Event("focus"));
    input.value =  next.workOrder.description;
    input.dispatchEvent(new Event("blur"));
    // description changes NEVER trigger a page reload
    return false;
  }

  // look for next time entry with matching (date) title and fill in value
  private async fillTime(next: ImportWorkOrder) {
    if (next.workOrder.time.length > 0) {
      // handle next time entry
      const entry = next.workOrder.time.shift();
      this.storeCurrentImportWorkOrder(next);
      const headers = await this.waitForElements('th[data-type=cell-weekday]');
      const fields = await this.waitForElements('.EditRow [data-type=cell-weekday] .InputCell input');
      for(var i=0 ; i<headers.length ; ++i) {
        const head = headers[i] as HTMLElement;
        if (head.title.includes(entry.date)) {
          // seems to match the date
          const field = fields[i] as HTMLInputElement;
          const curr = field.value;
          field.dispatchEvent(new Event("focus"));
          field.value = `${entry.hours}`;
          field.dispatchEvent(new Event("blur"));
          // page reloads if value has changed
          return curr !== field.value;
        }
      }
      return false;
    }

    // set to done if there are no more time entries left
    this.updateImportState(next, ImportWorkOrderStatus.DONE);
    return false;
  }
  
  // handle the import of the current import item
  private async handleImportNextItem() {
    const next = this.getCurrentImportWorkOrder();
    //console.log("Handle import", next);
    if (next) {
      var willReload = false;

      // run actions as long as we do not have a page reload
      do {
        if (next.status === ImportWorkOrderStatus.ADD) {
          willReload = this.addNewRow(next);
        } else if (next.status === ImportWorkOrderStatus.WORKORDER) {
          willReload = await this.fillWorkorder(next);
        } else if (next.status === ImportWorkOrderStatus.ACTIVITY) {
          willReload = await this.fillActivity(next);
        } else if (next.status === ImportWorkOrderStatus.DESCRIPTION) {
          willReload = await this.fillDescription(next);
        } else if (next.status === ImportWorkOrderStatus.TIME) {
          willReload = await this.fillTime(next);
        } else if (next.status === ImportWorkOrderStatus.DONE) {
          // just reload the frame to finish
          window.location.reload();
          willReload = true;
        }
        //console.log("Will the last action reload the page?", willReload);
      } while(!willReload);

    } else if (sessionStorage.getItem("workorder_import_running") === "true") {
      // HOORAY! We are done!
      sessionStorage.setItem("workorder_import_running", "false");
      alert("JSON import finished");
    }

  }

}
