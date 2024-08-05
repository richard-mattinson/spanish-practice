const clicker = document.querySelector("#click")
const title = document.querySelector("#title_text")
const correctCounter = document.querySelector("#correct_counter")

const verbTextQuestion = document.querySelector("#verb_text_question");
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
    let answerToLowercase = answer.toLowerCase()
    console.log("answer", answerToLowercase);
    console.log("actual", verbs[state.verbIndex][1]);
    console.log("verbs", verbs);
    if (verbs[state.verbIndex][1] === answerToLowercase) {
        verbTitle.forEach(element => {
            element.classList.add("answer_green")
        });
        verbs.splice(state.verbIndex, 1);
        state.correctCounter++
        if (verbs.length > 0) {
            updateVerbText();
        } else {
            state.correctCounter = "Well Done!";
            verbTextQuestion.textContent = "";
        }
        correctCounter.textContent = state.correctCounter
        verbTextAnswer.value = ""
    } else {
        verbTitle.forEach((element) => {
            element.classList.add("answer_red");
        });
    }
    setTimeout(() => {
        verbTitle.forEach((element) => {
            element.classList.remove("answer_green")
            element.classList.remove("answer_red");
        })
    }, 1000);
}

updateVerbText()




