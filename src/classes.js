function createProject(title) {
    let tasks = [];

    const createTask = (name, dueDate, description, priority) => {
        return { name, dueDate, description, priority };
    };

    const getTasks = () => tasks;

    const addTask = (name, dueDate, description, priority) => {
        tasks.push(createTask(name, dueDate, description, priority));
    };

    const removeTask = (name) =>
        (tasks = tasks.filter((task) => task.name != name));

    const taskCount = () => tasks.length;

    return { addTask, removeTask, taskCount, getTasks };
}

module.exports = { createProject };
