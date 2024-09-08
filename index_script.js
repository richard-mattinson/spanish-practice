/////////////////////////////// GLOBAL QUERY SELECTORS ///////////////////////////////

// TITLE BAR
const body = document.querySelector("#body_container");

const titleBar = document.querySelector("#title_bar");
const titleText = document.querySelector("#title_text");

const speakerOn = document.querySelector("#speaker_on");
const speakerOff = document.querySelector("#speaker_off");

const currentTab = document.querySelector("#current_tab");

// HAMBURGER MENU
const hamburgerButton = document.querySelector("#hamburger_button");
const hamburgerMenu = document.querySelector("#hamburger_menu");
const testSectionButton = document.querySelector("#test_section_button");
const studySectionButton = document.querySelector("#study_section_button");
const hamburgerButtons = document.querySelectorAll(".hamburger_buttons");
const hamburgerVerb = document.querySelector("#verb_button");
const hamburgerEmotion = document.querySelector("#emotions_button");
const hamburgerRelation = document.querySelector("#relations_button");
const hamburgerTimeAndDate = document.querySelector("#time_and_date_button");
const hamburgerClothes = document.querySelector("#clothes_button");
const hamburgerWeatherAndNature = document.querySelector(
  "#weather_and_nature_button"
);
const hamburgerVerbConjugation = document.querySelector(
  "#verb_conjugation_button"
);

// BODY
const testContainers = document.querySelectorAll(".test_containers")

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

// STUDY TABLE
const verbConjugationTableContainer = document.querySelector(
  "#verb_conjugation_table_container"
);
const verbConjugationTableHead = document.querySelector(
  "#verb_conjugation_table_head"
);
const verbConjugationTableBody = document.querySelector(
  "#verb_conjugation_table_body"
);
const closeVerbConjugationTable = document.querySelector(
  "#close_verb_conjugation_table"
);

/////////////////////////////// VARIABLE STORAGE ///////////////////////////////

//TODO: study searching and order by english word


const state = {
  color: "red",
  correctCounter: 0,
  currentTab: "verbs",
  currentTabLength: 0,
  currentTabArray: "",
  currentSection: "test",
  currentSectionTitle: "Prueba",
  defaultPlaceholder: "Escribe en ingles",
  errorCounter: 0,
  errorRegister: false,
  hamburgerMenu: false,
  questionLetterIndex: 1,
  speakerOn: false,
  questionIndex: "",
  studyPopUp: false,
};

// resources for cut and pasting
const accentedCharacters = ["á", "é", "í", "ñ", "ó", "ú"];
const placeholder = 
["", [""], ["", "", "", "", "", ""]] 

