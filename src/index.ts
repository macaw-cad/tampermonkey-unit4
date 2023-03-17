import packageInfo from '../package.json';
import {TimeEntry} from "./modules/timeentry/timeentry";
import {TimeSheet} from "./modules/timesheet/timesheet";
import {Timesheetactions} from "./modules/timesheetactions/timesheetactions";
import {Global} from "./modules/global/global";
import {Configuration} from "./configuration";

class Unit4Enhancer {
  async main () {
    const timeEntry = new TimeEntry();
    const timeSheet = new TimeSheet();
    const timeSheetActions = new Timesheetactions();
    const global = new Global();
    const version = packageInfo.version;

    if (timeEntry.isActive() || timeSheet.isActive() || timeSheetActions.isActive() || global.isActive()) {
      console.log("Unit4 enhancements " + version + " active ... ");
    }

    if(window.parent == window.self) {
      // only show config button on top level
      Configuration.getInstance().addConfigUI();
    }
  }

}

const inst = new Unit4Enhancer();
inst.main().catch((e) => {
  console.error(e);
})
