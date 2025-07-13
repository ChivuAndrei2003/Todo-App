class createToDos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const addTaskBtn = document.getElementById("add_task_btn");

const closeFormBtn = document.querySelector(".btn");

const form = document.getElementById("task-modal");

addTaskBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
});

closeFormBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});
