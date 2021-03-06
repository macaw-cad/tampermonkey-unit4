import './global.less'
import {Configuration} from "../../configuration";

export class Global {

  private active = false;

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  constructor() {
    // allow time entry with "," as separator
    if (Configuration.getInstance().allowCommaEntry()) {
      document.querySelectorAll('.timeEntry input[data-type="Double"]').forEach((e : HTMLInputElement) => {
        this.active = true;
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
      this.active = true;
      e.addEventListener('focusin', (event) => {
        const ele : HTMLElement = <HTMLElement>event.target;
        if(ele.dataset.type && ele !== currentFocus) {
          currentFocus = ele;
          console.log("Scroll into view", window.scrollY, ele.getBoundingClientRect());
          //ele.scrollIntoView({block: "end", inline: "nearest"});
        }
      });
    });
  }

  public isActive() {
    return this.active;
  }

}
