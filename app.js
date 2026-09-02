const title = document.getElementById("title");
const changeTextButton = document.getElementById("change-text-button");

changeTextButton.addEventListener("click", () => {
    title.textContent = "You clicked the button!";
});
