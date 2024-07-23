import { TodoList } from "./todo.js";

let todoList = new TodoList;
todoList.addTask("make an appoinment");
todoList.addTask("call grandad");
todoList.addTask("wash dishes");


todoList.makeCompleted("make an appoinment");

todoList.showTasks()