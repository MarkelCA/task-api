import {Application, Request, Response} from 'express'
import Task from './entity/Task';
import {TaskJsonService} from './service/TaskJsonService';
import TaskService from './service/TaskService';

export default class TaskController {
    private service : TaskService;


    public constructor(private app : Application) { 
        this.service = new TaskJsonService()
    }

    public init() {
        this.app.get('/', (_req, _res) => { this.getTasks(_req, _res)});
        this.app.get('/:id', (_req, _res) => { this.getTask(_req, _res)});
    }

    private getTasks(_req : Request, _res : Response) {
        const tasks : Task[] = this.service.getTasks();
        _res.json(tasks);
    }

    private getTask(req : Request, res : Response) {
        const { id } = req.params
        try {
            const task = this.service.getTask(parseInt(id));
            res.json(task)
        } catch(e) {
            res.json("Task not found")
        }
    }

}