const verbs = [
  ["Alquilar", ["Rent"], []],
  ["Aprender", ["Learn"], []],
  ["Bajar", ["Go down"], []],
  ["Beber", ["Drink"], []],
  ["Buscar", ["Look for"], []],
  ["Caminar", ["Walk"], []],
  ["Cambiar", ["Change"], []],
  ["Cenar", ["Eat Dinner", "Have Dinner"], []],
  ["Comer", ["Eat"], []],
  ["Correr", ["Run"], []],
  ["Creer", ["Believe", "Think"], []],
  ["Desayunar", ["Eat Breakfast", "Have Breakfast"], []],
  ["Dormir", ["Sleep"], ["Duermo", "Duermes", "Duerme", "Dormimos", "Dormís", "Duermen"]],
  ["Enseñar", ["Teach"], []],
  ["Empezar", ["Begin", "Start"], ["Empiezo", "Empiezas", "Empieza", "Empezamos", "Empezáis", "Empiezan"]],
  ["Escribir", ["Write"], []],
  ["Escuchar", ["Listen"], []],
  ["Hacer", ["Make", "Do"], ["Hago", "Haces", "Hace", "Hacemos", "Hacéis", "Hacen"]],
  ["Ir", ["Go"], ["Voy", "Vas", "Va", "Vamos", "Vais", "Van"]],
  ["Leer", ["Read"], []],
  ["Llamarse", ["Called"], []],
  ["Llegar", ["Arrive", "Come"], []],
  ["Madrugar", ["Wake up early", "Get up early", "Rise Early"], []],
  ["Mirar", ["Look"], []],
  ["Necesitar", ["Need"], []],
  ["Olvidar", ["Forget"], []],
  ["Pagar", ["Pay"], []],
  ["Podria", ["Could"], ["Puedo", "Puedes", "Puede", "Podemos", "Podéis", "Pueden"]],
  ["Ponerse", ["Put on", "Place on"], ["me Pongo", "te Pones", "se Pone", "nos Ponemos", "os Ponéis", "se Ponen"]],
  ["Preguntar", ["Ask"], []],
  ["Prometer", ["Promise"], []],
  ["Responder", ["Answer"], []],
  ["Quedar", ["Meet"], []],
  ["Quedarse", ["Stay"], []],
  ["Querer", ["Want"], ["Quiero", "Quieres", "Quiere", "Queremos", "Queréis", "Quieren"]],
  ["Saber", ["Know"], ["Sé", "Sabes", "Sabe", "Sabemos", "Sabéis", "Saben"]],
  ["Significar", ["Mean"], []],
  ["Subir", ["Go up"], []],
  ["Tener", ["Have"], ["Tengo", "Tiene", "Tienes", "Tenemos", "Tenéis", "Tienen"]],
  ["Terminar", ["Finish", "End"], []],
  ["Vender", ["Sell"], []],
  ["Ver", ["Watch", "View", "Look"], ["Veo", "Ves", "Ve", "Vemos", "Veis", "Ven"]],
  ["Viajar", ["Travel"], []],
  ["Visitar", ["Visit"], []],
  ["Vivir", ["Live"], []],
];

const verbPronouns = [
  ["Yo", "Tú", "Él", "Nosotros", "Vosotros", "Ellos"], // spanish pronouns
  ["o", "as", "a", "amos", "áis", "an"], // ar verbs
  ["o", "es", "e", "emos", "éis", "en"], // er verbs
  ["o", "es", "e", "imos", "ís", "en"], // ir verbs
  ["me", "te", "se", "nos", "os", "se"], // se verbs
  ["I", "You", "He", "We", "You", "They"], // english pronouns
];

const emotionsAndStates = [
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
  ["Embarazado", ["Pregnant"]],
  ["Emocionado", ["Excited"]],
  ["Feliz", ["Happy"]],    
  ["Hambre", ["Hungry"]],
  ["Miedo", ["Afraid"]],
  ["Molesto", ["Annoyed"]],
  ["Nervioso", ["Nervous"]],
  ["Orgulloso", ["Proud"]],
  ["Pensativo", ["Thoughtful"]],
  ["Preocupado", ["Worried"]],
  ["Saludable", ["Healthy"]],
  ["Sed", ["Thirsty"]],
  ["Seguro", ["Confident"]],
  ["Serio", ["Serious"]],
  ["Sorprendido", ["Surprised"]],
  ["Sueno", ["Sleepy"]],
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
  ["Tiempo", ["Weather"]],
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
  ["Sombrillas", ["Umbrella"]],
  ["Vaqueros ", ["Jeans"]],
  ["Zapatos", ["Shoes"]],
  ["Zapatillas", ["Trainers"]],
  ["Zapatos de tacon", ["High heels"]],
];

const weatherAndNature = [
  ["Árbol", ["Tree"]],
  ["Calor", ["Hot"]],
  ["Cielo", ["Sky"]],
  ["Charco", ["Puddle"]],
  ["Está lloviendo", ["It's raining"]],
  ["Está nevando", ["It's snowing"]],
  ["Está nublado", ["It's cloudy", "Cloudy day"]],
  ["Está soleado", ["It's sunny", "Sunny day"]],
  ["Frío", ["Cold"]],
  ["Humedad", ["Humid"]],
  ["Hace bueno", ["Nice day", "Good day", "Sunny day", "Good weather"]],
  ["Hace mal", ["Bad day", "Cloudy day", "Bad weather"]],
  ["Hace viento", ["It's windy"]],
  ["La Temperatura", ["Temperature"]],
  ["Lago", ["Lake"]],
  ["Lluvia", ["Rain"]],
  ["Mar", ["Sea"]],
  ["Montaña", ["Mountain"]],
  ["Nieve", ["Snow"]],
  ["Nubes", ["Cloud"]],
  ["Río", ["River"]],
  ["Sol", ["Sun"]],
  ["Tiempo", ["Weather"]],
  ["Tormenta", ["Storm"]],
  ["Truenos", ["Thunder"]]
  ["Viento", ["Wind"]],
]

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
  ["Otra vez", ["Again"]],
  ["", [""]],
];

