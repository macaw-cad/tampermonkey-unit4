import './timesheet.less'
import {Configuration} from "../../configuration";
import {MarkupUtility} from "../MarkupUtility";

export class TimeSheet {

  private active = false;

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  constructor() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().stickyWorkflowLog()) {
        if (e.textContent.startsWith('Workflow log')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.active = true;
            this.processWorkflowLow(section);
          }
        }
      }
      if (Configuration.getInstance().handleTimesheetDetails()) {
        if(e.textContent == 'Timesheet details') {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.active = true;
            this.processTimesheetDetails(section);
          }
        }
      }
    });
  }

  public isActive() {
    return this.active;
  }

  // ----------------------------------------------------------------------
  // Workflow Logh (in Timesheet Details)
  // ----------------------------------------------------------------------
  processWorkflowLow(section: Element) {
    section.classList.add('workflowLog');
  }

  // ----------------------------------------------------------------------
  // Timesheet Details
  // ----------------------------------------------------------------------
  processTimesheetDetails(section: Element) {
    // add data tape attributes to table
    MarkupUtility.addTypeToTableCells(section);

    const interval = window.setInterval(() => {
      if (!section.classList.contains("timeSheetDetails")) {
        // cancel interval, since UI is now initialized
        window.clearInterval(interval);

        // add CSS class for different types of view (simple / advanced)
        if (section.querySelector('input[type="checkbox"]') == null) {
          section.classList.add('timesheetDetails', 'timesheetDetailsSimple');
        } else {
          section.classList.add('timesheetDetails', 'timesheetDetailsAdvanced');
        }

        // CSS class for locked rows
        if (Configuration.getInstance().hideLockedRows()) {
          section.classList.add('hideLocked');
        }

        // mark complete rows for locked cells
        section.querySelectorAll('.GridCell.Locked').forEach(e => {
          e.closest('tr').classList.add('LockedRow');
        });

        // always show work item & project descriptions in timesheet details
        if (Configuration.getInstance().alwaysShowDescriptions()) {
          section.querySelectorAll('tr.MarkRow td[title], tr.ListItemReadOnly td[title], tr.AltListItemReadOnly td[title]').forEach(e => {
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
