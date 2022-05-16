import {version} from '../package.json';
import {TimeEntry} from "./modules/timeentry/timeentry";
import {TimeSheet} from "./modules/timesheet/timesheet";
import {Global} from "./modules/global/global";
import {Configuration} from "./configuration";

class Unit4Enhancer {
  async main () {
    const timeEntry = new TimeEntry();
    const timeSheet = new TimeSheet();
    const global = new Global();

    if (timeEntry.isActive() || timeSheet.isActive() || global.isActive()) {
      console.log("Unit4 enhancements " + version + " active ... ");
      Configuration.getInstance().addConfigUI();
    }
  }

}

const inst = new Unit4Enhancer();
inst.main().catch((e) => {
  console.error(e);
})
