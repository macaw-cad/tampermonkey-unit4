import './timeentry.less'
import {Configuration} from "../../configuration";
import {MarkupUtility} from "../MarkupUtility";
import { AbstractModule } from '../AbstractModule';

export class TimeEntry extends AbstractModule {

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  private section: Element;

  public initModule(): Promise<any> {
    // mark time entry table with special CSS class
    if (Configuration.getInstance().handleTimeEntry()) {
      const promises: Promise<void>[] = [];
      document.querySelectorAll('h2.SectionTitle').forEach(e => {
        if(e.textContent == 'Time entry') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.section = section;
            this.setActive();
            // add data typ3 attributes to table
            promises.push(MarkupUtility.addTypeToTableCells('timeentry', section));
          }
        }
      });
      return Promise.all(promises);
    }
    return Promise.resolve();
  }

  public executeModule(): void {
    const interval = window.setInterval(() => {
      if (!this.section.classList.contains("timeEntry")) {
        // cancel interval, since UI is now initialized
        window.clearInterval(interval);

        // add CSS class
        this.section.classList.add('timeEntry');

        // scroll to current entry
        this.section.querySelectorAll('input[title="Work order - Mandatory"]').forEach((e: HTMLInputElement) => {
          setTimeout(function () {
            if(document.activeElement === null || document.activeElement.tagName !== "INPUT") {
              e.focus();
            }
            e.scrollIntoView();
          }, 100);
        });

        // add all kind of functionality to the table
        this.add(this.section);

        // add observer to get changes after sort
        this.attachMutationObserver();
      }
    }, 100);
  }
  private add(section: Element) {
    // really disable some fields to avoid errors
    if (Configuration.getInstance().hideTimeCodeColumn()) {
      section.querySelectorAll('input[title="Time code"]').forEach((e: HTMLInputElement) => {
        e.disabled = true;
        e.readOnly = true;
      });
    }

    // always show work item & project descriptions in time entry
    const showDescriptions = Configuration.getInstance().alwaysShowDescriptions();
    const showActivity = Configuration.getInstance().alwaysShowActivity();

    section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
      const add = (showDescriptions && (e.getAttribute("data-type") === "cell-workorder" || e.getAttribute("data-type") === "cell-project"))
        || (showActivity && e.getAttribute("data-type") === "cell-activity");
      if (add) {
        if (!e.classList.contains('.tmFixDescription')) {
          let x = document.createElement('div');
          x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
          x.style.whiteSpace = "break-spaces";
          x.appendChild(document.createTextNode(e.getAttribute('title')));
          e.appendChild(x);
          e.classList.add('tmFixDescription');
        }
      }
    });
  }

  private attachMutationObserver() {
    const section = document.querySelector(".timeEntry");
    if (section) {
      const observer = new MutationObserver(mutationRecords  => {
        // reintegrate functionality
        this.add(section);
      });
      // get the parent element of the table and start observing
      const e = section.querySelector(".Excel").parentNode;
      observer.observe(e, {childList: true});
   }
  }

}