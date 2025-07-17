import createToDos from "./modules/createTodos.js";

const addTaskBtn = document.getElementById("add_task_btn");
const closeFormBtn = document.getElementById("cancel-task-btn");
const form = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form"); // 

addTaskBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
});

closeFormBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

const todos = [];

//
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("task-title");
  const description = document.getElementById("task-description");
  const date = document.getElementById("task-dueDate");
  const priority = document.getElementById("task-priority");
  const projects = document.getElementById("task-projects");

  console.log(
    title.value,
    description.value,
    date.value,
    priority.value,
    projects.value
  );
  const newTodo = new createToDos(
    title.value,
    description.value,
    date.value,
    priority.value,
    projects.value
  );
  todos.push(newTodo);
  console.log(todos);

  taskForm.reset(); 
  form.classList.add("hidden"); 
});
