function toggleForm() {
    const hiddenDiv = document.querySelector(".hiddenDiv");
    const styles = window.getComputedStyle(hiddenDiv);
    const prop = styles.getPropertyValue("display");
    hiddenDiv.style.display = prop === "block" ? "none" : "block";
}

module.exports = { toggleForm };
