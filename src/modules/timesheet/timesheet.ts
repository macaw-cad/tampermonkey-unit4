import './timesheet.less'
import {Configuration} from "../../configuration";

export class TimeSheet {

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  constructor() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().handleTimesheetDetails()) {
        if(e.textContent.startsWith('Workflow log')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.processWorkflowLow(section);
          }
        }

        if(e.textContent == 'Timesheet details') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.processTimesheetDetails(section);
          }
        }
      }
    });
  }

  // ----------------------------------------------------------------------
  // Workflow Logh (in Timesheet Details)
  // ----------------------------------------------------------------------
  processWorkflowLow(section: Element) {
    section.classList.add('workflowLog');
    GM_addStyle(
      '.workflowLog { position: fixed; top: 0px; z-index: 10; background: white; right: 20px; width: 35% !important; }'
    );
  }

  // ----------------------------------------------------------------------
  // Timesheet Details
  // ----------------------------------------------------------------------
  processTimesheetDetails(section: Element) {
    if (section.querySelector('input[type="checkbox"]') == null) {
      section.classList.add('timesheetDetails', 'timesheetDetailsSimple');
    } else {
      section.classList.add('timesheetDetails', 'timesheetDetailsAdvanced');
    }
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
        x.className='Message DivOverflowNoWrap Ellipsis Description ListDescription';
        x.style.whiteSpace="break-spaces";
        x.appendChild(document.createTextNode(e.getAttribute('title')));
        e.appendChild(x);
      });
    }
  }


}
