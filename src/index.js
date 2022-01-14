import "./style.css";
import todoIcon from "./images/todoIcon.png";
import { toggleForm, updateProjectList } from "./domStuff.js";
import * as Project from "./classes.js";

document.getElementById("todoIcon").src = todoIcon;

global.projects = [];

const project1 = Project.createProject("Coding");
console.log(project1);
project1.addTask("Practice", "5/25/2020", "get better", "High");
projects.push(project1);

console.log(projects[0].title);

document.querySelector(".addBtn").onclick = toggleForm;
document.querySelector(".createBtn").onclick = toggleForm;
updateProjectList();
