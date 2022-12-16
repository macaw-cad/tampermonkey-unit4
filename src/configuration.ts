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
        title: 'Unit4 enhancements configuration',
        events: {
          save: () => this.save()
        },
        fields: {
          alwaysShowDescriptions: {
            label: '[Global]: Always show descriptions for a workorder<copy>Display the name of the workorder and project whereever possible.</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          allowCommaEntry: {
            label: '[Global]: allow time entry with "," as separator<copy>Enable comma as decimal separator (in addition to the dot). Does not work consistently, so by default it is disabled</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: false
          },
          handleTimeEntry: {
            label: '[Timesheet Entry]: enable enhancements<copy>Enable enhancements on time entry screen</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          handleTimesheetDetails: {
            label: '[Timesheet Approval]: enable enhancements<copy>Enable enhancements on approval / rejection screen</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          stickyWorkflowLog: {
            label: '[Timesheet Approval]: Make Workflow Log sticky (in approval view)<copy>In Approval/Reject view, make the box with the log entry sticky, so it it visible all the time. This might lead to the box overlapping your time entries, so by default this is disabled</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          hideLockedRows: {
            label: '[Timesheet Approval]: hide rows that you cannot accept/reject<copy>In Approval screen, hide all rows that you are not responsible for</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
        },
        css: 'copy { display: block; margin-left: 40px; font-weight: normal }'
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
