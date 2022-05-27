// Import the express in typescript file
import express from 'express';
import tasks from './res/tasks';
 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = process.env.PORT == undefined 
    ? 5000 
    : parseInt(process.env.PORT);
 
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.json(tasks);
    //_res.send("TypeScript With Expresss");
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
