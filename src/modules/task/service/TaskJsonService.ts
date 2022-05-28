import Task from '../entity/Task';
import TaskService from './TaskService';
import * as taskJson from '../../../res/tasks.json'

export class TaskJsonService implements TaskService {
    private tasks : Task[]

    public constructor() {
        this.tasks = taskJson.tasks
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {

        const foundTask = this.tasks.find((task) =>  task.id == id )

        if(foundTask == undefined)
            throw new Error('myError');

        return foundTask;
    }

    createTask(): boolean {
        throw new Error('Method not implemented.');
    }

    updateTask(): boolean {
        throw new Error('Method not implemented.');
    }

}
