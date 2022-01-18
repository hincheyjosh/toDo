import "./style.css";
import todoIcon from "./images/todoIcon.png";
import * as DOM from "./domStuff.js";
import * as Project from "./classes.js";

document.getElementById("todoIcon").src = todoIcon;

global.projects = [];
const project1 = Project.createProject("My First Project");
project1.addTask(
    "Practice Coding",
    "5/25/2020",
    "get better at doing almost everything",
    "High"
);
projects.push(project1);
global.currentProject = projects[0];

DOM.updateProjectList();
DOM.updateTaskList();

const projectForm = document.querySelector(".newProjectForm");
const checkBoxes = document.querySelectorAll("#checkbox");

projectForm.addEventListener("submit", function () {
    const projectTitle = projectForm["newProjectTitle"].value;
    const newProject = Project.createProject(projectTitle);
    projects.push(newProject);
    projectForm["newProjectTitle"].value = "";
    DOM.updateProjectList();
});

document.querySelector(".addBtn").onclick = DOM.toggleForm;
document.querySelector(".createBtn").onclick = DOM.toggleForm;
document.getElementById("submit").onclick = DOM.hideForm;
document.getElementById("addTaskBtn").onclick = DOM.showForm;
document.getElementById("closeLink").onclick = DOM.hideForm;
