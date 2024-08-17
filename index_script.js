/////////////////////////////// GLOBAL QUERY SELECTORS ///////////////////////////////

const body = document.querySelector("#body_container")

const titleBar = document.querySelector("#title_bar")
const titleText = document.querySelector("#title_text");

const hamburgerButton = document.querySelector("#hamburger_button");
const hamburgerMenu = document.querySelector("#hamburger_menu");
const hamburgerButtons = document.querySelectorAll(".hamburger_buttons");
const hamburgerVerb = document.querySelector("#verb_button");
const hamburgerEmotion = document.querySelector("#emotions_button");
const hamburgerRelation = document.querySelector("#relations_button");
const hamburgerTimeAndDate = document.querySelector("#time_and_date_button")
const hamburgerClothes = document.querySelector("#clothes_button")
const hamburgerVerbConjugation = document.querySelector("#verb_conjugation_button");

const speakerOn = document.querySelector("#speaker_on")
const speakerOff = document.querySelector("#speaker_off")

const currentTab = document.querySelector("#current_tab")

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
  hamburgerMenu: false,
  speakerOn: false,
  questionIndex: "",
};

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
  ["Enfermo", ["Unwell", "Ill"]],
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

const timeAndDate = [
  ["Abril", ["April"]],
  ["Agosto", ["August"]],
  ["Antesi", ["Before"]],
  ["Ayer", ["Yesterday"]],
  ["Despues", ["After"]],
  ["Diciembre", ["December"]],
  ["Domingo", ["Sunday"]],
  ["Enero", ["January"]],
  ["Febrero", ["February"]],
  ["Fin de semana", ["Weekend"]],
  ["Hoy", ["Today"]],
  ["Hora", ["Hour", "Time"]],
  ["Marzo", ["March"]],
  ["Mayo", ["May"]],
  ["Minuto", ["Minute"]],
  ["Invierno", ["Winter"]],
  ["Lunes", ["Monday"]],
  ["Jueves", ["Thursday"]],
  ["Julio", ["July"]],
  ["Junio", ["June"]],
  ["Madrugada", ["Early morning"]],
  ["Manana", ["Tomorrow", "Morning"]],
  ["Martes", ["Tuesday"]],
  ["Mediodía", ["Noon"]],
  ["Miercoles", ["Wednesday"]],
  ["Noche", ["Evening", "Night"]],
  ["Noviembre", ["November"]],
  ["Octubre", ["October"]],
  ["Otoño", ["Autumn"]],
  ["Primavera", ["Spring"]],
  ["Sabado", ["Saturday"]],
  ["Semana", ["Week"]],
  ["Semana pasada", ["Last week"]],
  ["Semana que viene", ["Next week"]],
  ["Septiembre", ["September"]],
  ["Tarde", ["Afternoon"]],
  ["Verrano", ["Summer"]],
  ["Viernes", ["Friday"]],
];

const pronouns = [
  ["Yo", "Tú", "Él", "Nosotros", "Vosotros", "Ellos"],
  ["ar"],
  ["ir"],
  ["er"]
];

const verbs = [
  ["Alquilar", ["Rent"]],
  ["Aprender", ["Learn"]],
  ["Bajar", ["Go down"]],
  ["Buscar", ["Look", "Look for"]],
  ["Caminar", ["Walk"]],
  ["Cambiar", ["Change"]],
  ["Cenar", ["Eat Dinner", "Have Dinner"]],
  ["Creer", ["Believe", "Think"]],
  ["Desayuna", ["Eat Breakfast", "Have Breakfast"]],
  ["Enseñar", ["Teach"]],
  ["Escuchar", ["Listen"]],
  ["Leer", ["Read"]],
  ["Madrugar", ["Wake up early"]],
  ["Mirar", ["Look"]],
  ["Olvidar", ["Forget"]],
  ["Pagar", ["Pay"]],
  ["Preguntar", ["Ask"]],
  ["Prometer", ["Promise"]],
  ["Responder", ["Answer"]],
  ["Quedar", ["Meet"]],
  ["Quedarse", ["Stay"]],
  ["Significa", ["Mean"]],
  ["Subir", ["Go up"]],
  ["Tener", ["Have"]],
  ["Vender", ["Sell"]],
  ["Ver", ["Look", "View", "Watch"]],
  ["Viajar", ["Travel"]],
  ["Visitar", ["Visit"]],
];

