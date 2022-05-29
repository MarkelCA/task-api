// Import the express in typescript file
import express from 'express';
import TaskController from './modules/task/TaskController'
import cors from 'cors'
import TaskService from './modules/task/service/TaskService';
import * as taskJson from './res/tasks.json'
import * as categoriesJson from './res/categories.json'
import * as tagsJson from './res/tags.json'
import TagController from './modules/tag/TagController';
import { TagsJsonService } from './modules/tag/service/TagJsonService';
import CategoryService from './modules/category/service/CategoryService';
import {CategoryJsonService} from './modules/category/service/CategoryJsonService';
import {TaskJsonService} from './modules/task/service/TaskJsonService';
import CategoryController from './modules/category/CategoryController';
import bodyParser from 'body-parser';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const categoryService : CategoryService = new CategoryJsonService(categoriesJson);
const categoryController : CategoryController = new CategoryController(app, categoryService)
categoryController.init();

const tagService : TagsJsonService = new TagsJsonService(tagsJson);
const tagController : TagController = new TagController(app, tagService)
tagController.init();


const taskService : TaskService = new TaskJsonService(taskJson, categoryService, tagService)
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
