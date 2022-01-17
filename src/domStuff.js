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
            return `<li data-name="${project.title}">${project.title}</li>`;
        })
        .join("");
    list.innerHTML = listItems;
}

function showForm() {
    document.querySelector(".taskAreaForm").style.display = "block";
}

function hideForm() {
    document.querySelector(".taskAreaForm").style.display = "none";
}

module.exports = { toggleForm, updateProjectList, showForm, hideForm };
