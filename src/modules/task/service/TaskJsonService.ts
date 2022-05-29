import Task from '../entity/Task';
import TaskService from './TaskService';
//import * as taskJson from '../../../res/tasks.json'
import TagService from '../../tag/service/TagService';
import CategoryService from '../../category/service/CategoryService';
import {TaskJson} from '../entity/TaskJson';

export class TaskJsonService implements TaskService {
    private tasks : Task[]
    private tagService : TagService;
    private categoryService : CategoryService;

    public constructor(jsonTasksFile : TaskJson,
                       categoryService : CategoryService,
                       tagService : TagService
                      ) {
        this.tasks = [...jsonTasksFile.tasks]
        this.tagService = tagService;
        this.categoryService = categoryService;
    }

    getTasks(): Task[] {
        //this.createTask();
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

        if(result.tags)
            result.tags  = result.tags.map((id : number) => this.tagService.getTag(id))

        result.category = this.categoryService.getCategory( result.category )

        return result;
    }

    createTask(task : object): boolean {
        const maxId = this.tasks[this.tasks.length - 1].id
        const newTask : Task = <Task>{id:maxId + 1, ...task}
        console.log(newTask)

        this.tasks.push(newTask);

        return true;
    }

    updateTask(): boolean {
        throw new Error('Method not implemented.');
    }

}
