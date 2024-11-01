import './timesheet.less'
import {Configuration} from "../../configuration";
import {MarkupUtility} from "../MarkupUtility";
import { AbstractModule } from '../AbstractModule';

export class TimeSheet extends AbstractModule {

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  private sectionWorkflow: Element;
  private sectionTimesheet: Element;

  public initModule(): Promise<any> {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().stickyWorkflowLog()) {
        if (e.textContent.startsWith('Workflow log')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.sectionWorkflow = section;
            this.setActive();
            this.sectionWorkflow.classList.add('workflowLog');
          }
        }
      }

      const promises = [];
      if (Configuration.getInstance().handleTimesheetDetails()) {
        if(e.textContent == 'Timesheet details') {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.sectionTimesheet = section;
            this.setActive();
            // add data tape attributes to table
            promises.push(MarkupUtility.addTypeToTableCells('timesheet', section));
          }
        }
      }
      return Promise.all(promises);
    });
    return Promise.resolve();
  }

  // ----------------------------------------------------------------------
  // Timesheet Details
  // ----------------------------------------------------------------------
  public executeModule(): void {

    const interval = window.setInterval(() => {
      if (!this.sectionTimesheet.classList.contains("timeSheetDetails")) {
        // cancel interval, since UI is now initialized
        window.clearInterval(interval);

        // add CSS class for different types of view (simple / advanced)
        if (this.sectionTimesheet.querySelector('input[type="checkbox"]') == null) {
          this.sectionTimesheet.classList.add('timesheetDetails', 'timesheetDetailsSimple');
        } else {
          this.sectionTimesheet.classList.add('timesheetDetails', 'timesheetDetailsAdvanced');
        }

        // CSS class for locked rows
        if (Configuration.getInstance().hideLockedRows()) {
          this.sectionTimesheet.classList.add('hideLocked');
        }

        // mark complete rows for locked cells
        this.sectionTimesheet.querySelectorAll('.GridCell.Locked').forEach(e => {
          e.closest('tr').classList.add('LockedRow');
        });

        // always show work item & project descriptions in timesheet details
        if (Configuration.getInstance().alwaysShowDescriptions()) {
          this.sectionTimesheet.querySelectorAll('tr.MarkRow td[title], tr.ListItemReadOnly td[title], tr.AltListItemReadOnly td[title]').forEach(e => {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title')));
            e.appendChild(x);
          });
        }
      }
    }, 100);
  }


}
