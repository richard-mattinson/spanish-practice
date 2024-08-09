/////////////////////////////// GLOBAL QUERY SELECTORS ///////////////////////////////

const titleText = document.querySelector("#title_text");

const verbTextQuestion = document.querySelector("#verb_text_question");

const verbRedCross = document.querySelector("#red_cross");
const verbGreenCheck = document.querySelector("#green_check");

const correctText = document.querySelector("#correct_text");
const correctCounter = document.querySelector("#correct_counter");
const correctTen = document.querySelector("#correct_ten");

const verbTextAnswer = document.querySelector("#verb_text_answer");
const verbTitle = document.querySelectorAll(".verb_title");

const tableBody = document.querySelector("#table_body");

// const verbButtonAnswer = document.querySelector("#verb_button_answer");

/////////////////////////////// VARIABLE STORAGE ///////////////////////////////

const state = {
    color: "red",
    correctCounter: 0,
    errorCounter: 0,
    verbIndex: "",
};

const verbs = [
    ["Alquilar", ["Rent"]],
    ["Aprender", ["Teach"]],
    ["Buscar", ["Look", "Look for"]],
    ["Caminar", ["Walk"]],
    ["Cambiar", ["Change"]],
    ["Creer", ["Believe", "Think"]],
    ["Desayuna", ["Eat Breakfast", "Have Breakfast"]],
    ["Escuchar", ["Listen"]],
    ["Leer", ["Read"]],
    ["Olvidar", ["Forget"]],
    ["Pagar", ["Pay"]],
    ["Preguntar", ["Ask"]],
    ["Prometer", ["Promise"]],
    ["Responder", ["Answer"]],
    ["Quedar", ["Meet"]],
    ["Significa", ["Mean"]],
    ["Tener", ["Have"]],
    ["Vender", ["Sell"]],
    ["Ver", ["Look", "View", "Watch"]],
    ["Viajar", ["Travel"]],
    ["Visitar", ["Visit"]],
];

/////////////////////////////// EVENT LISTENERS ///////////////////////////////
// verbButtonAnswer.addEventListener("click", () => {
//     const answer = verbTextAnswer.value
//     checkAnswer(answer)
// })

titleText.addEventListener("click", () => {
    state.correctCounter = 0
    state.errorCounter = 0
    correctText.textContent = "Correcto";
    correctCounter.textContent = state.correctCounter
    correctText.style.color = "black";
    correctCounter.style.color = "black";
    correctTen.style.color = "black";
    while (tableBody.hasChildNodes) {
        tableBody.removeChild(tableBody.lastElementChild)
    }
    updateVerbText()
})

verbTextQuestion.addEventListener("click", () => {
    verbTextQuestion.textContent = verbs[state.verbIndex][1][0] + "...";
    verbTextQuestion.style.color = "orange";
    state.errorCounter++;
    setTimeout(() => {
        verbTextQuestion.textContent = verbs[state.verbIndex][0];
        verbTextQuestion.style.color = "black";
    }, 2000);
});

verbTextAnswer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const answer = verbTextAnswer.value;
        checkAnswer(answer);
    }
});

/////////////////////////////// FUNCTIONS ///////////////////////////////

function updateVerbText() {
    let verbIndex = Math.floor(Math.random() * verbs.length);
    let randomVerb = verbs[verbIndex];
    state.verbIndex = verbIndex;
    verbTextQuestion.textContent = randomVerb[0];
    state.answerSummary = randomVerb;
  // updateSummaryTable(randomVerb)
  // console.log("answer summary", state.answerSummary);
}

function updateSummaryTable() {
  const newRow = document.createElement("tr");
  const newSpanishCell = document.createElement("td");
  const newEnglishCell = document.createElement("td");
  newSpanishCell.textContent = state.answerSummary[0];
  newEnglishCell.textContent = state.answerSummary[1][0];
  newRow.appendChild(newSpanishCell);
  newRow.appendChild(newEnglishCell);
  tableBody.appendChild(newRow);
}

function chickenDinner() {
    if (state.errorCounter === 0) {
        correctText.textContent = "PERFECTO";
        correctText.style.color = "green";
        correctCounter.style.color = "green";
        correctTen.style.color = "green";
    } else {
        correctText.textContent = "Errores";
        correctCounter.textContent = state.errorCounter;
    }
    verbTextQuestion.textContent = "¡Bien hecho!";
    titleText.textContent = "¡Richard habla español!";
    titleText.classList.replace("grey", "winner_winner_animation");
    setTimeout(() => {
        titleText.classList.replace("winner_winner_animation", "grey");
        titleText.textContent = "¿De nuevo?";
    }, 3000);
}

function checkAnswer(answer) {
  let inputFormatted = answer.toLowerCase().trim();
  console.log("input formatted", inputFormatted);
  console.log("index", state.verbIndex);
  // get input against all answers in array
  const answerIndex = verbs[state.verbIndex][1].findIndex((element) => {
    return element.toLowerCase().trim() === inputFormatted;
  });

  if (answerIndex !== -1) {
    // if any answer matches input
    verbGreenCheck.style.color = "green";
    verbGreenCheck.classList.add("green_check_animation");
    setTimeout(() => {
      verbGreenCheck.classList.remove("green_check_animation");
      verbGreenCheck.style.color = "whitesmoke";
    }, 1500);
    verbs.splice(state.verbIndex, 1);
    state.correctCounter++;
    correctCounter.textContent = state.correctCounter;
    verbTextAnswer.value = "";
    if (state.correctCounter < 10) {
      updateSummaryTable();
      updateVerbText();
    } else {
      updateSummaryTable();
      chickenDinner();
    }
  } else {
    verbRedCross.style.color = "red";
    verbRedCross.classList.add("red_cross_animation");
    state.errorCounter++;
    setTimeout(() => {
      verbRedCross.classList.remove("red_cross_animation");
      verbRedCross.style.color = "whitesmoke";
    }, 1500);
  }
}

updateVerbText();
