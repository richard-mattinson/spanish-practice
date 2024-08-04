const clicker = document.querySelector("#click")
const title = document.querySelector("#title")

const state = {
    color: "red"
}

title.addEventListener("click", () => {
    if (state.color === "red") {
        title.classList.replace("red", "yellow")
        state.color = "yellow"
    } else {
        title.classList.replace("yellow", "red")
        state.color = "red"
    }
})