import createToDos from "./modules/createTodos.js";
import { addTask } from "./modules/dom.js";

// Starea centrala a aplicatiei
const todos = [];

// Initializeaza interfata si evenimentele, trimitand starea si constructorul necesar
addTask(todos, createToDos);
