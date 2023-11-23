import packageInfo from '../package.json';
import {TimeEntry} from "./modules/timeentry/timeentry";
import {TimeSheet} from "./modules/timesheet/timesheet";
import { Timesheetactions } from './modules/timesheetactions/timesheetactions';
import {Global} from "./modules/global/global";
import {Configuration} from "./configuration";
import { Timesheetimport } from './modules/timesheetimport/timesheetimport';
import { AbstractModule } from './modules/AbstractModule';

class Unit4Enhancer {
  // list of modules to use
  private static modules = [
    TimeEntry,
    TimeSheet,
    Timesheetactions,
    Timesheetimport,
    Global
  ];

  async main () {
    const version = packageInfo.version;

    var active = false;
    Unit4Enhancer.modules.forEach(m => {
      active ||= new m().isActive();
    });

    if (active) {
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
