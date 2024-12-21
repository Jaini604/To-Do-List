//Selecting  DOM elements

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

//Loading  tasks from local storage

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(taskText => {
    createTaskElement(taskText);
  });
}

//Storing tasks to local storage

function storeTasks() {
  const tasks = Array.from(taskList.children).map(item => item.textContent.trim());
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Creating a new task element

function createTaskElement(taskText) {
  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  //Adding a task text

  listItem.innerHTML = `<span>${taskText}</span>`;

  //Appending to task list

  taskList.appendChild(listItem);
}

//Adding a new task

function addTask() {
  const taskText = taskInput.value.trim(); 

  if (taskText === '') {
    alert('Enter some task!');
    return;
  }

  //Creating and appending the new task

  createTaskElement(taskText);

  //Saving the data to local storage

  storeTasks();

  //Clearing input field

  taskInput.value = '';
}

//Removing a task 

taskList.addEventListener('dblclick', (event) => {
  const target = event.target.closest('.task-item');
  if (target) {
    target.remove();
   storeTasks();
  }
})

//Attaching event listener to the Add Task button

addTaskBtn.addEventListener('click', addTask);

//Adding Enter keypress eventlistener

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

//Load tasks on page loading

document.addEventListener('DOMContentLoaded', loadTasks);