const clothes = [
  ["Abrigo", ["Coat"]],
  ["Bañador", ["Swimsuit"]],
  ["Blusa", ["Blouse"]],
  ["Botas", ["Boots"]],
  ["Bufanda", ["Scalf"]],
  ["Camisa", ["Shirt"]],
  ["Camiseta", ["T-shirt"]],
  ["Camisón", ["Nightgown", "Night gown"]],
  ["Chaleco", ["Vest"]],
  ["Chándal", ["Tracksuit"]],
  ["Chaqueta", ["Jacket"]],
  ["Calzoncillos", ["Underpants", "Pants"]],
  ["Calcetines", ["Socks"]],
  ["Chanclas", ["Flip flops"]],
  ["Cinturón", ["Belt"]],
  ["Corbata", ["Tie"]],
  ["Bragas", ["Panties", "Pants"]],
  ["Falda", ["Skirt"]],
  ["Gafas de sol", ["Sunglasses", "Sun glasses"]],
  ["Gorra", ["Cap", "Baseball cap"]],
  ["Gorro", ["Beanie", "Wooly hat"]],
  ["Guantes", ["Gloves"]],
  ["Jersey", ["Jersey"]],
  ["Pantalones", ["Trousers"]],
  ["Pañuelo", ["Handkerchief"]],
  ["Pijama", ["Pajamas"]],
  ["Pajarita", ["Bow tie"]],
  ["Sandailias", ["Sandals"]],
  ["Sudadera", ["Hoodie"]],
  ["Sujetador", ["Bra"]],
  ["Vestido", ["Dress"]],
  ["Sombrero", ["Hat"]],
  ["Vaqueros ", ["Jeans"]],
  ["Zapatos", ["Shoes"]],
  ["Zapatillas", ["Trainers"]],
  ["Zapatos de tacon", ["High heels"]],
];

/////////////////////////////// EVENT LISTENERS ///////////////////////////////

hamburgerButton.addEventListener("click", () => {
  if (state.hamburgerMenu) {
    hideHamburgerMenu()
  } else {
    showHamburgerMenu()
  }
})

body.addEventListener("click", () => {
  if (state.hamburgerMenu) {
    hideHamburgerMenu();
  }
});

titleText.addEventListener("click", () => {
  resetTab();
});

speakerOn.addEventListener("click", () => {
  turnSpeakerOnOff();
})

speakerOff.addEventListener("click", () => {
  turnSpeakerOnOff()
})

hamburgerVerb.addEventListener("click", () => {
  state.currentTab = "verbs";
  currentTab.textContent = "Verbos";
  hideHamburgerMenu()
  setNavbarStyling();
  resetTab();
});

hamburgerEmotion.addEventListener("click", () => {
  state.currentTab = "emotions";
  currentTab.textContent = "Emociones y estados";
  hideHamburgerMenu();
  setNavbarStyling();
  resetTab();
});

hamburgerRelation.addEventListener("click", () => {
  state.currentTab = "relations";
  currentTab.textContent = "Relaciones";
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
});

hamburgerTimeAndDate.addEventListener("click", () => {
  state.currentTab = "timeAndDate";
  currentTab.textContent = "Hora y fecha";
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
})

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
    case "timeAndDate":
      questionText.textContent = timeAndDate[state.questionIndex][1][0] + "...";
      currentQuestion = timeAndDate[state.questionIndex][0];
      break;
    case "clothes":
      questionText.textContent = clothes[state.questionIndex][1][0] + "...";
      currentQuestion = clothes[state.questionIndex][0];
      break;
    case "verbConjugation":
      questionText.textContent = verbs[state.questionIndex][1][0] + "...";
      currentQuestion = verbs[state.questionIndex][0];
      break;
  }
  questionText.style.color = "orange";
  if (state.errorRegister === false) {
    state.errorCounter++;
  }
  state.errorRegister = true;
  setTimeout(() => {
    questionText.textContent = currentQuestion;
    questionText.style.color = "black";
  }, 2000);
});

hamburgerClothes.addEventListener("click", () => {
  state.currentTab = "clothes";
  currentTab.textContent = "Ropas";
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
})

