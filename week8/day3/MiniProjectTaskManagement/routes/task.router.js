const express = require("express")
const fs = require("fs");
const path =require("path");

const taskRouter = express.Router();
const tasksFilePath = path.join(__dirname, "../tasks.json");


function readTasks() {
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
}

function writeTasks(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

taskRouter.get("/", (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});


taskRouter.get("/:id", (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
});

taskRouter.post('/', (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks.length + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        completed: false
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});


taskRouter.put("/:id", (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    const updatedTask = {
        ...tasks[taskIndex],
        title: req.body.title || tasks[taskIndex].title,
        description: req.body.description || tasks[taskIndex].description,
        completed: req.body.completed !== undefined ? req.body.completed : tasks[taskIndex].completed
    }
    tasks[taskIndex] = updatedTask;
    writeTasks(tasks);
    res.json(updatedTask);
})

taskRouter.delete("/:id", (req, res) => {
    let tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === raseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: "Task not found" });
    }
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    writeTasks(tasks);
    res.status(204).end();
});

module.exports = {
    taskRouter,
};