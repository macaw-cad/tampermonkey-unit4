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

  public static addTypeToTableCells(section: Element) {
    // since Unit45 changes the DOM frequently (and there are no callbacks or events), we need to check
    // and re-add the classes on a regular basis
    window.setInterval(() => {
      section.querySelectorAll('table.Excel').forEach((table: HTMLTableElement) => {
        if (!table.classList.contains("tmFix")) {
          table.classList.add("tmFix");
          table.querySelectorAll('th').forEach((th: HTMLElement, col) => {
            const text = th.innerText.replace(/[_.\s]/g, '').toLowerCase();
            switch (text) {
              case '':
                // ignore headers with empty text
                break;
              case 'zoom':
              case 'status':
              case 'timecode':
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
                // add CSS class for some headers
                MarkupUtility.markTableCells(table, th, col, 'cell-' + text)
                break;
              default:
                // check if day of week is found
                if (text.match(/(mon|tue|wed|thu|fri|sat|sun)[0-9]+\/[0-9]+/)) {
                  MarkupUtility.markTableCells(table, th, col, 'cell-weekday');
                } else {
                  console.log("Unknown header '" + text + "'", th);
                }
            }
          });
        }
      });
    }, 100);
  }

}
