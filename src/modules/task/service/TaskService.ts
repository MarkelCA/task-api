import Task from "../entity/Task";

interface TaskService {
    getTasks()   : Task[];
    getTask(id : number) : Task
    createTask() : boolean;
    updateTask() : boolean;
}

export default TaskService;
