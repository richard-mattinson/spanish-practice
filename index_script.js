/////////////////////////////// GLOBAL QUERY SELECTORS ///////////////////////////////

const body = document.querySelector("#body_container");

const titleBar = document.querySelector("#title_bar");
const titleText = document.querySelector("#title_text");

const hamburgerButton = document.querySelector("#hamburger_button");
const hamburgerMenu = document.querySelector("#hamburger_menu");
const hamburgerButtons = document.querySelectorAll(".hamburger_buttons");
const hamburgerVerb = document.querySelector("#verb_button");
const hamburgerEmotion = document.querySelector("#emotions_button");
const hamburgerRelation = document.querySelector("#relations_button");
const hamburgerTimeAndDate = document.querySelector("#time_and_date_button");
const hamburgerClothes = document.querySelector("#clothes_button");
const hamburgerVerbConjugation = document.querySelector(
  "#verb_conjugation_button"
);

const speakerOn = document.querySelector("#speaker_on");
const speakerOff = document.querySelector("#speaker_off");

const currentTab = document.querySelector("#current_tab");

const questionText = document.querySelector("#verb_text_question");

const redCross = document.querySelector("#red_cross");
const greenCheck = document.querySelector("#green_check");

const correctText = document.querySelector("#correct_text");
const correctCounter = document.querySelector("#correct_counter");
const correctTen = document.querySelector("#correct_ten");

const answerText = document.querySelector("#verb_text_answer");

const tableContainer = document.querySelector(
  "#answer_summary_table_container"
);
const tableBody = document.querySelector("#table_body");

/////////////////////////////// VARIABLE STORAGE ///////////////////////////////

const state = {
  color: "red",
  correctCounter: 0,
  currentTab: "verbs",
  defaultPlaceholder: "Escribe en ingles",
  errorCounter: 0,
  errorRegister: false,
  hamburgerMenu: false,
  questionLetterIndex: 1,
  speakerOn: false,
  questionIndex: "",
};

const placeholder = [
  ["", "", "", "", "", ""]
]; 

const verbs = [
  ["Alquilar", ["Rent"], ["", "", "", "", "", ""]],
  ["Aprender", ["Learn"], ["", "", "", "", "", ""]],
  ["Bajar", ["Go down"], ["", "", "", "", "", ""]],
  ["Beber", ["Drink"], ["", "", "", "", "", ""]],
  ["Buscar", ["Look for"], ["", "", "", "", "", ""]],
  ["Caminar", ["Walk"], ["", "", "", "", "", ""]],
  ["Cambiar", ["Change"], ["", "", "", "", "", ""]],
  ["Cenar", ["Eat Dinner", "Have Dinner"], ["", "", "", "", "", ""]],
  ["Comer", ["Eat"], ["", "", "", "", "", ""]],
  ["Correr", ["Run"], ["", "", "", "", "", ""]],
  ["Creer", ["Believe", "Think"], ["", "", "", "", "", ""]],
  ["Desayunar", ["Eat Breakfast", "Have Breakfast"], ["", "", "", "", "", ""]],
  ["Enseñar", ["Teach"], ["", "", "", "", "", ""]],
  ["Empezar", ["Begin", "Start"], ["", "", "", "", "", ""]],
  ["Escribir", ["Write"], ["", "", "", "", "", ""]],
  ["Escuchar", ["Listen"], ["", "", "", "", "", ""]],
  ["Hacer", ["Make", "Do"], ["", "", "", "", "", ""]],
  ["Leer", ["Read"], ["", "", "", "", "", ""]],
  ["Llamarse", ["Called"], ["", "", "", "", "", ""]],
  ["Madrugar", ["Wake up early", "Get up early", "Rise Early"], ["", "", "", "", "", ""],],
  ["Mirar", ["Look"], ["", "", "", "", "", ""]],
  ["Necesitar", ["Need"], ["", "", "", "", "", ""]],
  ["Olvidar", ["Forget"], ["", "", "", "", "", ""]],
  ["Pagar", ["Pay"], ["", "", "", "", "", ""]],
  ["Podria", ["Could"], ["", "", "", "", "", ""]],
  ["Ponerse", ["Put on", "Place on"], ["", "", "", "", "", ""]],
  ["Preguntar", ["Ask"], ["", "", "", "", "", ""]],
  ["Prometer", ["Promise"], ["", "", "", "", "", ""]],
  ["Responder", ["Answer"], ["", "", "", "", "", ""]],
  ["Quedar", ["Meet"], ["", "", "", "", "", ""]],
  ["Quedarse", ["Stay"], ["", "", "", "", "", ""]],
  ["Querer", ["Want"], ["", "", "", "", "", ""]],
  ["Significar", ["Mean"], ["", "", "", "", "", ""]],
  ["Subir", ["Go up"], ["", "", "", "", "", ""]],
  ["Tener", ["Have"], ["", "", "", "", "", ""]],
  ["Terminar", ["Finish", "End"], ["", "", "", "", "", ""]],
  ["Vender", ["Sell"], ["", "", "", "", "", ""]],
  ["Ver", ["Watch", "View", "Look"], ["", "", "", "", "", ""]],
  ["Viajar", ["Travel"], ["", "", "", "", "", ""]],
  ["Visitar", ["Visit"], ["", "", "", "", "", ""]],
  ["Vivir", ["Live"], ["", "", "", "", "", ""]],
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
  ["Sorprendido", ["Surprised"]],
  ["Tranquilo", ["Relaxed"]],
  ["Tonto", ["Silly"]],
  ["Triste", ["Sad"]],
];

