let tasks = [];
let taskId = 1; 

function addTask(name, description) {
    const newTask = { id: taskId++, name, description };
    tasks.push(newTask);
    console.log(`Task added: ${JSON.stringify(newTask)}`);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        console.log("Task List:", tasks);
    }
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        console.log(`Task updated: ${JSON.stringify(task)}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted: ${JSON.stringify(deletedTask[0])}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

addTask("Buy groceries", "Milk, eggs, bread");
addTask("Study", "Read JavaScript documentation");
viewTasks();
updateTask(1, "Buy groceries and snacks", "Milk, eggs, bread, chips");
deleteTask(2);
viewTasks();
