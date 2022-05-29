import Task from "../entity/Task";

interface TaskService {
    getTasks()   : Task[];
    getTask(id : number) : Task
    createTask(task : object) : boolean;
    updateTask() : boolean;
}

export default TaskService;
