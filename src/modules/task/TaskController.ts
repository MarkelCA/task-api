import {Application, Request, Response} from 'express'
import Task from './entity/Task';
import TaskService from './service/TaskService';

export default class TaskController {
    private service : TaskService;


    public constructor(private app : Application, service : TaskService) { 
        this.service = service
    }

    public init() {
        this.app.get('/tasks',     (_req : Request, _res : Response) => { this.getPendindTasks(_req, _res)});
        this.app.get('/history',   (_req : Request, _res : Response) => { this.getCompletedTasks(_req, _res)});
        this.app.get('/tasks/:id', (_req : Request, _res : Response) => { this.getTask(_req, _res) });
        this.app.post('/tasks',    (_req : Request, _res : Response) => { this.newTask(_req, _res) });
    }

    private getTasks(_req : Request, _res : Response) {
        const tasks : Task[] = this.service.getTasks();
        _res.json(tasks);
    }

    private getPendindTasks(req : Request, res : Response) {
        const result = this.service.getTasks().filter((task) => task.completed === false)
        res.json(result);
    }

    private getCompletedTasks(req : Request, res : Response) {
        const result = this.service.getTasks().filter((task) => task.completed === true)
        res.json(result);
    }

    private getTask(req : Request, res : Response) {
        const { id } = req.params
        try {
            const task = this.service.getTask(parseInt(id));
            res.json(task)
        } catch(e) {
            res.json("Couldn't find this task.")
        }
    }

    private newTask(req : Request, res : Response) {
        const { body : task } = req
        this.service.createTask(task);
        res.json('uu')
    }

}
