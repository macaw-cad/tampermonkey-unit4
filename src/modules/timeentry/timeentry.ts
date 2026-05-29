import './timeentry.less'
import {Configuration} from "../../configuration";
import {MarkupUtility} from "../MarkupUtility";
import { AbstractModule } from '../AbstractModule';
import { Utils } from '../global/utils';
import { trans } from '../global/trans';

export class TimeEntry extends AbstractModule {

  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  private section!: Element;
  private workingHoursSection!: Element;
  private timesheetDetailsSection!: Element;
  private normalHours = 40;

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
            // add data type attributes to table
            promises.push(MarkupUtility.addTypeToTableCells('tmTimeentry', section));
          }
        } else if (e.textContent == 'Working hours') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.workingHoursSection = section;
            // add markup to working hours
            promises.push(MarkupUtility.addTypeToTableCells('tmWorkinghours', section));
          }
        } else if (e.textContent == 'Timesheet for') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.timesheetDetailsSection = section;
            // add markup to timesheet details
            section.classList.add('tmTimesheetDetails');
            section.querySelectorAll('td.label').forEach(td => {
              if (td.textContent.includes('Normal hours')) {
                const input = td.nextElementSibling?.querySelector('input[type="text"]') as HTMLInputElement;
                if (input) {
                  this.normalHours = Utils.toNumber(input.value);
                }
              }
            });
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
        this.section.querySelectorAll('input[title="Work order - Mandatory"]').forEach((e: Element) => {
          if (e instanceof HTMLInputElement) {
            setTimeout(function () {
              if(document.activeElement === null || document.activeElement.tagName !== "INPUT") {
                e.focus();
              }
              e.scrollIntoView();
            }, 100);
          }
        });

        // add all kind of functionality to the table
        this.add(this.section);

        this.summarize();

        // add observer to get changes after sort
        this.attachMutationObserver();
      }
    }, 100);
  }
  private add(section: Element) {
    // really disable some fields to avoid errors
    if (Configuration.getInstance().hideTimeCodeColumn()) {
      section.querySelectorAll('input[title="Time code"]').forEach((e: Element) => {
        if (e instanceof HTMLInputElement) {
          e.disabled = true;
          e.readOnly = true;
        }
      });
    }

    // always show work item & project descriptions in time entry
    const showDescriptions = Configuration.getInstance().alwaysShowDescriptions();
    const showActivity = Configuration.getInstance().alwaysShowActivity();

    section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
      if (e instanceof HTMLElement) {
        const add = (showDescriptions && (e.getAttribute("data-type") === "cell-workorder" || e.getAttribute("data-type") === "cell-project"))
          || (showActivity && e.getAttribute("data-type") === "cell-activity");
        if (add) {
          if (!e.classList.contains('.tmFixDescription')) {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title') ?? ''));
            e.appendChild(x);
            e.classList.add('tmFixDescription');
          }
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
      const e = section.querySelector(".Excel")?.parentNode;
      if (e) {
        observer.observe(e, {childList: true});
      }
    }
  }

  private summarize() {
    if (this.workingHoursSection) {
      try {
        const tableEntry = this.section.querySelector('table.tmTimeentry tbody');
        const tableWorking = this.workingHoursSection.querySelector('table.tmWorkinghours tbody');

        const sumWorking: number[] = [];
        const sumBreaks: number[] = [];
        const isHoliday: boolean[] = [];
        var overallBooked = 0;

        var cellSumWorking: HTMLElement|null = null;

        if (tableEntry) {
          // iterate over header to find time code column and first weekday column
          const columns = Array.from(this.section.querySelectorAll('table.Excel th'));
          var colTimeCode = Number.MAX_VALUE;
          var colWeekdays = Number.MAX_VALUE;
          for(var col = 0 ; col < columns.length; col++) {
            const cell = columns[col];
            switch(columns[col].getAttribute("data-type")) {
              case 'cell-weekday':
                colWeekdays = Math.min(col, colWeekdays);
                break;
              case 'cell-timecode':
                colTimeCode = col;
                break;
            }
          }

          // identify holidays
          for(var i = 0 ; i < 7; i++) {
            const headlineCell = columns[colWeekdays + i].querySelector('& > div') as HTMLElement;
            const headline = headlineCell?.textContent ?? '';
            if (headlineCell?.style.color == 'rgb(50, 205, 50)') {
              isHoliday[i] = true;
            } else if (headline.includes('Sat') || headline.includes('Sun')) {
              isHoliday[i] = true;
            }
          }

          // iterate over data
          tableEntry.querySelectorAll('& > tr:is(.ListItem, .AltListItem, .EditRow)').forEach(row => {
            const cells = Array.from(row.querySelectorAll('& > td'));
            const timeCode = this.getValueFromCell(cells[colTimeCode]);

            for(var i=0 ; i<7 ; ++i) {
              const hours = Utils.toNumber(this.getValueFromCell(cells[colWeekdays + i]));
              if (timeCode === '99') {
                sumBreaks[i] = (sumBreaks[i] ?? 0) + hours;
              } else {
                sumWorking[i] = (sumWorking[i] ?? 0) + hours;
                overallBooked += hours;
              }
            }
          });

          const lastRow = tableEntry.querySelector('tr.SumItem');
          if (lastRow) {
            // breaks only
            row = document.createElement('tr');
            row.className = "SumItem";
            lastRow.before(row);
            for(var i=0 ; i<8 ; ++i) {
              this.addCell(row, "");
            }
            this.addCell(row, trans('sum_breaks'));
            this.addCell(row, "");            
            var sum = 0;
            for(var i=0 ; i<7 ; ++i) {
              var value = sumBreaks[i] ?? 0;
              sum += value;
              const cell = this.addCell(row, Utils.toLocaleString(value), "right");
              if (isHoliday[i]) {
                cell.style.setProperty("background-color", "#dcdcdc", "important");
              }
              if (sumWorking[i] > 0) {
                if ( (sumWorking[i] > 9 && value < 0.75) || (sumWorking[i] > 6 && value < 0.5) || (sumWorking[i] > 10)) {
                  cell.style.color = "red";
                  cell.style.fontWeight = "700";
                } else {
                  cell.style.color = "green";
                  cell.style.fontWeight = "700";
                }
              }
            }
            this.addCell(row, Utils.toLocaleString(sum));

            // working only
            row = document.createElement('tr');
            row.className = "SumItem";
            lastRow.before(row);
            for(var i=0 ; i<8 ; ++i) {
              this.addCell(row, "");
            }
            this.addCell(row, trans('sum_working'));
            this.addCell(row, "");            
            var sum = 0;
            for(var i=0 ; i<7 ; ++i) {
              var value = sumWorking[i] ?? 0;
              sum += value;
              const cell = this.addCell(row, Utils.toLocaleString(value), "right");
              if (isHoliday[i]) {
                cell.style.setProperty("background-color", "#dcdcdc", "important");
              }
              if (sumWorking[i] > 10) {
                cell.style.color = "red";
                cell.style.fontWeight = "700";
              } else if (sumWorking[i] > 0) {
                cell.style.color = "green";
                cell.style.fontWeight = "700";
              }
            }
            cellSumWorking = this.addCell(row, Utils.toLocaleString(sum));
            const missingBooked = this.normalHours - overallBooked;
            if (cellSumWorking && missingBooked > 0) {
              cellSumWorking.style.color = 'red';
              cellSumWorking.style.fontWeight = '700';
              cellSumWorking.title = trans('missing_weekly_hours', Utils.formatHours(missingBooked), Utils.formatHours(this.normalHours));
            }

          }
        }

        if (tableWorking) {
          // iterate over whole table and calculate the numbers of breaks and other hours
          // for each day
          const timePresent: number[] = [];
          const timeWorking: number[] = [];
          var overallWorking = 0;

          // iterate over working hours
          const working = Array.from(tableWorking.querySelectorAll('tr:is(.EditRow,.ListItem,.AltListItem)'));
          if (working.length == 2) {
            const rowFrom = Array.from(working[0].querySelectorAll('& > td'));
            const rowTo = Array.from(working[1].querySelectorAll('& > td'));
            for(var i=0 ; i<7 ; ++i) {
              const start = this.getValueFromCell(rowFrom[i+2]);
              const end = this.getValueFromCell(rowTo[i+2]);
              const diff = Utils.difference(start, end);
              const diff2 = diff - (sumBreaks[i] ?? 0);
              timePresent[i] = diff;
              timeWorking[i] = diff2;
              overallWorking += diff2;
            }
          }
          
          // add summary
          const lastRow = tableWorking.querySelector('tr[role="presentation"]');
          if (lastRow) {
            // breaks
            row = document.createElement('tr');
            row.className = "AltListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_booked_breaks'), "left");
            var sum = 0;
            for(var i=0 ; i<7 ; ++i) {
              var value = sumBreaks[i] ?? 0;
              sum += value;
              const cell = this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {background: '#dcdcdc'} : {});
              if (timeWorking[i] > 6 && value < 0.5) {
                cell.style.color = "red";
                cell.style.fontWeight = "700";
                cell.title = trans('break_min', '30');
              } else if (timeWorking[i] > 9 && value < 0.75) {
                cell.style.color = "red";
                cell.style.fontWeight = "700";
                cell.title = trans('break_min', '45');
              } else if (timeWorking[i] > 10) {
                cell.style.color = "red";
                cell.style.fontWeight = "700";
                cell.title = trans('maxhours_exceeded', '10');
              }
            }
            this.addCell(row, Utils.formatHours(sum));

            // working hours
            row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_booked_working'), "left");
            var sum = 0;
            for(var i=0 ; i<7 ; ++i) {
              var value = sumWorking[i] ?? 0;
              sum += value;
              this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {background: '#dcdcdc'} : {});
            }
            const cell = this.addCell(row, Utils.formatHours(sum));

            if (overallBooked < overallWorking) {
              cell.style.color = "red";
              cell.style.fontWeight = "700";
              cell.title = trans('missing_booked_hours', Utils.formatHours(overallWorking - overallBooked));
            }
            
            // hours from start and end of day
            var row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_hours_present'), "left");
            var sum = 0;
            for(var i=0 ; i<7 ; ++i) {
              var value = timePresent[i] ?? 0;
              sum += value;
              this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {background: '#dcdcdc'} : {});
            }
            this.addCell(row, Utils.formatHours(sum));

            // hours from start and end of day w/o breaks
            var row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_hours_working'), "left");
            var sum = 0;
            for(var i=0 ; i<7 ; ++i) {
              var value = (timePresent[i] ?? 0) - (sumBreaks[i] ?? 0);
              sum += value;
              this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {background: '#dcdcdc'} : {});
            }
            const cellSum = this.addCell(row, Utils.formatHours(sum));
            if (sum < this.normalHours) {
              cellSum.style.color = "red";
              cellSum.style.fontWeight = "700";
              cellSum.title = trans('missing_working_hours', Utils.formatHours(this.normalHours - sum));
            } else {
              cellSum.style.color = "green";
              cellSum.title = trans('additional_hours', Utils.formatHours(sum - this.normalHours));
            }

          }
        }
      } catch (e: any) {
        // in case of any error, just ignore the summary
        console.error(trans('error_summary_workinghours', e.message));
      }
    }
  }
  private getValueFromCell(cell: Element): string {
    const input = cell.querySelector('.InputCell input') as HTMLInputElement;    
    return (input) ? input.value : (cell.textContent ?? '');
  }
  private addCell(row: Element, value: string, align = "right", style: Partial<CSSStyleDeclaration> = {}) {
    const cell = document.createElement('td');
    cell.className = "GridCell";
    cell.innerText = value;
    Object.entries(style).forEach(([key, value]) => {
      if (value !== undefined) {
        cell.style.setProperty(key, ''+value);
      }
    });
    cell.style.textAlign = align;
    row.appendChild(cell);
    return cell;
  }
}