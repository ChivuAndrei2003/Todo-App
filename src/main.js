import createToDos  from "/mo" ;//trebuie sa modific asta si 
                                //export-ul din createTodos;

const addTaskBtn = document.getElementById("add_task_btn");

const closeFormBtn = document.getElementById("cancel-task-btn");

const form = document.getElementById("task-modal");

const submitForm = document.getElementById("btn_btn-primary");

addTaskBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
});

closeFormBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

const todos = [];

function addTodo() {
  submitForm.addEventListener("click", () => {
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
    const newTodo = createToDos(
      title.value,
      description.value,
      date.value,
      priority.value,
      projects.value
    );
    //todos.push(newTodo);
   // console.log(todos);
  });
}

addTodo();
