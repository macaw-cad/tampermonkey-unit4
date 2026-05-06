import { Utils } from "../../global/utils";
import { CloseEditingModeTask, ImportTask, SanityCheckTask } from "./importtask";
import { Progress } from "./progress";
import { WHImportTask } from "./workinghours";
import { WOImportTask } from "./workorders";

type FailedImport = {
  data: any
  message: string;
}

export class Importer {
    private static instance: Importer;
    private tasks: ImportTask[] = [];
    private progress: Progress;

    public static getInstance(): Importer {
        if (!Importer.instance) {
            Importer.instance = new Importer();
            window.addEventListener("beforeunload", (event) => { console.log("Page gets reloaded ...")});
        }
        return Importer.instance;
    }

    private constructor() {
        const tasks = sessionStorage.getItem('importerTasks');
        this.tasks = tasks ? JSON.parse(tasks) : [];
        this.progress = new Progress(document.querySelector('.PageTitle') as HTMLElement);
    }
    private storeTasks(): void {
        const tasks = this.tasks.map(task => ( task instanceof ImportTask ? { task: task.constructor.name, ...task } : task ));
        sessionStorage.setItem('importerTasks', JSON.stringify(tasks));
    }
    public addTask(task: ImportTask): void {
        this.tasks.push(task);
        this.storeTasks();
    }
    public unshiftTask(task: ImportTask): void {
        this.tasks.unshift(task);
        this.storeTasks();
    }
    public clearTaskGroup(groupId: string): void {
        this.tasks = this.tasks.filter(task => this.obj(task).getGroupId() !== groupId);
        this.storeTasks();
    }

    private obj(taskData: any): ImportTask {
        if (taskData instanceof ImportTask) {
            // already have a full object
            return taskData;
        }

        // decide based on task property

        // general tasks
        switch (taskData.task) {
            case 'CloseEditingModeTask':
                return new CloseEditingModeTask();
            case 'SanityCheckTask':
                return new SanityCheckTask(taskData.data);
        }

        // tasks from other modules
        const task = WOImportTask.createTask(taskData) || WHImportTask.createTask(taskData);
        if (task) {
            return task;
        }
        throw new Error('Unknown task type: ' + taskData.task + "|" + JSON.stringify(taskData));
    }

    public currentTask(): ImportTask | undefined {
        const taskData = this.tasks[0];
        return taskData ? this.obj(taskData) : undefined;
    }

    public popTask(): ImportTask | undefined {
        const task = this.tasks.shift();
        this.storeTasks();
        return task && this.obj(task);
    }

    public async runTasks(): Promise<void> {
        var task: ImportTask | undefined;
        if (this.tasks.length > 0) {
            sessionStorage.setItem("show_summary_on_finish", "true");
            this.progress.updatePending(this.tasks.length);

            while ((task = this.popTask()) !== undefined) {
                // run the task
                const result = await task.run();
                if (result.reload) {
                    if (result.retry) {
                        // retry the same task again
                        this.unshiftTask(task);
                    }
                    // last action should reload the page - if this has not been done for 5s,
                    // log an error and proceed with next action?
                    await new Promise(f => setTimeout(f, 5000));
                    // page has not yet reloaded
                    if (result.recoverable) {
                        // recoverable => log error and move on with next action                    
                        this.addFailed(result.failureReason);
                    } else { 
                        // not recoverable => log error and abort rest of workorder
                        this.addFailed(result.failureReason);
                        // skip tasks for same group
                        this.clearTaskGroup(task.getGroupId());
                    }
                } else if (result.failed) { 
                    // not recoverable => log error and abort rest of workorder
                    this.addFailed(result.failureReason);
                    // skip tasks for same group
                    this.clearTaskGroup(task.getGroupId());
                }
                this.progress.updatePending(this.tasks.length);
            }
        }

        if (sessionStorage.getItem("show_summary_on_finish") === "true") {
            // Show summary when at least one task has been processed
            sessionStorage.removeItem("show_summary_on_finish");
            const failed = this.getFailed();
            var text = '';
            if (failed.length > 0) {
                text = "JSON import finished with " + failed.length + " failed imports:\n";
                failed.forEach((f: FailedImport) => {
                    text += f.message;
                    if (f.data) {
                        text += " | data: " + JSON.stringify(f.data);
                    } 
                    text += "\n----------------------------------------------------------------------------------------------------\n";
                });
            } else { 
                text = "JSON import finished\n";
            }
            Utils.showDialog(text);
        }
    }

    //
    // failure handling
    //
    // add an entry to the failed ones
    public addFailed(message?: string, data?: any) {
        if (message) {
            // load failed ones    
            var failedList = this.getFailed();
            failedList.push({ message, data });
            sessionStorage.setItem("import_failed", JSON.stringify(failedList));
        }
    }
    public getFailed(): FailedImport[] {
        var rawFailedList = sessionStorage.getItem("import_failed");
        sessionStorage.removeItem("import_failed");
        var failedList = [];
        if (rawFailedList !== null && rawFailedList !== "") {
            failedList = JSON.parse(rawFailedList);
        }
        return failedList;
    }

}

