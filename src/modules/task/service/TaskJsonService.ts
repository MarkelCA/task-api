import Task from '../entity/Task';
import TaskService from './TaskService';
import * as taskJson from '../../../res/tasks.json'
import TagService from '../../tag/service/TagService';
import {TagsJsonService} from '../../tag/service/TagJsonService';

export class TaskJsonService implements TaskService {
    private tasks : Task[]
    private tagService : TagService;

    public constructor() {
        this.tasks = [...taskJson.tasks]
        this.tagService = new TagsJsonService();
    }

    getTasks(): Task[] {
        return this.tasks.map((task) => this.getTask(task.id));
    }

    /**
      * This function includes tags as an object intead of an id
      */
    getTask(id: number): Task {
        const foundTask = this.tasks.find((task) =>  task.id == id )
        // We use spread operator so we dont edit the task by reference
        const result = <Task>{...foundTask}

        if(foundTask == undefined)
            throw new Error('Task not found with this id');

        result.tags  = result.tags.map((id : number) => this.tagService.getTag(id))

        return result;
    }

    createTask(): boolean {
        throw new Error('Method not implemented.');
    }

    updateTask(): boolean {
        throw new Error('Method not implemented.');
    }

}
