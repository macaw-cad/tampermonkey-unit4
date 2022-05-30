/// <reference path="./external/gm_config/types/index.d.ts"/>
import './external/gm_config/gm_config';

export class Configuration {
  private static instance: Configuration = new Configuration();

  static getInstance() {
    return this.instance;
  }

  constructor() {
    GM_config.init(
      {
        id: 'MacawUnit4Config',
        events: {
          save: () => this.save()
        },
        fields: {
          alwaysShowDescriptions: {
            label: '[Global]: Always show descriptions for a workorder',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          handleTimeEntry: {
            label: 'Enhance Timesheet Entry',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          handleTimesheetDetails: {
            label: 'Enhance Timesheet Approval',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          stickyWorkflowLog: {
            label: 'Make Workflow Log sticky (in approval view)',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          hideLockedRows: {
            label: '[Timesheet Approval]: hide rows that you cannot accept/reject',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          allowCommaEntry: {
            label: '[Global]: allow time entry with "," as separator',
            labelPos: 'right',
            type: 'checkbox',
            default: false
          },
        }
      });
  }

  addConfigUI() {
    const btn = document.createElement("button");
    btn.className = "openConfigBtn";
    btn.innerText = "Config";
    btn.title = "Click to configure Unit4 enhancements";
    btn.onclick = () => this.show();
    document.body.appendChild(btn);
  }

  allowCommaEntry() {
    return GM_config.get('allowCommaEntry');
  }

  alwaysShowDescriptions() {
    return GM_config.get('alwaysShowDescriptions');
  }

  handleTimeEntry() {
    return GM_config.get('handleTimeEntry');
  }

  handleTimesheetDetails() {
    return GM_config.get('handleTimesheetDetails');
  }

  stickyWorkflowLog() {
    return GM_config.get('stickyWorkflowLog');
  }

  hideLockedRows() {
    return GM_config.get('hideLockedRows');
  }

  show() {
    GM_config.open();
  }

  save() {
    // reload page to reflect changes
    window.location.reload();
  }

  close() {
    GM_config.close();
  }

}