state.currentTabLength = verbs.length
state.currentTabArray = verbs


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
  if (state.studyPopUp) {
    verbConjugationTableContainer.style.display = "none";
    state.studyPopUp = false
  }
});

titleText.addEventListener("click", () => {
  resetTestComponents();
});

speakerOn.addEventListener("click", () => {
  toggleSpeaker();
});

speakerOff.addEventListener("click", () => {
  toggleSpeaker();
});

// HAMBURGER MENU

testSectionButton.addEventListener("click", () => {
  for (let i = 0; i < testContainers.length; i++) {
    testContainers[i].style.display = "flex"
  }
  tableContainer.style.visibility = "hidden";
  state.currentSection = "test"
  state.currentSectionTitle = "Prueba";
  testSectionButton.classList.add("section_active")
  studySectionButton.classList.remove("section_active")
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
  hideHamburgerMenu()
  resetTestComponents()
})

studySectionButton.addEventListener("click", () => {
  for (let i = 0; i < testContainers.length; i++) {
    testContainers[i].style.display = "none";
  }
  tableContainer.style.visibility = "visible"
  state.currentSection = "study";
  state.currentSectionTitle = "Estudiar";
  testSectionButton.classList.remove("section_active");
  studySectionButton.classList.add("section_active");
  hideHamburgerMenu()
  setStudyTable()
})

hamburgerVerb.addEventListener("click", () => {
  state.currentTab = "verbs";
  currentTab.textContent = `${state.currentSectionTitle} | Verbos`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = verbs.length
  state.currentTabArray = verbs
  hideHamburgerMenu();
  setNavbarStyling();
  //TODO: turn this into a single function
  if (state.currentSection === "test") {
    resetTestComponents();
  } else { // study
    setStudyTable()
  }
});

hamburgerEmotion.addEventListener("click", () => {
  state.currentTab = "emotions";
  currentTab.textContent = `${state.currentSectionTitle} - Emociones y estados`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = emotionsAndStates.length;
  state.currentTabArray = emotionsAndStates;
  hideHamburgerMenu();
  setNavbarStyling();
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
  }
});

hamburgerRelation.addEventListener("click", () => {
  state.currentTab = "relations";
  currentTab.textContent = `${state.currentSectionTitle} - Relaciones`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = relations.length;
  state.currentTabArray = relations;
  setNavbarStyling();
  hideHamburgerMenu();
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
  }
});

hamburgerTimeAndDate.addEventListener("click", () => {
  state.currentTab = "timeAndDate";
  currentTab.textContent = `${state.currentSectionTitle} - Hora y fecha`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = timeAndDate.length;
  state.currentTabArray = timeAndDate;
  setNavbarStyling();
  hideHamburgerMenu();
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
  }
});

hamburgerClothes.addEventListener("click", () => {
  state.currentTab = "clothes";
  currentTab.textContent = `${state.currentSectionTitle} - Ropas`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = clothes.length;
  state.currentTabArray = clothes;
  setNavbarStyling();
  hideHamburgerMenu();
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
  }
});

hamburgerWeatherAndNature.addEventListener("click", () => {
  state.currentTab = "weatherAndNature";
  currentTab.textContent = `${state.currentSectionTitle} - Clima y naturaleza`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = weatherAndNature.length;
  state.currentTabArray = weatherAndNature;
  setNavbarStyling();
  hideHamburgerMenu();
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
  }
});

hamburgerVerbConjugation.addEventListener("click", () => {
  state.currentTab = "verbConjugation";
  currentTab.textContent = "Conjugación de verbos";
  answerText.placeholder = "Conjugar en español";
  setNavbarStyling();
  hideHamburgerMenu();
  resetTestComponents();
});

