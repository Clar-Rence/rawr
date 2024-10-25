const change = document.getElementById("emojis");
const clicked = document.getElementById("click");

clicked.addEventListener("click", () => {
    change.classList.toggle("change")
})