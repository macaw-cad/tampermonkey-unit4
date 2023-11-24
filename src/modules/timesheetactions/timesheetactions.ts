import './timesheetactions.less'
import {Configuration} from "../../configuration";
import { AbstractModule } from '../AbstractModule';

export class Timesheetactions extends AbstractModule {

  private standardAddBtn: Element;
  private standardDeleteBtn: Element;

  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  constructor() {
    super();
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().experimentalNewActionButtons()) {
        if (e.textContent.startsWith('Time entry')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.setActive();
            this.prependNumberofRowsButton(section);
            //this.appendDeleteEmptyButton(section);
          }
        }
      }
    });
  }

  prependNumberofRowsButton(tablesection: Element) {
    if(tablesection){
      const table = tablesection.querySelector('.TableButtonRow').closest('table');

      if(table){

        //get Instance of original 'Add' btn
        table.querySelectorAll('button').forEach(e => {
          if (Configuration.getInstance().experimentalNewActionButtons()) {
            if (e.textContent.startsWith('Add')) {
              this.standardAddBtn = e;
            }
          }
        });

        //create new table cell
        const inputCell = table.rows[0].insertCell(0);
        inputCell.classList.add('Input');

        //create new table cell
        const buttonCell = table.rows[0].insertCell(1);
        buttonCell.classList.add('Button');

        //create new table cell
        const sepCell = table.rows[0].insertCell(2);

        //create new input
        const input = document.createElement('input');
        input.setAttribute("id", "add-rows-num");
        input.setAttribute('type', 'number');
        input.setAttribute('min', '1');
        input.setAttribute('max', '99');
        input.classList.add('Edit');
        input.value = '10';

        //create new button
        const button = document.createElement("button");
        button.setAttribute("id", "add-rows-btn");
        button.setAttribute("type", "button");
        button.setAttribute("role", "button");
        button.setAttribute("title", "Add new rows to the table");
        button.classList.add('BaseButton');
        button.classList.add('SectionButton');
        button.innerHTML = "<span>Add rows</span>";

        button.addEventListener("click", () => {
          let repeat = 10;

          if(!isNaN(parseInt(input.value))){
            repeat = parseInt(input.value);
          }

          sessionStorage.setItem("sw_repeatbtnclick", String(repeat));
          this.standardAddBtn.dispatchEvent(new Event('click'));
        });

        //create seperator
        let sepWrapper = document.createElement("div");
        sepWrapper.innerHTML = '&nbsp;|&nbsp;'

        // when the first row was added, this should do the trick
        if(sessionStorage.getItem("sw_repeatbtnclick")!== ""){
          let item = parseInt(sessionStorage.getItem("sw_repeatbtnclick"));
          if(item > 1){
            item = item - 1;
            sessionStorage.setItem("sw_repeatbtnclick", String(item));
            this.standardAddBtn.dispatchEvent(new Event('click'));
          } else{
            sessionStorage.setItem("sw_repeatbtnclick", "");
          }
        }

        inputCell.appendChild(input);
        buttonCell.appendChild(button);
        sepCell.appendChild(sepWrapper);
      }
    }
  }

  appendDeleteEmptyButton(tablesection: Element){
    if(tablesection){
      const table = tablesection.querySelector('.TableButtonRow').closest('table');

      if(table){

        //get Instance of original 'Delete' btn
        table.querySelectorAll('button').forEach(e => {
          if (Configuration.getInstance().experimentalNewActionButtons()) {
            if (e.textContent.startsWith('Delete')) {
              this.standardDeleteBtn = e;
            }
          }
        });

        //create new table cell
        const buttonCell = table.rows[0].insertCell(5);
        buttonCell.classList.add('Button');

        //create new button
        const button = document.createElement("button");
        button.setAttribute("id", "delete-empty-rows-btn");
        button.setAttribute("type", "button");
        button.setAttribute("role", "button");
        button.setAttribute("title", "Delete empty rows with no hours");
        button.setAttribute("onclick", "");
        button.classList.add('BaseButton');
        button.classList.add('SectionButton');
        button.innerHTML = "<span>Delete empty</span>";

        button.addEventListener("click", () => {
          let repeat = 1;
          //TODO: search empty rows and click selectbox
          //this.standardDeleteBtn.dispatchEvent(new Event('click'));
        });

        buttonCell.appendChild(button);
      }
    }
  }

}
