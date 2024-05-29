document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(text) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${text}</span>
            <button>Delete</button>
        `;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);
    }
});
