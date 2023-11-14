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
          alwaysShowActivity: {
            label: '[Global]: Always show descriptions for an activity<copy>Display the name of the activity whereever possible.</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: false
          },
          allowCommaEntry: {
            label: '[Global]: allow time entry with "," as separator<copy>Enable comma as decimal separator (in addition to the dot). Does not work consistently, so by default it is disabled</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: false
          },
          fixedDialogs: {
            label: '[Global]: make dialogs sticky and centered',
            labelPos: 'right',
            type: 'checkbox',
            default: true
          },
          hideTimeCodeColumn: {
            label: '[Global]: hide TimeCode column<copy>If you need the column, disable this option</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: true
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
          experimentalNewActionButtons: {
            label: '[Timesheet Entry]: Add X rows at once</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: false
          },
          experimentalJsonImport: {
            label: '[Timesheet Entry]: Import data from JSON<copy>This is an experimental feature for now and enabled to fill in workorders based on a JSON document</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: false
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

  fixedDialogs() {
    return GM_config.get('fixedDialogs');
  }

  alwaysShowDescriptions() {
    return GM_config.get('alwaysShowDescriptions');
  }

  alwaysShowActivity() {
    return GM_config.get('alwaysShowActivity');
  }

  handleTimeEntry() {
    return GM_config.get('handleTimeEntry');
  }

  hideTimeCodeColumn() {
    return GM_config.get('hideTimeCodeColumn');
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

  experimentalNewActionButtons() {
    return GM_config.get('experimentalNewActionButtons');
  }

  experimentalJsonImport() {
    return GM_config.get('experimentalJsonImport');
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
