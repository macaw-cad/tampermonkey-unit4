import { Configuration } from "../configuration";

export class MarkupUtility {

  /**
   * Add a data attribute to table head and cells
   * @param table  DOM element of table
   * @param th     DOM element of header cell
   * @param col    column number of header cell
   * @param type   type for data attribute
   */
  public static markTableCells(table: HTMLTableElement, th: HTMLElement, col: number, type: string) {
    // add type to header cell
    th.dataset.type = type;
    // iterate over all rows of the table
    table.querySelectorAll(':scope > tbody > tr').forEach(row => {
      // iterate over all table data cells of the row
      row.querySelectorAll(':scope > td').forEach((td: HTMLElement, key) => {
        // if column number matches, set type data attribute on data cell as well
        if (key == col) {
          td.dataset.type = type;
        }
      });
    });
  }

  /**
   * Hide rows based on content
   * @param table  DOM element of table
   * @param search text to search in cell
   */
  public static hideRow(table: HTMLTableElement, search: string) {
    // iterate over all rows of the table
    table.querySelectorAll(':scope > tbody > tr').forEach((row: HTMLTableRowElement) => {
      // iterate over all table data cells of the row
      row.querySelectorAll(':scope > td').forEach((td: HTMLElement, key) => {
        // if column text matches, hide row
        if (td.innerText == search) {
          row.style.display = "none";
        }
      });
    });
  }

  /**
   * Convert time to 24h
   * @param table  DOM element of table
   */
  public static convertTime(table: HTMLTableElement) {
    // iterate over all rows of the table
    table.querySelectorAll(':scope > tbody > tr').forEach((row: HTMLTableRowElement) => {
      // iterate over all table data cells of the row
      row.querySelectorAll(':scope > td').forEach((td: HTMLElement, key) => {
        // if column matches time, change it
        var match;
        if ((match = td.innerText.match(/^([0-9]{1,2}):([0-9]{2})([AP]M)$/)) !== null) {
          // Convert to 24h format
          const [_, hours, minutes, period] = match;
          let hour = parseInt(hours, 10);
          if (period === 'PM' && hour !== 12) {
            hour += 12;
          } else if (period === 'AM' && hour === 12) {
            hour = 0;
          }
          td.innerText = `${hour.toString().padStart(2, '0')}:${minutes}`;
        }
      });
    });
  }

  /**
   * Add CSS classes and attributes to the whole table
   * 
   * @param table table
   */
  public static addTypes(table: HTMLTableElement) {
    var config = Configuration.getInstance();

    table.querySelectorAll('th').forEach((th: HTMLElement, col) => {
      const text = th.innerText.replace(/[_.\s]/g, '').toLowerCase();
      switch (text) {
        case '':
          // ignore headers with empty text
          break;
        case 'zoom':
        case 'status':
        case 'workorder':
        case 'project':
        case 'activity':
        case 'description':
        case 'servicelines':
        case 'finprjtype':
        case 'timeunit':
        case 'sum':
        case 'invunit':
        case 'value': 
          // add type for some headers
          MarkupUtility.markTableCells(table, th, col, 'cell-' + text)
          break;
        case 'timecode':
          // add type for timecode based on config
          MarkupUtility.markTableCells(table, th, col, config.hideTimeCodeColumn() ? 'cell-hidden-timecode' : 'cell-timecode');
          break;
        default:
          // check if day of week is found
          // Either "Mon MM/DD" or "Mon DD.MM." (dots are removed above!)
          if (text.match(/(mon|tue|wed|thu|fri|sat|sun)[0-9]+\/?[0-9]+/)) {
            MarkupUtility.markTableCells(table, th, col, 'cell-weekday');
          } else {
            console.log("Unknown header '" + text + "'", th);
          }
      }
    });
  }


  public static addTypeToTableCells(name: string, section: Element): Promise<void> {
    return new Promise((resolve, reject) => {
      // since Unit45 changes the DOM frequently (and there are no callbacks or events), we need to check
      // and re-add the classes on a regular basis
      window.setInterval(() => {
        var config = Configuration.getInstance();
        section.querySelectorAll('table.Excel').forEach((table: HTMLTableElement) => {
          if (!table.classList.contains("tmFix")) {
            table.classList.add("tmFix", name);

            MarkupUtility.addTypes(table);
            
            if (config.handleWorkingHours()) {
              MarkupUtility.hideRow(table, 'Hours remaining');
              MarkupUtility.convertTime(table);
            }
            resolve();
          }
        });
      }, 100);
    });
  }

}
