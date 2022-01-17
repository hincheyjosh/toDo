import "./style.css";
import todoIcon from "./images/todoIcon.png";
import * as DOM from "./domStuff.js";
import * as Project from "./classes.js";

document.getElementById("todoIcon").src = todoIcon;

global.projects = [];

const project1 = Project.createProject("Coding");
console.log(project1);
project1.addTask("Practice", "5/25/2020", "get better", "High");
projects.push(project1);

document.querySelector(".addBtn").onclick = DOM.toggleForm;
document.querySelector(".createBtn").onclick = DOM.toggleForm;
document.getElementById("submit").onclick = DOM.hideForm;
document.getElementById("addTaskBtn").onclick = DOM.showForm;
document.getElementById("closeLink").onclick = DOM.hideForm;

DOM.updateProjectList();
