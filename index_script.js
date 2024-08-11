/////////////////////////////// GLOBAL QUERY SELECTORS ///////////////////////////////

const titleText = document.querySelector("#title_text");

const navbarButtons = document.querySelectorAll(".navbar_buttons");
const navbarVerb = document.querySelector("#verb_button");
const navbarEmotion = document.querySelector("#emotions_button");
const navbarRelation = document.querySelector("#relations_button");

const questionText = document.querySelector("#verb_text_question");

const redCross = document.querySelector("#red_cross");
const greenCheck = document.querySelector("#green_check");

const correctText = document.querySelector("#correct_text");
const correctCounter = document.querySelector("#correct_counter");
const correctTen = document.querySelector("#correct_ten");

const answerText = document.querySelector("#verb_text_answer");

const tableBody = document.querySelector("#table_body");

/////////////////////////////// VARIABLE STORAGE ///////////////////////////////

const state = {
  color: "red",
  correctCounter: 0,
  currentTab: "verbs",
  errorCounter: 0,
  errorRegister: false,
  questionIndex: "",
};

const verbs = [
  ["Alquilar", ["Rent"]],
  ["Aprender", ["Learn"]],
  ["Buscar", ["Look", "Look for"]],
  ["Caminar", ["Walk"]],
  ["Cambiar", ["Change"]],
  ["Cenar", ["Eat Dinner", "Have Dinner"]],
  ["Creer", ["Believe", "Think"]],
  ["Desayuna", ["Eat Breakfast", "Have Breakfast"]],
  ["Enseñar", ["Teach"]],
  ["Escuchar", ["Listen"]],
  ["Leer", ["Read"]],
  ["Mirar", ["Look"]],
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

const emotions = [
  ["Aburrido", ["Bored"]],
  ["Alegre", ["Joyful", "Happy"]],
  ["Asustado", ["Scared"]],
  ["Avergonzado", ["Embarrassed"]],
  ["Confundido", ["Confused"]],
  ["Contento", ["Pleased", "Happy"]],
  ["Deprimido", ["Depressed"]],
  ["Descuidado", ["Thoughtless"]],
  ["Enamorado", ["In Love"]],
  ["Enfadado", ["Angry", "Mad"]],
  ["Enfermo", ["Unwell"]],
  ["Emocionado", ["Excited"]],
  ["Feliz", ["Happy"]],
  ["Molesto", ["Annoyed"]],
  ["Nervioso", ["Nervous"]],
  ["Orgulloso", ["Proud"]],
  ["Pensativo", ["Thoughtful"]],
  ["Preocupado", ["Worried"]],
  ["Saludable", ["Healthy"]],
  ["Seguro", ["Confident"]],
  ["Serio", ["Serious"]],
  ["Sorprendido", ["Suprised"]],
  ["Tranquilo", ["Relaxed"]],
  ["Tonto", ["Silly"]],
  ["Triste", ["Sad"]],
];

const relations = [
  ["Abuela", ["Grandmother", "Grandma"]],
  ["Abuelo", ["Grandfather", "Grandad"]],
  ["Amigo/a", ["Friend"]],
  ["Compañero de casa", ["Housemate"]],
  ["Compañero de piso", ["Flatmate"]],
  ["Compañero de trabajo", ["Workmate"]],
  ["Hermano", ["Brother"]],
  ["Hermana", ["Sister"]],
  ["Hijo", ["Son"]],
  ["Hija", ["Daughter"]],
  ["Madre", ["Mother", "Mum"]],
  ["Marido", ["Husband"]],
  ["Marida", ["Wife"]],
  ["Nieto", ["Grandson"]],
  ["Nieta", ["Granddaughter"]],
  ["Novio", ["Boyfriend"]],
  ["Novia", ["Girlfriend"]],
  ["Padre", ["Father", "Dad"]],
  ["Padres", ["Parents"]],
  ["Primo/a", ["Cousin"]],
  ["Sobrino", ["Nephew"]],
  ["Sobrina", ["Niece"]],
  ["Suegros", ["Parents in Law"]],
  ["Tia", ["Aunty"]],
  ["Tio", ["Uncle"]],
];

/////////////////////////////// EVENT LISTENERS ///////////////////////////////

titleText.addEventListener("click", () => {
  resetTab();
});

navbarVerb.addEventListener("click", () => {
  state.currentTab = "verbs";
  setNavbarStyling();
  resetTab();
});

navbarEmotion.addEventListener("click", () => {
  state.currentTab = "emotions";
  setNavbarStyling();
  resetTab();
});

navbarRelation.addEventListener("click", () => {
  state.currentTab = "relations";
  setNavbarStyling();
  resetTab();
});

questionText.addEventListener("click", () => {
  // shows answer on click briefly (for idiots)
  let currentQuestion;
  switch (state.currentTab) {
    case "verbs":
      questionText.textContent = verbs[state.questionIndex][1][0] + "...";
      currentQuestion = verbs[state.questionIndex][0];
      break;
    case "emotions":
      questionText.textContent = emotions[state.questionIndex][1][0] + "...";
      currentQuestion = emotions[state.questionIndex][0];
      break;
    case "relations":
      questionText.textContent = relations[state.questionIndex][1][0] + "...";
      currentQuestion = relations[state.questionIndex][0];
      break;
  }
  questionText.style.color = "orange";
  if (state.errorCounter === false) {
    state.errorCounter++;
  }
  state.errorRegister = true;
  setTimeout(() => {
    questionText.textContent = currentQuestion;
    questionText.style.color = "black";
  }, 2000);
});

answerText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const answer = answerText.value;
    checkAnswer(answer);
  }
});

