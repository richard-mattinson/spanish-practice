const clicker = document.querySelector("#click")
const title = document.querySelector("#title_text")
const verbTextQuestion = document.querySelector("#verb_text_question");
const verbTextAnswer = document.querySelector("#verb_text_answer");
const verbButtonAnswer = document.querySelector("#verb_button_answer");

const state = {
    color: "red"
}

const verbs = [
    ["Ver", "Look"],
    ["Tener", "Have"],
    ["Aprender", "Learn"]
]

title.addEventListener("click", () => {
    if (state.color === "red") {
        title.classList.replace("red", "yellow")
        state.color = "yellow"
    } else {
        title.classList.replace("yellow", "red")
        state.color = "red"
    }
})

function updateVerbText() {
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    verbTextQuestion.textContent = randomVerb[0]
}

verbTextQuestion.addEventListener("click", () => {
    updateVerbText()
})

verbButtonAnswer.addEventListener("click", () => {
    const answer = verbTextAnswer.value
    console.log("answer", answer);
})




