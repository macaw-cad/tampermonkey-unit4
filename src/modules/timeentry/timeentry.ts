import './timeentry.less'
import {Configuration} from "../../configuration";

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
    section.classList.add('timeEntry');

    // really disable some fields to avoid errors
    section.querySelectorAll('input[title="Time code"]').forEach((e: HTMLInputElement) => {
      e.disabled = true;
      e.readOnly = true;
    });
    // scroll to current entry
    section.querySelectorAll('input[title="Work order - Mandatory"]').forEach((e : HTMLInputElement) => {
      e.focus();
      setTimeout(function() {
        e.scrollIntoView();
      }, 100);
    });

    // always show work item & project descriptions in time entry
    if (Configuration.getInstance().alwaysShowDescriptions()) {
      section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
        let x = document.createElement('div');
        x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
        x.style.whiteSpace = "break-spaces";
        x.appendChild(document.createTextNode(e.getAttribute('title')));
        e.appendChild(x);
      });
    }
  }

}