/////////////////////////////// FUNCTIONS ///////////////////////////////

function resetTab() {
  state.correctCounter = 0;
  state.errorCounter = 0;
  titleText.textContent = "¿Richard habla español?";
  correctText.textContent = "Correcto";
  correctCounter.textContent = state.correctCounter;
  correctText.style.color = "black";
  correctCounter.style.color = "black";
  correctTen.style.color = "black";
  updateQuestionText();
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function setNavbarStyling() {
  navbarButtons.forEach((element) => element.classList.remove("button_active"));
  switch (state.currentTab) {
    case "verbs":
      navbarVerb.classList.add("button_active");
      break;
    case "emotions":
      navbarEmotion.classList.add("button_active");
      break;
    case "relations":
      navbarRelation.classList.add("button_active");
      break;
  }
}

function updateQuestionText() {
  let randomQuestion;
  switch (state.currentTab) {
    case "verbs":
      state.questionIndex = Math.floor(Math.random() * verbs.length);
      randomQuestion = verbs[state.questionIndex];
      break;
    case "emotions":
      state.questionIndex = Math.floor(Math.random() * emotions.length);
      randomQuestion = emotions[state.questionIndex];
      break;
    case "relations":
      state.questionIndex = Math.floor(Math.random() * relations.length);
      randomQuestion = relations[state.questionIndex];
      break;
  }
  questionText.textContent = randomQuestion[0];
  state.answerSummary = randomQuestion;
  if (randomQuestion[0].length  > 12) {
    questionText.style.fontSize = "36px"
  } else {
    questionText.style.fontSize = "48px"
  }
}

function updateSummaryTable() {
  const newRow = document.createElement("tr");
  const newSpanishCell = document.createElement("td");
  const newEnglishCell = document.createElement("td");

  newSpanishCell.textContent = state.answerSummary[0];
  newSpanishCell.setAttribute("class", "summary_spanish");
  newSpanishCell.setAttribute("id", state.answerSummary[0]);
  newSpanishCell.addEventListener("click", (event) => {
    const word = event.target.id;
    playSpanish(word);
  });
  if (state.errorRegister) {
    newSpanishCell.style.background = "red";
    newSpanishCell.style.color = "white";
    newEnglishCell.style.background = "red";
    newEnglishCell.style.color = "white";
  }
  state.errorRegister = false;
  newEnglishCell.textContent = state.answerSummary[1][0];

  newRow.appendChild(newSpanishCell);
  newRow.appendChild(newEnglishCell);
  tableBody.appendChild(newRow);
}

function chickenDinner() {
  if (state.errorCounter === 0) {
    questionText.textContent = "¡Bien hecho!";
    correctText.textContent = "PERFECTO";
    correctText.style.color = "green";
    correctCounter.style.color = "green";
    correctTen.style.color = "green";
  } else {
    questionText.textContent = "Esfuérzate más";
    correctText.textContent = "Errores";
    correctCounter.textContent = state.errorCounter;
  }
  titleText.textContent = "¡Richard habla español!";
  titleText.classList.replace("grey", "winner_winner_animation");
  setTimeout(() => {
    titleText.classList.replace("winner_winner_animation", "grey");
    titleText.textContent = "¿De nuevo?";
  }, 3000);
}

function checkAnswer(answer) {
  let inputFormatted = answer.toLowerCase().trim();
  // check input answer against all answers in array
  let answerIndex;
  switch (state.currentTab) {
    case "verbs":
      answerIndex = verbs[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "emotions":
      answerIndex = emotions[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "relations":
      answerIndex = relations[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
  }

  if (answerIndex !== -1) {
    // if any answer matches input
    greenCheck.style.color = "green";
    greenCheck.classList.add("green_check_animation");
    setTimeout(() => {
      greenCheck.classList.remove("green_check_animation");
      greenCheck.style.color = "whitesmoke";
    }, 1500);
    switch (state.currentTab) {
      case "verbs":
        verbs.splice(state.questionIndex, 1);
        break;
      case "emotions":
        emotions.splice(state.questionIndex, 1);
        break;
      case "relations":
        relations.splice(state.questionIndex, 1);
        break;
    }
    state.correctCounter++;
    correctCounter.textContent = state.correctCounter;
    answerText.value = "";
    if (state.correctCounter < 10) {
      updateSummaryTable();
      updateQuestionText();
    } else {
      updateSummaryTable();
      chickenDinner();
    }
  } else {
    redCross.style.color = "red";
    redCross.classList.add("red_cross_animation");
    if (state.errorCounter === false) {
      state.errorCounter++;
    }
    state.errorRegister = true;
    setTimeout(() => {
      redCross.classList.remove("red_cross_animation");
      redCross.style.color = "whitesmoke";
    }, 1500);
  }
}

function playSpanish(word) {
  const message = new SpeechSynthesisUtterance();

  // set the text to be spoken & options
  message.text = word;
  message.lang = "es-ES";
  message.pitch = 0;
  message.rate = 0.5;
  message.volume = 2;

  // create an instance of the speech synthesis object
  const speechSynthesis = window.speechSynthesis;

  console.log(message);

  // start speaking
  speechSynthesis.speak(message);
}

updateQuestionText();
