function addTask(todos, createToDos) {
  const addTaskBtn = document.getElementById("add_task_btn");
  const closeFormBtn = document.getElementById("cancel-task-btn");
  const form = document.getElementById("task-modal");
  const taskForm = document.getElementById("task-form");

  addTaskBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
  });

  closeFormBtn.addEventListener("click", () => {
    form.classList.add("hidden");
  });

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("task-title");
    const description = document.getElementById("task-description");
    const date = document.getElementById("task-dueDate");
    const priority = document.getElementById("task-priority");
    const projects = document.getElementById("task-projects");

    const newTodo = new createToDos(
      title.value,
      description.value,
      date.value,
      priority.value,
      projects.value
    );
    todos.push(newTodo);
    console.log(todos); // prints the updated array in console

    taskForm.reset();
    form.classList.add("hidden");
  });
}

export { addTask, addProject };

function addProject() {
  const addProjectBtn = document.querySelector(".add-project-btn");
  const projectForm = document.getElementById("project-form");
  const cancelProjectForm = document.getElementById("cancel-project-btn");
  const submitProjectForm = document.querySelector("btn btn-primary");

  addProjectBtn.addEventListener("click", () => {
    projectForm.classList.remove("hidden");
    console.log("clicked");
  });

  cancelProjectForm.addEventListener("click", () => {
    projectForm.classList.add("hidden");
  });
  
  const projects =[];

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("project-name-input");
    console.log(userInput.value);
    projects.push(userInput.value);
    
    console.log(projects);
    
    submitProjectForm.addEventListener("submit" , () => {
      const projectsLists = document.getElementById("projects-list");
      
      const element = document.createElement('div');
      element.innerText = userInput.value;
      projectsLists.appendChild(element); //probabil gresit, tre sa revizuiesc maine(am facut in my library ceva
    })                                        // similar )
  });
  //projectForm.reset();
  //projectForm.classList.add("hidden");
}

//dupa ce apas pe submit tre sa ii dau append la ul-ul lui si sai adaug si un button care sa
//redirectioneze la pagina respectiva
// si sa il adaug la task form la projects (sus)
