/// <reference path="./external/gm_config/types/index.d.ts"/>
import './external/gm_config/gm_config';
import packageInfo from '../package.json';

export type FtZDescriptionRule = {
  regex: string;
  template: string;
};

export const DEFAULT_FTZ_DESCRIPTION_RULES: FtZDescriptionRule[] = [
  { regex: '.+', template: '{{Ticket}} {{Comment}}' }
];

/**
 * Work orders whose bookings do not count as presence (vacation, bank holiday, overtime
 * compensation, sick leave, ...): the Excel import books their hours, but their start/end times
 * are neither used for the working hours (From/To) nor for the break gaps.
 * Format: work order with an optional activity in parentheses, "*" as wildcard.
 * Extend this list with new knowledge; users can add or remove rules in the configuration.
 */
export const DEFAULT_NON_PRESENCE_RULES: string[] = [
  '950000-10000',   // DE3 internal: vacation (900), bank holiday (906), child sick (905), overtime compensation (908), ...
  '950100-10025',   // DE3 sick leave (moved away from 950000-10000)
  '940000-10000',   // DE2 internal, assumed to work like 950000-10000 in DE3
  '940100-10025',   // DE2 sick leave, assumed to work like 950100-10025 in DE3
];

type NonPresenceRule = { exclude: boolean, workOrder: RegExp, activity: RegExp | null };

/**
 * Work order (with activity) to book overtime compensation per Unit4 client, used by the Excel
 * import to fill up missing hours of a week. Users can override or add clients in the configuration.
 */
export const DEFAULT_OVERTIME_WORK_ORDERS: { [client: string]: string } = {
  'DE3': '950000-10000 (908)',
  'DE2': '940000-10000 (908)',  // assumed to work like DE3
};

export class Configuration {
  private static instance: Configuration = new Configuration();

  static getInstance() {
    return this.instance;
  }

