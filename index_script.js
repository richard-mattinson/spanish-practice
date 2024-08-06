const clicker = document.querySelector("#click")
const title = document.querySelector("#title_text")
const correctCounter = document.querySelector("#correct_counter")

const verbTextQuestion = document.querySelector("#verb_text_question");
const verbRedCross = document.querySelector("#red_cross")
const verbGreenCheck = document.querySelector("#green_check")
const verbTextAnswer = document.querySelector("#verb_text_answer");
const verbButtonAnswer = document.querySelector("#verb_button_answer");
const verbTitle = document.querySelectorAll(".verb_title")

const state = {
    color: "red",
    correctCounter: 0,
    verbIndex: ""
}

const verbs = [
    ["Ver", "look"],
    ["Tener", "have"],
    ["Aprender", "learn"]
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
    let verbIndex = Math.floor(Math.random() * verbs.length)
    let randomVerb = verbs[verbIndex];
    state.verbIndex = verbIndex
    verbTextQuestion.textContent = randomVerb[0]
}

verbButtonAnswer.addEventListener("click", () => {
    const answer = verbTextAnswer.value
    checkAnswer(answer)
})

verbTextAnswer.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        const answer = verbTextAnswer.value;
        checkAnswer(answer);
    }
})

function checkAnswer(answer) {    
    let answerFormatted = answer.toLowerCase().trim()
    console.log("answer", answerFormatted);
    console.log("actual", verbs[state.verbIndex][1]);
    console.log("verbs", verbs);
    if (verbs[state.verbIndex][1] === answerFormatted) {
        verbGreenCheck.style.color = "green";
        setTimeout(() => {
            verbGreenCheck.style.color = "whitesmoke";
        }, 1000);
        verbs.splice(state.verbIndex, 1);
        state.correctCounter++
        if (verbs.length > 0) {
            updateVerbText();
        } else {
            state.correctCounter = "Well Done!";
            verbTextQuestion.textContent = "¡Bien hecho!";
            verbRedCross.style.visibility = "hidden";
            verbGreenCheck.style.visibility = "hidden"
        }
        correctCounter.textContent = state.correctCounter
        verbTextAnswer.value = ""
    } else {
        verbRedCross.style.color = "red"
        setTimeout(() => {
            verbRedCross.style.color = "whitesmoke";
        }, 1000);
    }
}

updateVerbText()