hamburgerVerbConjugation.addEventListener("click", () => {
  state.currentTab = "verbConjugation"
  currentTab.textContent = "Conjugación de verbos";
  setNavbarStyling()
  hideHamburgerMenu()
  resetTab()
})

answerText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const answer = answerText.value;
    checkAnswer(answer);
  }
});

/////////////////////////////// FUNCTIONS ///////////////////////////////

function showHamburgerMenu() {
  hamburgerButton.style.opacity = "0.7"
  hamburgerMenu.style.display = "block";
  // hamburgerMenu.classList.add("isOpen")
  state.hamburgerMenu = true;
}

function hideHamburgerMenu() {
  hamburgerButton.style.opacity = "1";
  hamburgerMenu.style.display = "none";
  // hamburgerMenu.classList.remove("isOpen");
  state.hamburgerMenu = false;
}

function turnSpeakerOnOff() {
  if (state.speakerOn) {
    state.speakerOn = false;
    speakerOn.style.display = "none";
    speakerOff.style.display = "block";
  } else {
    state.speakerOn = true;
    speakerOn.style.display = "block";
    speakerOff.style.display = "none";
  }
}

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
  hamburgerButtons.forEach((element) => element.classList.remove("button_active"));
  switch (state.currentTab) {
    case "verbs":
      hamburgerVerb.classList.add("button_active");
      break;
    case "emotions":
      hamburgerEmotion.classList.add("button_active");
      break;
    case "relations":
      hamburgerRelation.classList.add("button_active");
      break;
    case "timeAndDate":
      hamburgerTimeAndDate.classList.add("button_active");
      break;
    case "timeAndDate":
      hamburgerClothes.classList.add("button_active");
      break;
    case "verbConjugation":
      hamburgerVerbConjugation.classList.add("button_active");
      break;
  }
}

function updateQuestionText() {
  let randomQuestion;
  let randomPronoun
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
    case "timeAndDate":
      state.questionIndex = Math.floor(Math.random() * timeAndDate.length);
      randomQuestion = timeAndDate[state.questionIndex];
      break;
    case "clothes":
      state.questionIndex = Math.floor(Math.random() * clothes.length);
      randomQuestion = clothes[state.questionIndex];
      break;
    case "verbConjugation":
      state.questionIndex = Math.floor(Math.random() * verbs.length);
      randomQuestion = verbs[state.questionIndex];
      state.pronounIndex = Math.floor(Math.random() * pronouns.length);
      randomPronoun = pronouns[state.pronounIndex]
      break;
  }
  if (state.currentTab === "verbConjugation") {
    questionText.textContent = randomPronoun + " " + randomQuestion[0];
  } else {
    questionText.textContent = randomQuestion[0];
  }
  if (state.speakerOn) {
    playSpanish(randomQuestion[0]) 
  }
  state.answerSummary = randomQuestion;
  state.pronoun = randomPronoun
  if (randomQuestion[0].length <= 12) {
    questionText.style.fontSize = "48px";
  } else if (randomQuestion[0].length > 12 && randomQuestion[0].length <= 17) {
    questionText.style.fontSize = "28px";
  } else {
    questionText.style.fontSize = "20px";
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
  titleBar.classList.replace("grey", "winner_winner_animation");
  setTimeout(() => {
    titleBar.classList.replace("winner_winner_animation", "grey");
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
    case "timeAndDate":
      answerIndex = timeAndDate[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "clothes":
      answerIndex = clothes[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "verbConjugation":
      let conjugatedAnswer 
      let trimedVerb = state.randomQuestion.substring(state.question -2)
      switch (state.pronoun) {
        case "Yo":
          conjugatedAnswer = trimedVerb + "o"
          break;
      
        default:
          break;
      }
      break
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
      case "timeAndDate":
        timeAndDate.splice(state.questionIndex, 1);
        break;
      case "clothes":
        clothes.splice(state.questionIndex, 1);
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
    if (state.errorRegister === false) {
      state.errorCounter++;
    }
    state.errorRegister = true;
    setTimeout(() => {
      redCross.classList.remove("red_cross_animation");
      redCross.style.color = "whitesmoke";
    }, 1500);
  }
  console.log("error register / counter", state.errorRegister, state.errorCounter);
  
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