const relations = [
  ["Abuela", ["Grandmother", "Grandma"]],
  ["Abuelo", ["Grandfather", "Grandad"]],
  ["Amigo", ["Friend"]],
  ["Compañero de casa", ["Housemate"]],
  ["Compañero de piso", ["Flatmate"]],
  ["Compañero de trabajo", ["Workmate"]],
  ["Divorciado", ["Divorced"]],
  ["Hermano", ["Brother"]],
  ["Hermana", ["Sister"]],
  ["Hijo", ["Son"]],
  ["Hija", ["Daughter"]],
  ["Jubilado", ["Retired"]],
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
  ["Relación", ["Relationship"]],
  ["Separado", ["Separated"]],
  ["Sobrino", ["Nephew"]],
  ["Sobrina", ["Niece"]],
  ["Soltero", ["Single"]],
  ["Suegros", ["Parents in Law"]],
  ["Tia", ["Aunty"]],
  ["Tio", ["Uncle"]],
];

const timeAndDate = [
  ["Abril", ["April"]],
  ["Agosto", ["August"]],
  ["Antesi", ["Before"]],
  ["Ayer", ["Yesterday"]],
  ["Después", ["After"]],
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
  ["Mediodía", ["Noon", "Midday"]],
  ["Miércoles", ["Wednesday"]],
  ["Noche", ["Evening", "Night"]],
  ["Noviembre", ["November"]],
  ["Octubre", ["October"]],
  ["Otoño", ["Autumn"]],
  ["Primavera", ["Spring"]],
  ["Sábado", ["Saturday"]],
  ["Semana", ["Week"]],
  ["Semana pasada", ["Last week"]],
  ["Semana que viene", ["Next week"]],
  ["Septiembre", ["September"]],
  ["Tarde", ["Afternoon"]],
  ["Verano", ["Summer"]],
  ["Viernes", ["Friday"]],
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

const pronouns = [
  ["Yo", "Tú", "Él", "Nosotros", "Vosotros", "Ellos"], // spanish pronouns
  ["o", "as", "a", "amos", "áis", "an"], // ar verbs
  ["o", "es", "e", "emos", "éis", "en"], // er verbs
  ["o", "es", "e", "imos", "ís", "en"], // ir verbs
  ["me", "te", "se", "nos", "os", "se"], // se verbs
  ["I", "You", "He", "We", "You", "They"], // english pronouns
];

const linkWords = [
  ["También", ["Also", "As well"]],
  ["Porque", ["Because"]],
  ["Siempre", ["Always"]],
  ["Todos", ["Every", "All"]],
  ["A veces", ["Sometimes"]],
  ["Cuando", ["When"]],
  ["Dónde", ["Where"]],
  ["Por qué", ["Why"]],
  ["Cuantos", ["How many"]],
  ["Demasiado", ["Too much"]],
  ["Demasiado poco", ["Too little"]],
  ["", [""]],
];


/////////////////////////////// EVENT LISTENERS ///////////////////////////////

// TITLE BAR

hamburgerButton.addEventListener("click", () => {
  if (state.hamburgerMenu) {
    hideHamburgerMenu();
  } else {
    showHamburgerMenu();
  }
});

body.addEventListener("click", () => {
  if (state.hamburgerMenu) {
    hideHamburgerMenu();
  }
});

titleText.addEventListener("click", () => {
  resetTab();
});

speakerOn.addEventListener("click", () => {
  toggleSpeaker();
});

speakerOff.addEventListener("click", () => {
  toggleSpeaker();
});

// HAMBURGER MENU

hamburgerVerb.addEventListener("click", () => {
  state.currentTab = "verbs";
  currentTab.textContent = "Verbos";
  answerText.placeholder = state.defaultPlaceholder;
  hideHamburgerMenu();
  setNavbarStyling();
  resetTab();
});

hamburgerEmotion.addEventListener("click", () => {
  state.currentTab = "emotions";
  currentTab.textContent = "Emociones y estados";
  answerText.placeholder = state.defaultPlaceholder;
  hideHamburgerMenu();
  setNavbarStyling();
  resetTab();
});

hamburgerRelation.addEventListener("click", () => {
  state.currentTab = "relations";
  currentTab.textContent = "Relaciones";
  answerText.placeholder = state.defaultPlaceholder;
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
});

hamburgerTimeAndDate.addEventListener("click", () => {
  state.currentTab = "timeAndDate";
  currentTab.textContent = "Hora y fecha";
  answerText.placeholder = state.defaultPlaceholder;
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
});

hamburgerClothes.addEventListener("click", () => {
  state.currentTab = "clothes";
  currentTab.textContent = "Ropas";
  answerText.placeholder = state.defaultPlaceholder;
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
});

hamburgerVerbConjugation.addEventListener("click", () => {
  state.currentTab = "verbConjugation";
  currentTab.textContent = "Conjugación de verbos";
  answerText.placeholder = "Conjugar en español";
  setNavbarStyling();
  hideHamburgerMenu();
  resetTab();
});

// BODY

questionText.addEventListener("click", () => {
  // shows answer on click briefly (for idiots)
  questionText.textContent = state.questionEnglish.substring(0, state.questionLetterIndex) + "...";
  if (state.questionLetterIndex < state.questionEnglish.length) {
    state.questionLetterIndex++
  }
  if (state.errorRegister === false) {
    state.errorCounter++;
  }
  questionText.style.color = "orange";
  state.errorRegister = true;
  setTimeout(() => {
    questionText.textContent = state.questionSpanish;
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

function showHamburgerMenu() {
  hamburgerButton.style.opacity = "0.7";
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

function toggleSpeaker() {
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
  tableContainer.style.visibility = "hidden";
  updateQuestionText();
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function setNavbarStyling() {
  hamburgerButtons.forEach((element) =>
    element.classList.remove("button_active")
  );
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
    case "clothes":
      hamburgerClothes.classList.add("button_active");
      break;
    case "verbConjugation":
      hamburgerVerbConjugation.classList.add("button_active");
      break;
  }
}

function updateQuestionText() {
  let randomQuestion;
  let randomPronoun;
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
      //update randomQuestion for ie verbs 
      state.spanishPronounIndex = Math.floor(
        Math.random() * pronouns[0].length
      );
      randomPronoun = pronouns[0][state.spanishPronounIndex];

      let conjugatedAnswer = "";
      const stringMinusTwo = randomQuestion[0].length - 2;
      const stringMinusFour = randomQuestion[0].length - 4;
      let trimmedVerb = randomQuestion[0].substring(0, stringMinusTwo).toLowerCase();
      let finalTwoLetters = randomQuestion[0].substring(stringMinusTwo);
      if (finalTwoLetters === "se") {
        trimmedVerb = randomQuestion[0]
          .substring(0, stringMinusFour)
          .toLowerCase();
        finalTwoLetters = randomQuestion[0].substring(
          stringMinusFour,
          stringMinusTwo
        );
        conjugatedAnswer = pronouns[4][state.spanishPronounIndex] + " ";
        state.seConjugation = true;
      }
      switch (finalTwoLetters) {
        case "ar":
          conjugatedAnswer +=
            trimmedVerb + pronouns[1][state.spanishPronounIndex];
          break;
        case "er":
          conjugatedAnswer +=
            trimmedVerb + pronouns[2][state.spanishPronounIndex];
          break;
        case "ir":
          conjugatedAnswer +=
            trimmedVerb + pronouns[3][state.spanishPronounIndex];
          break;
      }
      state.conjugatedAnswer = conjugatedAnswer;
      state.englishPronoun = pronouns[5][state.spanishPronounIndex];
      break;
  }
  let questionSpanish;
  let questionSpanishLength;
  let questionEnglish;
  if (state.currentTab === "verbConjugation") {
    let pronounPlusQuestion = randomPronoun + " " + randomQuestion[0].toLowerCase();
    questionSpanish = pronounPlusQuestion;
    // TODO: replace this with the answer during question update
    questionEnglish = randomQuestion[1][0]
    questionText.textContent = pronounPlusQuestion;
    questionSpanishLength = pronounPlusQuestion.length;
    state.spanishPronoun = randomPronoun;
  } else {
    questionSpanish = randomQuestion[0];
    questionEnglish = randomQuestion[1][0];
    questionText.textContent = questionSpanish;
    questionSpanishLength = questionSpanish.length;
  }
  if (state.speakerOn) {
    playSpanish(questionSpanish);
  }
  state.questionLetterIndex = 1;
  state.questionSpanish = questionSpanish;
  state.questionEnglish = questionEnglish
  state.answerSummary = randomQuestion;
  if (questionSpanishLength <= 12) {
    questionText.style.fontSize = "48px";
  } else if (questionSpanishLength > 12 && questionSpanishLength <= 17) {
    questionText.style.fontSize = "28px";
  } else {
    questionText.style.fontSize = "20px";
  }
}

function updateSummaryTable() {
  let spanishText;
  let englishText;
  let optionalS = "";

  if (state.englishPronoun === "He") {
    optionalS = "s";
  }

  if (state.currentTab === "verbConjugation") {
    spanishText = state.spanishPronoun + " " + state.conjugatedAnswer;
    englishText = state.englishPronoun + " " + state.answerSummary[1][0].toLowerCase() + optionalS;
  } else {
    spanishText = state.answerSummary[0];
    englishText = state.answerSummary[1][0];
  }

  const newRow = document.createElement("tr");
  const newSpanishCell = document.createElement("td");
  const newEnglishCell = document.createElement("td");

  newSpanishCell.textContent = spanishText;
  newSpanishCell.setAttribute("class", "summary_spanish");
  newSpanishCell.setAttribute("id", spanishText);
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
  newEnglishCell.textContent = englishText;

  newRow.appendChild(newSpanishCell);
  newRow.appendChild(newEnglishCell);
  tableBody.appendChild(newRow);
  tableContainer.style.visibility = "visible";
}

function chickenDinner() {
  if (state.errorCounter === 0) {
    questionText.textContent = "¡Bien hecho!";
    correctText.textContent = "PERFECTO";
    correctText.style.color = "green";
    correctCounter.style.color = "green";
    correctTen.style.color = "green";
    titleText.textContent = "¡Richard habla español!";
    titleBar.classList.replace("grey", "winner_winner_animation");
    if (state.speakerOn) {
      playSpanish("Cena de pollo"); // chicken dinner :D
    }
    setTimeout(() => {
      titleBar.classList.replace("winner_winner_animation", "grey");
      titleText.textContent = "¿De nuevo?";
      if (state.speakerOn) {
        playSpanish("De nuevo");
      }
    }, 3000);
  } else {
    questionText.textContent = "Esfuérzate más";
    correctText.textContent = "Errores";
    correctCounter.textContent = state.errorCounter;
    titleText.textContent = "Richard no habla español";
    titleBar.classList.replace("grey", "try_harder_animation");
    if (state.speakerOn) {
      playSpanish("Boca seca"); // dry mouth ;/
    }
    setTimeout(() => {
      titleBar.classList.replace("try_harder_animation", "grey");
      titleText.textContent = "¿De nuevo?";
      if (state.speakerOn) {
        playSpanish("De nuevo");
      }
    }, 3000);
  }

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
      if (inputFormatted === state.conjugatedAnswer) {
        answerIndex = 1;
      } else {
        answerIndex = -1;
      }
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
      case "timeAndDate":
        timeAndDate.splice(state.questionIndex, 1);
        break;
      case "clothes":
        clothes.splice(state.questionIndex, 1);
        break;
      case "verbConjugation":
        verbs.splice(state.questionIndex, 1);
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
  // start speaking
  speechSynthesis.speak(message);
}

updateQuestionText();
