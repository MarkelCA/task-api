import Task from "../entity/Task";

interface TaskService {
    getTasks()   : Task[];
    getTask(id : number) : Task
    createTask(task : object) : boolean;
    updateTask(task : Task) : boolean;
}

export default TaskService;
