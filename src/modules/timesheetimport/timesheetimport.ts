import { Configuration } from "../../configuration";
import { AbstractModule } from '../AbstractModule';
import { Utils } from "../global/utils";
import { Importer } from './importer/importer';
import { CloseEditingModeTask, SanityCheckTask } from "./importer/importtask";
import { WorkingEndImportTask, WorkingStartImportTask } from "./importer/workinghours";
import { ActivityImportTask, DescriptionImportTask, HoursImportTask, StartWorkOrderImportTask, TimecodeImportTask, WOImportTask, WorkOrderImportTask, WorkOrderSummaryTask } from "./importer/workorders";
import './timesheetimport.less';

export type ImportWorkingHoursDay = {
  start: string,
  end: string;
}
export type ImportWorkingHours = { [date: string]: ImportWorkingHoursDay };

export type ImportWorkOrderTime = {
  date: string;
  hours: string;
}
export type ImportWorkOrder = {
  timeCode?: string;
  workOrder: string;
  activity?: string;
  description: string;    
  time: ImportWorkOrderTime[];
}

type ImportFormat = {
  days: ImportWorkingHours,
  entries: ImportWorkOrder[];
}
type ImportFormatOld = ImportWorkOrder[];

export type SanityDaily = { [day: string]: { hours: number, breaks: number, workingTime: number } };

export class Timesheetimport extends AbstractModule {
  // max waiting time for a field to be available / get focus
  private static readonly retrySeconds = 10;

  private standardAddBtn!: HTMLButtonElement;
  private dialog!: HTMLElement;
  private dialogEntry!: HTMLTextAreaElement;

  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  private section!: HTMLElement;
  private sectionWorkingHours!: HTMLElement;
  //private progress!: HTMLElement;

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

        // Run pending tasks from importer
        const importer = Importer.getInstance();
        WOImportTask.setSection(this.section);
        WOImportTask.setAddButton(this.standardAddBtn);
        importer.runTasks();
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
      const json = JSON.parse(this.dialogEntry.value) as ImportFormat|ImportFormatOld;
      // check if we have old or new format
      var data: ImportWorkOrder[] = [];
      var days: ImportWorkingHours = {};

      if (json.hasOwnProperty('days') || json.hasOwnProperty('entries')) {
        // new format
        data = (json as ImportFormat).entries ?? [];
        days = (json as ImportFormat).days ?? {};
      } else {
        // old format
        data = json as ImportFormatOld;
        days = {};
      }

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

      const importer = Importer.getInstance();

      // import work orders
      WOImportTask.setSection(this.section);
      WOImportTask.setAddButton(this.standardAddBtn);

      const daily: SanityDaily = {};

      var sumHours = 0, sumBreaks = 0;
      data.forEach((entry: any) => {
        // group all tasks for the same work order together
        const groupId = ["workorders", entry.timeCode, entry.workOrder, entry.activity, entry.description].join('|');
        importer.addTask(new StartWorkOrderImportTask(groupId, entry));
        importer.addTask(new TimecodeImportTask(groupId, entry));
        importer.addTask(new WorkOrderImportTask(groupId, entry));
        importer.addTask(new ActivityImportTask(groupId, entry));
        importer.addTask(new DescriptionImportTask(groupId, entry));
        entry.time.forEach((timeEntry: any) => {
          const hours = Utils.toNumber(timeEntry.hours);
          importer.addTask(new HoursImportTask(groupId, entry, new Date(timeEntry.date), hours));
          // sum hours and breaks
          sumHours += hours;
          if (entry.timeCode === "99") {
            sumBreaks += hours;
          }
          // data for sanity check
          if (!daily[timeEntry.date]) {
              daily[timeEntry.date] = { hours: 0, breaks: 0, workingTime: 0 };
          }
          if (entry.timeCode === "99") {
              daily[timeEntry.date].breaks += hours;
          } else {
              daily[timeEntry.date].hours += hours;
          }
        });
      });

      // import working hours
      Object.entries(days).forEach(([dateStr, day]: [string, ImportWorkingHoursDay]) => {
        const date = new Date(dateStr);
        const groupId = ["workinghours", dateStr].join('|');
        importer.addTask(new WorkingStartImportTask(groupId, date, day.start));
        importer.addTask(new WorkingEndImportTask(groupId, date, day.end));
        // update daily working time for sanity check
        if (!daily[dateStr]) {
            daily[dateStr] = { hours: 0, breaks: 0, workingTime: 0 };
        }
        // calculate working time based on start and end time (format: HH:MM)
        daily[dateStr].workingTime = Utils.difference(day.start, day.end);
      });

      // close all editing modes at the end
      importer.addTask(new CloseEditingModeTask());

      // check sum of hours
      importer.addTask(new WorkOrderSummaryTask(sumHours, sumBreaks));

      // General sanity check
      importer.addTask(new SanityCheckTask(daily));

      // close dialog
      this.actionClose();
      // handle first import item
      importer.runTasks();
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
    }
  }

}
