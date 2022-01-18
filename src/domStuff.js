function toggleForm() {
    const hiddenDiv = document.querySelector(".hiddenDiv");
    const styles = window.getComputedStyle(hiddenDiv);
    const prop = styles.getPropertyValue("display");
    hiddenDiv.style.display = prop === "block" ? "none" : "block";
}

function updateProjectList() {
    const list = document.querySelector(".projects");
    const listItems = projects
        .map((project) => {
            return `<li id="projectListItem" data-name="${project.title}">${project.title}</li>`;
        })
        .join("");
    list.innerHTML = listItems;

    const projectList = document.querySelectorAll("#projectListItem");
    projectList.forEach((project) => {
        project.addEventListener("click", changeCurrentProject);
    });
}

function updateTaskList() {
    const tableArea = document.querySelector(".tableArea");
    const table = document.createElement("table");
    table.className = "tasksTable";
    table.innerHTML += `<thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                        </tr>
                        </thead>
                        <tbody>`;
    const tasksToAdd = currentProject
        .getTasks()
        .map((task) => {
            return `<tr>
            <td><input type="checkbox" id="checkbox"></input></td>
                        <td>${task.name}</td>
                        <td>${task.description}</td>
                        <td>${task.dueDate}</td>
                        <td>${task.priority}</td>
                    </tr>`;
        })
        .join("");
    table.innerHTML += tasksToAdd + `</tbody>`;
    tableArea.appendChild(table);

    const checkBoxes = document.querySelectorAll("#checkbox");
    checkBoxes.forEach((box) => {
        box.addEventListener("change", strikeThrough);
    });
}

function showForm() {
    document.querySelector(".taskAreaForm").style.display = "block";
}

function hideForm() {
    document.querySelector(".taskAreaForm").style.display = "none";
}

function strikeThrough() {
    this.parentElement.parentElement.classList.toggle("checked");
}

function changeCurrentProject() {
    currentProject = this.dataset.name;
    console.log(currentProject);
}

module.exports = {
    toggleForm,
    updateProjectList,
    showForm,
    hideForm,
    updateTaskList,
    strikeThrough,
    changeCurrentProject,
};
