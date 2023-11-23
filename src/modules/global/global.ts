import './global.less'
import {Configuration} from "../../configuration";
import { AbstractModule } from '../AbstractModule';

export class Global extends AbstractModule {

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  constructor() {
    super();

    const config = Configuration.getInstance();

    // allow time entry with "," as separator
    if (config.allowCommaEntry()) {
      document.querySelectorAll('.timeEntry input[data-type="Double"]').forEach((e : HTMLInputElement) => {
        this.setActive();
        e.addEventListener('keydown', event => {
          if (event.key == ',') {
            let sel = e.selectionStart;
            e.value = e.value.slice(0,sel)+"."+e.value.slice(sel);
            e.setSelectionRange(sel+1,sel+1);
          }
        });
      });
    }

    // scroll input with focus into view
    var currentFocus : HTMLElement = null;
    document.querySelectorAll('.timeEntry').forEach((e) => {
      this.setActive();
      e.addEventListener('focusin', (event) => {
        const ele : HTMLElement = <HTMLElement>event.target;
        if(ele.dataset.type && ele !== currentFocus) {
          currentFocus = ele;
          console.log("Scroll into view", window.scrollY, ele.getBoundingClientRect());
          //ele.scrollIntoView({block: "end", inline: "nearest"});
        }
      });
    });

    // fixed centered dialogs
    if (config.fixedDialogs()) {
      document.body.classList.add("fixedDialog");
    } else {
      document.body.classList.remove("fixedDialog");
    }

    // add some CSS classes based on configuration
    if (config.alwaysShowDescriptions()) document.body.classList.add("alwaysShowDescription");
    if (config.alwaysShowActivity()) document.body.classList.add("alwaysShowActivity");
  }

}
