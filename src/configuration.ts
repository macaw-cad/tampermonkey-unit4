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
        'id': 'MacawUnit4Config',
        'fields': {
          'allowCommaEntry': {
            'label': 'allow time entry with "," as separator',
            'type': 'checkbox',
            'default': false
          },
          'alwaysShowDescriptions': {
            'label': 'always show work item & project descriptions',
            'type': 'checkbox',
            'default': true
          },
          'handleTimeEntry': {
            'label': 'handle time entry screen (for entering bookings)',
            'type': 'checkbox',
            'default': true
          },
          'handleTimesheetDetails': {
            'label': 'handle timesheet details (for approving bookings)',
            'type': 'checkbox',
            'default': true
          },
          'hideLockedRows': {
            'label': 'hide rows in details that you cannot accept/reject',
            'type': 'checkbox',
            'default': true
          }
        }
      });
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

  hideLockedRows() {
    return GM_config.get('hideLockedRows');
  }

  show() {
    GM_config.open();
  }

  close() {
    GM_config.close();
  }

}