  constructor() {
    GM_config.init(
      {
        id: 'MacawUnit4Config',
        title: 'Unit4 enhancements configuration (v' + packageInfo.version + ')',
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
            default: false
          },
          hideTimeCodeColumn: {
            label: '[Global]: hide TimeCode column<copy>If you need the column, disable this option</copy>',
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
          handleWorkingHours: {
            label: '[Timesheet Entry]: enable enhancements for working hours<copy>Enable enhancements on time entry screen for working hours. Only active when general time entry screen enhancements are active</copy>',
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
          experimentalFtZExcelImport: {
            label: '[Timesheet Entry]: Import data from Florians tollige Zeiterfassung Excel<copy>This is an experimental feature to fill in workorders based on a "Florians tollige Zeiterfassung" Excel document</copy>',
            labelPos: 'right',
            type: 'checkbox',
            default: false
          },
          nonPresenceWorkOrders: {
            label: '[Timesheet Entry]: Work orders not counting as presence<copy>Bookings on these work orders (e.g. vacation, overtime compensation) are imported with their hours, but their times do not count for the working hours (From/To) and the breaks. One rule per line, optionally with an activity in parentheses and "*" as wildcard; text behind the rule is ignored.<br/>A line starting with "-" removes a default rule or adds an exception, e.g. "-950000-10000 (906)".<br/>Default rules: ' + DEFAULT_NON_PRESENCE_RULES.join(', ') + '</copy>',
            labelPos: 'left',
            type: 'textarea',
            default: ''
          },
          overtimeWorkOrders: {
            label: '[Timesheet Entry]: Work order for overtime compensation per client<copy>Used by the Excel import to fill up missing hours of a week. One client per line with the work order and activity, e.g. "DE3 950000-10000 (908)"; "DE3 -" disables it for a client.<br/>Defaults: ' + Object.entries(DEFAULT_OVERTIME_WORK_ORDERS).map(([client, wo]) => client + ' ' + wo).join(', ') + '</copy>',
            labelPos: 'left',
            type: 'textarea',
            default: ''
          },
          ftzDescriptionRules: {
            label: '[Timesheet Entry]: FtZ description rules<copy>JSON array of {regex, template} rules. First matching rule wins.<br/>Available placeholders: {{Weekday}}, {{Start}}, {{End}}, {{Duration}}, {{WorkOrder}}, {{WorkOrderInput}}, {{Ticket}}, {{Comment}}.<br/>Default: [{"regex":".+","template":"{{Ticket}} {{Comment}}"}]</copy>',
            labelPos: 'left',
            type: 'textarea',
            default: JSON.stringify(DEFAULT_FTZ_DESCRIPTION_RULES)
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
          /* will be read from "Normal hours" field, since that contains only working days excluded bank holidays and start/end of month
          workingHours: {
            label: 'Working hours per week: ',
            labelPos: 'left',
            type: 'text',
            title: 'Enter your working hours, e.g. 40 hours per week',
            default: '40'
          }
          */
        },
        css: 'copy { display: block; margin-left: 40px; font-weight: normal; } #MacawUnit4Config_wrapper { margin-bottom: 100px; } #MacawUnit4Config * { font-size: 13px; font-family: dagny, arial, tahoma, verdana, sans-serif; } #MacawUnit4Config_buttons_holder { background: #f8f8f8; position: fixed; bottom: 0; left: 0; right: 0; padding: 10px; border-top: 1px solid black; } #MacawUnit4Config .config_var textarea { display: block; width: 100%; margin-top: 4px; min-height: 80px; }'
      });
  }

  addConfigUI() {
    const btn = document.createElement("button");
    btn.className = "openConfigBtn";
    btn.innerText = "Configure enhancements";
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

  handleWorkingHours() {
    return GM_config.get('handleWorkingHours');
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

  experimentalFtZExcelImport() {
    return GM_config.get('experimentalFtZExcelImport');
  }

  /*
  myWorkingHours() {
    const value = GM_config.get('workingHours');
    if (typeof value === 'string') {
      const hours = parseFloat(value);
      if (!isNaN(hours)) {
        return hours;
      }
    }
    // use 40 as fallback
    return 40;
  }
  */

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

  // default rules plus the user's rules ("-" = exclude)
  private nonPresenceRules(): NonPresenceRule[] {
    const raw = GM_config.get('nonPresenceWorkOrders');
    const lines = [...DEFAULT_NON_PRESENCE_RULES, ...(typeof raw === 'string' ? raw.split(/\r?\n/) : [])];
    const glob = (pattern: string) => new RegExp('^' + pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
    const rules: NonPresenceRule[] = [];
    lines.forEach(line => {
      // "[-|+]<work order> [(<activity>)] [comment]"
      const match = line.trim().match(/^([+-]?)\s*([\d*][\d*-]*)\s*(?:\(\s*([\d*]+)\s*\))?/);
      if (match) {
        rules.push({ exclude: match[1] === '-', workOrder: glob(match[2]), activity: match[3] ? glob(match[3]) : null });
      }
    });
    return rules;
  }

  /**
   * Does a booking on this work order / activity count as presence? See DEFAULT_NON_PRESENCE_RULES.
   * An empty activity (Unit4 default) only matches rules without activity.
   */
  isNonPresence(workOrder: string, activity: string): boolean {
    const matches = (rule: NonPresenceRule) =>
      rule.workOrder.test(workOrder) && (rule.activity === null || rule.activity.test(activity));
    const rules = this.nonPresenceRules();
    return rules.some(r => !r.exclude && matches(r)) && !rules.some(r => r.exclude && matches(r));
  }

  /**
   * Work order (e.g. "950000-10000 (908)") to book overtime compensation for a Unit4 client
   * (e.g. "DE3"), null if there is none.
   */
  overtimeWorkOrder(client: string): string | null {
    const workOrders: { [client: string]: string } = { ...DEFAULT_OVERTIME_WORK_ORDERS };
    const raw = GM_config.get('overtimeWorkOrders');
    (typeof raw === 'string' ? raw.split(/\r?\n/) : []).forEach(line => {
      const match = line.trim().match(/^(\S+)\s+(.+)$/);
      if (match) {
        workOrders[match[1].toUpperCase()] = match[2].trim();
      }
    });
    const workOrder = workOrders[client.toUpperCase()];
    return workOrder && workOrder !== '-' ? workOrder : null;
  }

  ftzDescriptionRules(): FtZDescriptionRule[] {
    const raw = GM_config.get('ftzDescriptionRules');
    if (typeof raw !== 'string' || raw.trim() === '') {
      return DEFAULT_FTZ_DESCRIPTION_RULES;
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter(r => typeof r.regex === 'string' && typeof r.template === 'string');
      }
    } catch {
      // ignore malformed JSON and fall back to default
    }
    return DEFAULT_FTZ_DESCRIPTION_RULES;
  }

  /**
   * Build the description for a Florians tollige Zeiterfassung booking.
   * The first rule whose regex matches the ticket wins.
   * Falls back to "{{Ticket}} {{Comment}}" if no rule matches or no ticket is present.
   */
  formatFtZDescription(entry: {
    weekday: string;
    start: string;
    end: string;
    duration: string;
    workOrder: string;
    workOrderInput: string;
    ticket: string;
    comment: string;
  }): string {
    const rules = this.ftzDescriptionRules();
    const ticket = entry.ticket.trim();
    const comment = entry.comment.trim();

    for (const rule of rules) {
      let re: RegExp;
      try {
        re = new RegExp(rule.regex, 'i');
      } catch {
        continue;
      }
      if (ticket !== '' && re.test(ticket)) {
        return rule.template
          .replace(/\{\{Weekday\}\}/g, entry.weekday)
          .replace(/\{\{Start\}\}/g, entry.start)
          .replace(/\{\{End\}\}/g, entry.end)
          .replace(/\{\{Duration\}\}/g, entry.duration)
          .replace(/\{\{WorkOrder\}\}/g, entry.workOrder)
          .replace(/\{\{WorkOrderInput\}\}/g, entry.workOrderInput)
          .replace(/\{\{Ticket\}\}/g, ticket)
          .replace(/\{\{Comment\}\}/g, comment);
      }
    }

    return ticket !== '' ? `${ticket} ${comment}` : comment;
  }

}
