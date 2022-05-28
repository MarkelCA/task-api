// Import the express in typescript file
import express from 'express';
import tasks from './res/tasks';
import TaskController from './modules/task/TaskController'
import cors from 'cors'
 
// Initialize the express engine
const app: express.Application = express();

app.use(cors());

const taskController = new TaskController(app);
taskController.init();

// Take a port 3000 for running server.
const port: number = process.env.PORT == undefined 
    ? 5000 
    : parseInt(process.env.PORT);
 
// Handling '/' Request
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
