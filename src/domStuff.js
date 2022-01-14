function toggleForm() {
    const hiddenDiv = document.querySelector(".hiddenDiv");
    const styles = window.getComputedStyle(hiddenDiv);
    const prop = styles.getPropertyValue("display");
    hiddenDiv.style.display = prop === "block" ? "none" : "block";
}

function updateProjectList() {
    const list = document.querySelector(".projects");
    console.log(list);
    console.log(projects);
    const listItems = projects
        .map((project) => {
            return `<li>${project.title}</li>`;
        })
        .join("");
    list.innerHTML = listItems;
}

module.exports = { toggleForm, updateProjectList };
