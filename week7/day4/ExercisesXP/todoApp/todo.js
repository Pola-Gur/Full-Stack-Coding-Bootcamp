export class TodoList {
    constructor() {
    this.tasks = [];
    }
    
    addTask(name) {
        let newTask = {
            "name": name,
            "isCompleted": false
        };
        this.tasks.push(newTask)
    }

    makeCompleted(nameTask) {
        for (let task of this.tasks) {
            if (task.name === nameTask) {
                task.isCompleted = true;
            }
        }
    }
    showTasks() {
        console.log(this.tasks);
    } 
}






// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.