// BODY

questionText.addEventListener("click", () => {
  // shows answer on click briefly (for idiots)
  if (state.currentTab !== "verbConjugation") {
    questionText.textContent = state.questionEnglish.substring(0, state.questionLetterIndex) + "...";
  } else {
    questionText.textContent = state.conjugatedAnswer
  }
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

// STUDY TABLE
closeVerbConjugationTable.addEventListener("click", () => {
  verbConjugationTableContainer.style.display = "none"
  state.studyPopUp = false
})

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

function resetTestComponents() {
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
    case "weatherAndNature":
      hamburgerWeatherAndNature.classList.add("button_active")
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
      state.questionIndex = Math.floor(
        Math.random() * emotionsAndStates.length
      );
      randomQuestion = emotionsAndStates[state.questionIndex];
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
    case "weatherAndNature":
      state.questionIndex = Math.floor(Math.random() * weatherAndNature.length);
      randomQuestion = weatherAndNature[state.questionIndex];
      break;
    case "verbConjugation":
      // this section prepares the conjugation answer in advance
      state.questionIndex = Math.floor(Math.random() * verbs.length);
      randomQuestion = verbs[state.questionIndex];
      state.spanishPronounIndex = Math.floor(
        Math.random() * verbPronouns[0].length
      );
      randomPronoun = verbPronouns[0][state.spanishPronounIndex];

      let conjugatedAnswer = "";
      const stringMinusTwo = randomQuestion[0].length - 2;
      const stringMinusFour = randomQuestion[0].length - 4;
      let trimmedVerb = randomQuestion[0]
        .substring(0, stringMinusTwo)
        .toLowerCase();
      if (randomQuestion[2].length === 0) { // verb is NOT irregular, so conjugation array is empty
        let finalTwoLetters = randomQuestion[0].substring(stringMinusTwo);
        if (finalTwoLetters === "se") {
          trimmedVerb = randomQuestion[0].substring(0, stringMinusFour).toLowerCase();
          finalTwoLetters = randomQuestion[0].substring(stringMinusFour,stringMinusTwo);
          conjugatedAnswer = verbPronouns[4][state.spanishPronounIndex] + " ";
          state.seConjugation = true;
        }
        switch (finalTwoLetters) {
          case "ar":
            conjugatedAnswer +=
              trimmedVerb + verbPronouns[1][state.spanishPronounIndex];
            break;
          case "er":
            conjugatedAnswer +=
              trimmedVerb + verbPronouns[2][state.spanishPronounIndex];
            break;
          case "ir":
            conjugatedAnswer +=
              trimmedVerb + verbPronouns[3][state.spanishPronounIndex];
            break;
        }
      } else {
        conjugatedAnswer = randomQuestion[2][state.spanishPronounIndex]
      }
      console.log("conjugated answer", conjugatedAnswer);
      state.conjugatedAnswer = conjugatedAnswer;
      state.englishPronoun = verbPronouns[5][state.spanishPronounIndex];
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

function setStudyTable() {
    while (tableBody.hasChildNodes()) {
      tableBody.removeChild(tableBody.firstChild);
    }
  for (let i = 0; i < state.currentTabLength; i++) {
    const spanishText = state.currentTabArray[i][0]
    const englishText = state.currentTabArray[i][1][0]

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

    newEnglishCell.textContent = englishText;
    newEnglishCell.addEventListener("click", (event) => {
      while (verbConjugationTableHead.hasChildNodes()) {
        verbConjugationTableHead.removeChild(verbConjugationTableHead.firstChild);
      }
      while (verbConjugationTableBody.hasChildNodes()) {
        verbConjugationTableBody.removeChild(verbConjugationTableBody.firstChild);
      }
      verbConjugationTableContainer.style.left = (screen.width / 2) - 150 + "px";
      verbConjugationTableContainer.style.display = "flex"
      let infinitiveEnglishText = event.target.getAttribute("data-english-infinitive")
      let infinitiveSpanishText = event.target.getAttribute("data-spanish-infinitive");
      const newInfinitiveEnglishCell = document.createElement("th")
      const newInfinitiveSpanishCell = document.createElement("th");
      newInfinitiveSpanishCell.textContent = infinitiveSpanishText
      newInfinitiveEnglishCell.textContent =
        "To" + " " + infinitiveEnglishText.toLowerCase();
      newInfinitiveSpanishCell.setAttribute("id", infinitiveSpanishText)

      newInfinitiveSpanishCell.addEventListener("click", (event) => {
        const word = event.target.id;
        playSpanish(word);
      })
      verbConjugationTableHead.appendChild(newInfinitiveEnglishCell)
      verbConjugationTableHead.appendChild(newInfinitiveSpanishCell)

      for (let i = 0; i < verbPronouns[0].length; i++) {
        let particleSpanishText = verbPronouns[0][i]
        let conjugatedSpanishText = event.target.getAttribute(`data-${i}`);
        const popupRow = document.createElement("tr")
        const particleSpanishCell = document.createElement("td")
        const conjugatedSpanishCell = document.createElement("td")
        particleSpanishCell.textContent = particleSpanishText
        conjugatedSpanishCell.textContent = conjugatedSpanishText
        conjugatedSpanishCell.setAttribute("id", conjugatedSpanishText)
        conjugatedSpanishCell.setAttribute("class", "summary_table")
        conjugatedSpanishCell.addEventListener("click", (event) => {
          const word = event.target.id;
          playSpanish(word);
        })
        verbConjugationTableBody.appendChild(popupRow)
        popupRow.appendChild(particleSpanishCell)
        popupRow.appendChild(conjugatedSpanishCell)
      }
      setTimeout(() => {
        state.studyPopUp = true;
      }, 1000);
    })
    if (state.currentTab === "verbs") {
      newEnglishCell.setAttribute("class", "summary_table")
      newEnglishCell.setAttribute("data-spanish-infinitive", spanishText)
      newEnglishCell.setAttribute("data-english-infinitive", englishText)
      for (let j = 0; j < verbPronouns[0].length; j++) {
      let conjugatedAnswer = "";
      const stringMinusTwo = verbs[i][0].length - 2;
      const stringMinusFour = verbs[i][0].length - 4;
      let trimmedVerb = verbs[i][0].substring(0, stringMinusTwo).toLowerCase();
      if (verbs[i][2].length === 0) {
        // verb is NOT irregular, so conjugation array is empty
        let finalTwoLetters = verbs[i][0].substring(stringMinusTwo);
        if (finalTwoLetters === "se") {
            trimmedVerb = verbs[i][0].substring(0, stringMinusFour).toLowerCase();
            finalTwoLetters = verbs[i][0].substring(stringMinusFour, stringMinusTwo
          );
          conjugatedAnswer = verbPronouns[4][j] + " ";
          // state.seConjugation = true;
        }
        switch (finalTwoLetters) {
          case "ar":
            conjugatedAnswer += trimmedVerb + verbPronouns[1][j];
            break;
          case "er":
            conjugatedAnswer += trimmedVerb + verbPronouns[2][j];
            break;
          case "ir":
            conjugatedAnswer += trimmedVerb + verbPronouns[3][j];
            break;
        }
        } else {
          conjugatedAnswer = verbs[i][2][j];
        }
        newEnglishCell.setAttribute(`data-${j}`, conjugatedAnswer)
      }
    }

    newRow.appendChild(newSpanishCell);
    newRow.appendChild(newEnglishCell);
    tableBody.appendChild(newRow);
  }
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
      answerIndex = emotionsAndStates[state.questionIndex][1].findIndex(
        (element) => {
          return element.toLowerCase().trim() === inputFormatted;
        }
      );
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
    case "weatherAndNature":
      answerIndex = weatherAndNature[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "verbConjugation":
      console.log("answer", inputFormatted, state.conjugatedAnswer);
      if (inputFormatted === state.conjugatedAnswer.toLowerCase()) {
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
        emotionsAndStates.splice(state.questionIndex, 1);
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
      case "weatherAndNature":
        weatherAndNature.splice(state.questionIndex, 1);
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