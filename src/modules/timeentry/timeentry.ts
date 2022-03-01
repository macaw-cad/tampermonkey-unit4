import './timeentry.less'
import {Configuration} from "../../configuration";
import {MarkupUtility} from "../MarkupUtility";

export class TimeEntry {

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  constructor() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().handleTimeEntry()) {
        if(e.textContent == 'Time entry') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.processTimeEntry(section);
          }
        }
      }
    });
  }

  private processTimeEntry(section: Element) {
    // add data tape attributes to table
    MarkupUtility.addTypeToTableCells(section);

    window.setInterval(() => {
      if (!section.classList.contains("timeEntry")) {
        section.classList.add('timeEntry');
        // scroll to current entry
        section.querySelectorAll('input[title="Work order - Mandatory"]').forEach((e: HTMLInputElement) => {
          e.focus();
          setTimeout(function () {
            e.scrollIntoView();
          }, 100);
        });
      }

      // really disable some fields to avoid errors
      section.querySelectorAll('input[title="Time code"]').forEach((e: HTMLInputElement) => {
        e.disabled = true;
        e.readOnly = true;
      });

      // always show work item & project descriptions in time entry
      if (Configuration.getInstance().alwaysShowDescriptions()) {
        section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
          if (e.querySelectorAll('.tmFixDescription').length == 0) {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription tmFixDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title')));
            e.appendChild(x);
          }
        });
      }
    }, 100);
  }

}
