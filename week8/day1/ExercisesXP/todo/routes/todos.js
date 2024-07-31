const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [
    {
    id: 1,
    thing: "Check products for purchase",
    },
    {
    id: 2,
    thing: "Make an appointment",
    },
    {
    id: 3,
    task: "buy tickets for a lecture",
    },
];

// Get all to-do items
router.get('/todos', (req, res) => {
    res.json(todos);
  });
  
// Add a new to-do item
router.post('/todos', (req, res) => {
    const {task } = req.body;
    if (task == null) {
        return res.status(400).json({msg: "Task description required"});
    }
    const newTask = {
        id: todos.length + 1,
        task,
    }
    todos.push(newTask)
    res.status(201).json(newTask);
});

// Update a to-do item by ID
 router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: `ID = ${id} not found`});

    todos[index] = { id: Number(id), ...req.body };
    res.json(todos[index]);
});

// Delete a to-do item by ID
router.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: `ID = ${id} not found`});

    todos.splice(index, 1)
    res.status(200).json({ msg: "Task deleted"})
});

module.exports = router;