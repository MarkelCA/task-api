// Import the express in typescript file
import express from 'express';
import TaskController from './modules/task/TaskController'
import cors from 'cors'
import TaskService from './modules/task/service/TaskService';
import * as taskJson from './res/tasks.json'
import * as categoriesJson from './res/categories.json'
import * as tagsJson from './res/tags.json'
import {TaskJsonServicebuilder} from './modules/task/TaskServiceBuilder';

const app: express.Application = express();

app.use(cors());

const taskServiceBuilder : TaskJsonServicebuilder = new TaskJsonServicebuilder(tagsJson, categoriesJson, taskJson) ;
const taskService : TaskService = taskServiceBuilder.build();

const taskController = new TaskController(app,taskService);

taskController.init();

// Take a port 3000 for running server.
const port: number = process.env.PORT == undefined 
    ? 5000 
    : parseInt(process.env.PORT);
 
 
// Server setup
app.listen(port, () => {
    console.log(`Task API Server on:
         http://localhost:${port}/`);
});
