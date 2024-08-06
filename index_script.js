const titleText = document.querySelector("#title_text")
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
    ["Alquilar", "Rent"],
    ["Aprender", "Teach"],
    ["Buscar", "Look for"],
    ["Caminar", "Walk"],
    ["Cambiar", "Change"],
    ["Creer", "Believe"],
    ["Desayuna", "have breakfast"],
    ["Escuchar", "Listen"],
    ["Leer", "Read"],
    ["Olvidar", "Forget"],
    ["Pagar", "Pay"],
    ["Preguntar", "Ask"],
    ["Prometer", "Promise"],
    ["Responder", "Answer"],
    ["Quedar", "Meet"],
    ["Significa", "Mean"],
    ["Tener", "Have"],
    ["Vender", "Sell"],
    ["Ver", "Look"],
    ["Viajar", "Travel"],
    ["Visitar", "Visit"]
]

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
    let answerFormatted = verbs[state.verbIndex][1].toLowerCase()
    let inputFormatted = answer.toLowerCase().trim()
    if (answerFormatted === inputFormatted) {
        verbGreenCheck.style.color = "green";
        verbGreenCheck.classList.add("green_check_animation")
        setTimeout(() => {
            verbGreenCheck.classList.remove("green_check_animation");
            verbGreenCheck.style.color = "whitesmoke";
        }, 1500);
        verbs.splice(state.verbIndex, 1);
        state.correctCounter++
        if (state.correctCounter < 10) {
            updateVerbText();
        } else {
            verbTextQuestion.textContent = "¡Bien hecho!";
            verbRedCross.style.visibility = "hidden";
            verbGreenCheck.style.visibility = "hidden"
            titleText.textContent = "¡Richard habla español!";
            titleText.classList.replace("grey", "winner_winner_animation")
            setTimeout(() => {
                titleText.classList.replace("winner_winner_animation", "grey");
                titleText.textContent = "¿Richard habla español?";
            }, 3000);
        }
        correctCounter.textContent = state.correctCounter
        verbTextAnswer.value = ""
    } else {
        verbRedCross.style.color = "red"
        verbRedCross.classList.add("red_cross_animation");
        setTimeout(() => {
            verbRedCross.classList.remove("red_cross_animation");
            verbRedCross.style.color = "whitesmoke";
        }, 1500);
    }
}

verbTextQuestion.addEventListener("click", () => {
    verbTextQuestion.textContent = verbs[state.verbIndex][1]
    setTimeout(() => {
        verbTextQuestion.textContent = verbs[state.verbIndex][0];
    }, 2000);
})

updateVerbText()




