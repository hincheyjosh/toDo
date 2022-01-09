import "./style.css";
import todoIcon from "./images/todoIcon.png";
import { toggleForm } from "./domStuff.js";

document.getElementById("todoIcon").src = todoIcon;

document.querySelector(".addBtn").onclick = toggleForm;
document.querySelector(".createBtn").onclick = toggleForm;
