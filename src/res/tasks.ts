import Task from '../modules/task/entity/Task'
const exampleTask : Task = 
    {
        id:1,
        title: 'Do shopping',
        completed: false,
        category: {machine_name:'personal', fullName:'Personal'},
        description: 'Este es el body de la task y me puedo explayar más',
        tags: [{id:1, tagName:"Programación"}]
    }
const exampleTask2 : Task = 
    {
        id:2,
        title: 'Meet Steve',
        completed: true,
        category: {machine_name:'ocio', fullName:'Ocio'},
        description: 'Este es el body de la task y me puedo explayar más',
        tags: [{id:1, tagName:"Programación"}]
    }

const tasks : Task[] = [exampleTask, exampleTask2];

export default tasks;
