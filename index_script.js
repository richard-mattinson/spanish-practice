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
const hamburgerLinkWords = document.querySelector("#link_words_button");
const hamburgerPhrases = document.querySelector("#phrases_button");
const hamburgerVerbConjugation = document.querySelector(
  "#verb_conjugation_button"
);

// BODY
const testContainers = document.querySelectorAll(".test_containers");

const questionText = document.querySelector("#text_question");
const questionExample = document.querySelector("#text_example")

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
const verbConjugationTableTitle = document.querySelector(".verb_conjugation_table_title");
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
  verbSummary: [],
};

// resources for cut and pasting
const accentedCharacters = ["á", "é", "í", "ñ", "ó", "ú"];
const placeholder = ["", [""], ["", "", "", "", "", ""], [""]];
const example = ["Verb (Spanish)", ["Verb (English)"], ["Conjugations (Irregular only"], ["Example sentence"]];

const verbs = [
  ["Abrir", ["Open"], [], ["Él abre la puerta"]],
  ["Acostarse", ["Lie down", "Lay down"], ["me acuesto", "te acuestas", "se acuesta", "nos acostamos", "os acostáis", "se acuestan"], [""]],
  ["Alquilar", ["Rent"], [], ["Alquilo una casa"]],
  ["Aprender", ["Learn"], [], ["Me gusta aprender español"]],
  ["Bajar", ["Go down"], [], ["Nosotros bajamos las escaleras"]],
  ["Beber", ["Drink"], [], ["Ellos beben cervezas juntas"]],
  ["Buscar", ["Look for"], [], ["Ella busca un nuevo trabajo"]],
  ["Caminar", ["Walk"], [], ["Nos gusta caminar los domingos por la mañana"]],
  ["Cambiar", ["Change"], [], ["Creo que vas a cambiar de opinión."]],
  ["Cenar", ["Eat Dinner", "Have Dinner"], [], ["Nosotros cenamos a las siete de la tarde"]],
  ["Coger", ["Take"], ["Cojo", "Coges", "Coge"], ["Yo cojo el autobus para ir al trabajo"]],
  ["Comer", ["Eat"], [], ["Yo como un plátano todos los días"]],
  ["Conducir", ["Drive", "Drives"], ["Conduzco", "Conduces", "Conduce", "Conducimos", "Conducís", "Conducen"], ["El conduce al trabajo tres veces por semana"]],
  ["Conocer", ["Know"], ["Conozco", "Conoces", "Conoce", "Conocemos", "Conocéis", "Conocen"], ["Ellos conocen a mi hermano"]],
  ["Cerrar", ["Close"], ["Cierro", "Cierras", "Cierra", "Cerramos", "Cerráis", "Cierran"], ["Las tiendas cierran a las cinco de la tarde."]],
  ["Correr", ["Run"], [], ["Corro la mayoría de los días"]],
  ["Creer", ["Believe", "Think"], [], ["Creemos que es divertido"]],
  ["Dar", ["Give"], ["Doy", "Das", "Da", "Damos", "Dais", "Dan"], ["Ellos me dan regalos para mi cumpleaños"]],
  ["Decir", ["Say", "Tell"], ["Digo", "Dices", "Dice", "Decimos", "Decís", "Dicen"], ["Yo digo hola"]],
  ["Deber", ["Must", "Should"], [], ["Deberíamos comer más frutas y verduras."]],
  ["Despertarse", ["Wake up"], ["Me despierto", "Te despiertas", "Se despierta", "Nos despertamos", "Os despertáis", "Se despiertan"], ["Se despiertan tarde en la fin de semana"]],
  ["Desayunar", ["Eat Breakfast", "Have Breakfast"], [], ["¿A qué hora es el desayuno?"]],
  ["Dormir", ["Sleep", "Asleep", "Be asleep"], ["Duermo", "Duermes", "Duerme", "Dormimos", "Dormís", "Duermen"], ["Nosotros dormimos más el fin de semana"]],
  ["Dormirse", ["Fall asleep", "Go to sleep"], ["Duermo", "Duermes", "Duerme", "Dormimos", "Dormís", "Duermen"], ["Duermo a las once todos los días"]],
  ["Ducharse", ["Shower"], [], ["Me ducho cada manana"]],
  ["Encantar", ["Love"], [], ["Ellos encanta su jardín"]],
  ["Enseñar", ["Teach"], [], ["Mónica me enseña español"]],
  ["Empezar", ["Begin", "Start"], ["Empiezo", "Empiezas", "Empieza", "Empezamos", "Empezáis", "Empiezan"], ["Empezamos a trabajar a las nueve de la mañana."]],
  ["Entender", ["Understand"], ["Entiendo", "Entiendes", "Entiende", "Entendemos", "Entendéis", "Entienden"], ["No entiendo. ¿Podrías repetirlo?"]],
  ["Escribir", ["Write"], [], ["Ella escribe mucho por trabajo."]],
  ["Escuchar", ["Listen"], [], ["Ellos escuchan mucha música"]],
  ["Esperar", ["Hope"], [], ["Espero poder verla más"]],
  ["Estudiar", ["Study"], [], ["Estudio español con Mónica dos veces por semana"]],
  ["Fumar", ["Smoke"], [], ["No me gusta fumar. Es repugnante."]],
  ["Gustar", ["Like"], [], ["Me gustan bastante los programas de televisión, pero prefiero las películas."]],
  ["Hacer", ["Make", "Do"], ["Hago", "Haces", "Hace", "Hacemos", "Hacéis", "Hacen"], ["Ella hace bolsos y mascarillas para vender."]],
  ["Interesar", ["Interest"], [], ["A mi no me interesan los museos"]],
  ["Ir", ["Go"], ["Voy", "Vas", "Va", "Vamos", "Vais", "Van"], ["Ella va a las tiendas temprano los sábados."]],
  ["Lavarse", ["Wash", "Clean"], [], ["Te lavas la cara cada mañana"]],
  ["Leer", ["Read"], [], ["Ellos leen muchos libros en el verano"]],
  ["Limpiar", ["Clean"], [], ["Ellos limpian la mesa después de la cena"]],
  ["Llamarse", ["Call", "Called"], [], ["Llamo a mis padres cada dos semanas."]],
  ["Llegar", ["Arrive", "Come"], [], ["Él siempre llega tarde."]],
  ["Levantarse", ["Get up"], [], ["Se levanta a las ocho y media cada dia"]],
  ["Madrugar", ["Wake up early", "Get up early", "Rise early"], [], ["Yo madrugo tres días cada semana."]],
  ["Mejorar", ["Improve"], [], ["Mejoro mi español cada semana"]],
  ["Mirar", ["Look"], [], ["Miro mis fotos a menudo"]],
  ["Montar", ["Ride", "Mount"], [], ["En vacaciones montamos en bicicleta."]],
  ["Necesitar", ["Need"], [], ["Necesitas más tiempo"]],
  ["Odiar", ["Hate"], [], ["Odio a los propietarios"]],
  ["Olvidar", ["Forget"], [], ["A veces olvido palabras en español."]],
  ["Pagar", ["Pay"], [], ["Le pago al barista por café."]],
  ["Pasar", ["Pass", "Happen"], [], ["Pasas por la estación de tren de camino a casa."]],
  ["Pedir", ["Ask for", "Order"], ["Pido", "Pides", "Pide", "Pedimos", "Pedís", "Piden"]],
  ["Perder", ["Lose"], ["Pierdo", "Pierdes", "Pierde", "Perdemos", "Perdéis", "Pierden"], [""]],
  ["Pensar", ["Think about", "Think"], ["Pienso", "Piensas", "Piensa", "Pensemos", "Pensáis", "Piensen"], ["Pienso en Japón a menudo"]],
  ["Poder", ["Be able", "Could"], ["Puedo", "Puedes", "Puede", "Podemos", "Podéis", "Pueden"], ["Puedo hablar un poco de espanol"]],
  ["Poner", ["Put an item in / on something", "Put in", "Put on", "Place on"], ["Pongo", "Pones", "Pone", "Ponemos", "Ponéis", "Ponen"], ["Pongo la comida en el frigorífico"]],
  ["Ponerse", ["Put on (clothes) / Put yourself in a mood", "Put on"], ["me Pongo", "te Pones", "se Pone", "nos Ponemos", "os Ponéis", "se Ponen"], ["Me pongo mi camisa favorita"]],
  ["Preguntar", ["Ask"], [], ["Ella me hace preguntas en español"]],
  ["Preguntarse", ["Wonder"], [], ["Me pregunto si ella está ocupada ahora."]],
  ["Prometer", ["Promise"], [], ["Prometo limpiar la cocina"]],
  ["Reírse", ["Laugh"], ["Rio", "Ríes", "Rie", "Reímos", "Reís", "Ríen"], ["Example here"]],
  ["Responder", ["Answer"], [], ["Ellos responden la pregunta"]],
  ["Quedar", ["Meet", "Left", "Remain"], [], ["Quedo con mis amigos los fines de semana"]],
  ["Quedarse", ["Stay"], [], ["Nosotros nos quedamos en casa los domingos"]],
  ["Querer", ["Want"], ["Quiero", "Quieres", "Quiere", "Queremos", "Queréis", "Quieren"], ["Ella quiere hamburguesa y patatas fritas para el almuerzo."]],
  ["Saber", ["Know"], ["Sé", "Sabes", "Sabe", "Sabemos", "Sabéis", "Saben"], ["Sé cómo escribir código en Javascript."]],
  ["Salir", ["Go out", "Leave"], ["Salgo", "Sales", "Sale", "Salimos", "Salis", "Salen"], ["Nosotros salimos el fin de semana"]],
  ["Significar", ["Mean"], [], ["No significan nada para mí, ahora"]],
  ["Subir", ["Go up"], [], ["Cuando es tarde, subimos las escaleras"]],
  ["Tener", ["Have"], ["Tengo", "Tiene", "Tienes", "Tenemos", "Tenéis", "Tienen"], ["Tengo frio"]],
  ["Terminar", ["Finish", "End"], [], ["Termino de trabajar a las cinco de la tarde."]],
  ["Tocar", ["Touch", "Play"], [], ["Ella toca muy bien la guitarra."]],
  ["Vender", ["Sell"], [], ["Ella vende el mejor café de la ciudad."]],
  ["Ver", ["Watch", "View", "Look"], ["Veo", "Ves", "Ve", "Vemos", "Veis", "Ven"], ["Nosotros vemos películas juntos en navidad"]],
  ["Vestirse", ["Get dressed"], [], ["Me visto antes de ir a trabajar"]],
  ["Viajar", ["Travel"], [], ["Yo viajo al trabajo en autobús"]],
  ["Visitar", ["Visit"], [], ["Visito la cafetería al final de mi calle todos los días."]],
  ["Vivir", ["Live"], [], ["Ahora vive en Japón."]],
  ["Valer", ["Worth"], ["Valgo", "Vales", "Vale", "Valemos", "Valéis", "Valen"], ["No vale la pena el dinero"]],
  ["Volar", ["Fly"], ["Vuelo", "Vuelas", "Vuela", "Volamos", "Voláis", "Vuelan"], ["Vuela a Japón esta noche"]],
  ["Volver", ["Come back", "Return"], ["Vuelvo", "Vuelves", "Vuelve", "Volemos", "Volvéis", "Vuelven"], ["Nosotros volvemos mas tarde"]],
];

const verbPronouns = [
  ["Yo", "Tú", "Él", "Nosotros", "Vosotros", "Ellos"], // spanish pronouns
  ["o", "as", "a", "amos", "áis", "an"], // ar verbs - present
  ["o", "es", "e", "emos", "éis", "en"], // er verbs - present
  ["o", "es", "e", "imos", "ís", "en"], // ir verbs - present
  ["me", "te", "se", "nos", "os", "se"], // se verbs
  ["I", "You", "He", "We", "You", "They"], // english pronouns
  ["é", "aste", "ó", "amos", "asteis", "aron"], // ar verbs - past
  ["í", "iste", "ó", "imos", "isteis", "ieron"], // er verbs - past
  ["í", "ste", "ó", "imos", "steis", "eron"], // ir verbs - past
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
  ["Jubilado", ["Retired"]],
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
  ["Antes", ["Before"]],
  ["Ayer", ["Yesterday"]],
  ["Después", ["After"]],
  ["Diciembre", ["December"]],
  ["Domingo", ["Sunday"]],
  ["El año que viene", ["Next year"]],
  ["El próximo año", ["Next year"]],
  ["El próximo día", ["Next day"]],
  ["La próxima semana", ["Next week"]],
  ["Enero", ["January"]],
  ["Febrero", ["February"]],
  ["Fin de semana", ["Weekend"]],
  ["Hoy", ["Today"]],
  ["Hora", ["Hour", "Time"]],
  ["Marzo", ["March"]],
  ["Mayo", ["May"]],
  ["Mes", ["Month"]],
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
  ["Pronto", "Soon", "Quick"][("Sábado", ["Saturday"])],
  ["Semana", ["Week"]],
  ["Semana pasada", ["Last week"]],
  ["Semana que viene", ["Next week"]],
  ["Septiembre", ["September"]],
  ["Tarde", ["Afternoon", "Later", "Late"]],
  ["Tiempo", ["Weather"]],
  ["Temprano", ["Early"]][("Verano", ["Summer"])],
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
  ["Truenos", ["Thunder"]][("Viento", ["Wind"])],
];

const linkWords = [
  ["Al", ["To the"]],
  ["A lo mejor", ["Maybe"]],
  ["A veces", ["Sometimes"]],
  ["Aunque", ["Although"]],
  ["Así que", ["So"]],
  ["Bastante", ["Quite"]],
  ["Basura", ["Rubbish"]],
  ["Cada", ["Each"]],
  ["Cerca", ["Close", "Near"]],
  ["Con", ["With"]],
  ["Conmigo", ["With me"]],
  ["Cosa", ["Thing"]],
  ["Cuando", ["When"]],
  ["Cuantos", ["How many"]],
  ["Deberías", ["Should"]],
  ["Del", ["Of the", "From the"]],
  ["Demasiado", ["Too much"]],
  ["Demasiado poco", ["Too little"]],
  ["Depende", ["Depends"]],
  ["Desde", ["Since", "From"]],
  ["Dónde", ["Where"]],
  ["La mayoría", ["Most"]],
  ["Lejos", ["Far"]],
  ["Lo mismo", ["The same", "Same"]],
  ["Luego", ["Then", "Next", "Later"]], 
  ["Juntos", ["Together"]],
  ["Más", ["More"]],
  ["Más tarde", ["Later"]], 
  ["Mejor", ["Better"]],
  ["Mucho", ["A lot"]],
  ["Muy", ["Very"]],
  ["Otra vez", ["Again"]],
  ["Parece", ["Seems"]],
  ["Pero", ["But"]],
  ["Poco", ["Little", "A little", "Few"]],
  ["Pequeño", ["Small", "Young", "Short"]],
  ["Por eso", ["That's why", "Therefore"]],
  ["Por qué", ["Why"]],
  ["Porque", ["Because"]],
  ["Quien", ["Who"]]
  ["Si", ["If"]],
  ["Siempre", ["Always"]],
  ["Sin", ["Without"]],
  ["También", ["Also", "As well"]],
  ["Tampoco", ["Neither"]],
  ["Todos", ["Every", "All"]],
  ["Todavía", ["Still"]],
  ["Todavía no", ["Not yet"]],
  ["Un poco", ["A little"]],
  ["Ya", ["Already"]],
];

const phrases = [
  ["Vale la pena", ["It's worth it"]],
  ["No te preocupes", ["Don't worry"]],
  ["No importa", ["It doesn't matter", "It does not matter"]],
  ["No pasa nada", ["It doesn't matter", "It does not matter"]],
  ["Me parece bien", ["Seems good to me", "Seems good"]],
  ["Me parece mal", ["Seems bad to me", "Seems bad"]],
  ["No soy bueno", ["I'm not good at it", "I'm bad at it"]],
  ["¿Puede repetir?", ["Can you repeat that", "Could you repeat", "Could you say that again"]],
  ["¿Como se dice '(English word)'?", ["How do you say this word", "How do you say this", "How do you say"]],
  ["No entiendo", ["I don't understand"]],
  ["¿Que significa '(Spanish word)'?", ["What does this word mean", "What does this mean"]],
  ["No hay tiempo", ["There is no time"]],
  ["No hay necesitar", ["There is need"]],
  ["Me siento feliz", ["I feel happy"]],
  ["Me siento cansado", ["I feel tired"]],
  ["Casi siempre", ["Almost always"]],
  ["Casi nunca", ["Almost never"]],
  ["De fez un cuando", ["Every so often", "From time to time", "Time to time"]],
  ["El día pasa rápido", ["Today went fast"]],
  ["¿Como te llamas?", ["What's your name", "What is your name"]],
  ["¿Que tal?", ["How are you"]],
  ["¿Que tal tu dia?", ["How was your day"]],
  ["¿Como te sientes?", ["How do you feel"]],
  ["Me alegro", ["Glad to hear it", "I'm glad", "I'm glad to hear it"]],
];

state.currentTabLength = verbs.length;
state.currentTabArray = verbs;

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
    state.studyPopUp = false;
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
    testContainers[i].style.display = "flex";
  }
  tableContainer.style.visibility = "hidden";
  state.currentSection = "test";
  state.currentSectionTitle = "Prueba";
  testSectionButton.classList.add("section_active");
  studySectionButton.classList.remove("section_active");
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
  hideHamburgerMenu();
  resetTestComponents();
});

studySectionButton.addEventListener("click", () => {
  for (let i = 0; i < testContainers.length; i++) {
    testContainers[i].style.display = "none";
  }
  tableContainer.style.visibility = "visible";
  state.currentSection = "study";
  state.currentSectionTitle = "Estudiar";
  testSectionButton.classList.remove("section_active");
  studySectionButton.classList.add("section_active");
  hideHamburgerMenu();
  setStudyTable();
});

hamburgerVerb.addEventListener("click", () => {
  state.currentTab = "verbs";
  currentTab.textContent = `${state.currentSectionTitle} | Verbos`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = verbs.length;
  state.currentTabArray = verbs;
  hideHamburgerMenu();
  setNavbarStyling();
  //TODO: turn this into a single function
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
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

hamburgerLinkWords.addEventListener("click", () => {
  state.currentTab = "linkWords";
  currentTab.textContent = `${state.currentSectionTitle} - Palabras de enlace`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = linkWords.length;
  state.currentTabArray = linkWords;
  setNavbarStyling();
  hideHamburgerMenu();
  if (state.currentSection === "test") {
    resetTestComponents();
  } else {
    // study
    setStudyTable();
  }
});

hamburgerPhrases.addEventListener("click", () => {
  state.currentTab = "phrases";
  currentTab.textContent = `${state.currentSectionTitle} - Frases`;
  answerText.placeholder = state.defaultPlaceholder;
  state.currentTabLength = phrases.length;
  state.currentTabArray = phrases;
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
    questionText.textContent = state.questionEnglish + "...";
    // questionText.textContent = state.questionEnglish.substring(0, state.questionLetterIndex) + "...";
  } else {
    questionText.textContent = state.conjugatedAnswer;
  }
  if (state.questionLetterIndex < state.questionEnglish.length) {
    state.questionLetterIndex++;
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
  if (event.key === "Enter" && answerText.value !== "") {
    const answer = answerText.value;
    checkAnswer(answer);
  }
});

// STUDY TABLE
closeVerbConjugationTable.addEventListener("click", () => {
  verbConjugationTableContainer.style.display = "none";
  state.studyPopUp = false;
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
      hamburgerWeatherAndNature.classList.add("button_active");
      break;
    case "linkWords":
      hamburgerLinkWords.classList.add("button_active");
      break;
    case "phrases":
      hamburgerPhrases.classList.add("button_active");
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
      questionExample.textContent = verbs[state.questionIndex][3][0];
      state.verbSummary.push(randomQuestion);
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
    case "linkWords":
      state.questionIndex = Math.floor(Math.random() * linkWords.length);
      randomQuestion = linkWords[state.questionIndex];
      break;
    case "phrases":
      state.questionIndex = Math.floor(Math.random() * phrases.length);
      randomQuestion = phrases[state.questionIndex];
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
      if (randomQuestion[2].length === 0) {
        // verb is NOT irregular, so conjugation array is empty
        let finalTwoLetters = randomQuestion[0].substring(stringMinusTwo);
        if (finalTwoLetters === "se") {
          trimmedVerb = randomQuestion[0]
            .substring(0, stringMinusFour)
            .toLowerCase();
          finalTwoLetters = randomQuestion[0].substring(
            stringMinusFour,
            stringMinusTwo
          );
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
        conjugatedAnswer = randomQuestion[2][state.spanishPronounIndex];
      }
      state.conjugatedAnswer = conjugatedAnswer;
      state.englishPronoun = verbPronouns[5][state.spanishPronounIndex];
      break;
  }
  let questionSpanish;
  let questionSpanishLength;
  let questionEnglish;
  if (state.currentTab === "verbConjugation") {
    let pronounPlusQuestion =
      randomPronoun + " " + randomQuestion[0].toLowerCase();
    questionSpanish = pronounPlusQuestion;
    // TODO: replace this with the answer during question update
    questionEnglish = randomQuestion[1][0];
    questionText.textContent = pronounPlusQuestion;
    if (randomQuestion[2].length !== 0) {
      questionText.setAttribute("class", "irregular_verb_highlight");
    }
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
  state.questionEnglish = questionEnglish;
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
    englishText =
      state.englishPronoun +
      " " +
      state.answerSummary[1][0].toLowerCase() +
      optionalS;
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

  //TODO: show conjugation modal onclick (same as study table)
  if (state.currentSection === "study" && state.currentTab === "verbs") {
    newEnglishCell.addEventListener("click", (event) => {
      while (verbConjugationTableHead.hasChildNodes()) {
        verbConjugationTableHead.removeChild(verbConjugationTableHead.firstChild);
      }
      while (verbConjugationTableBody.hasChildNodes()) {
        verbConjugationTableBody.removeChild(verbConjugationTableBody.firstChild);
      }
      verbConjugationTableContainer.style.left = screen.width / 2 - 175 + "px";
      verbConjugationTableContainer.style.display = "flex";
      let infinitiveEnglishText = event.target.getAttribute(
        "data-english-infinitive"
      );
      let infinitiveSpanishText = event.target.getAttribute(
        "data-spanish-infinitive"
      );
      const newInfinitiveEnglishCell = document.createElement("th");
      const newInfinitiveSpanishCell = document.createElement("th");
      newInfinitiveSpanishCell.textContent = infinitiveSpanishText;
      newInfinitiveEnglishCell.textContent =
        "To" + " " + infinitiveEnglishText.toLowerCase();
      newInfinitiveSpanishCell.setAttribute("id", infinitiveSpanishText);
  
      newInfinitiveSpanishCell.addEventListener("click", (event) => {
        const word = event.target.id;
        playSpanish(word);
      });
      verbConjugationTableHead.appendChild(newInfinitiveEnglishCell);
      verbConjugationTableHead.appendChild(newInfinitiveSpanishCell);
  
      for (let i = 0; i < verbPronouns[0].length; i++) {      
        let particleSpanishText = verbPronouns[0][i];
        let conjugatedSpanishText = event.target.getAttribute(`data-present-${i}`);
        const popupRow = document.createElement("tr");
        const particleSpanishCell = document.createElement("td");
        const conjugatedSpanishCell = document.createElement("td");
        particleSpanishCell.textContent = particleSpanishText;
        conjugatedSpanishCell.textContent = conjugatedSpanishText;
        conjugatedSpanishCell.setAttribute("id", conjugatedSpanishText);
        conjugatedSpanishCell.setAttribute("class", "summary_table");
        conjugatedSpanishCell.addEventListener("click", (event) => {
          const word = event.target.id;
          playSpanish(word);
        });
        verbConjugationTableBody.appendChild(popupRow);
        popupRow.appendChild(particleSpanishCell);
        popupRow.appendChild(conjugatedSpanishCell);
      }
      setTimeout(() => {
        state.studyPopUp = true;
      }, 1000);
    });
  }
  newEnglishCell.setAttribute("data-spanish-infinitive", spanishText);
  newEnglishCell.setAttribute("data-english-infinitive", englishText);

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
    const spanishText = state.currentTabArray[i][0];
    const englishText = state.currentTabArray[i][1][0];

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
    if (
      state.currentTab === "verbs" &&
      state.currentTabArray[i][2].length !== 0
    ) {
      newSpanishCell.setAttribute("class", "irregular_verb_highlight");
    }

    newEnglishCell.textContent = englishText;
    // pop up verb conjugation table
    newEnglishCell.addEventListener("click", (event) => {
      while (verbConjugationTableBody.hasChildNodes()) {
        verbConjugationTableBody.removeChild(verbConjugationTableBody.firstChild);
      }
      verbConjugationTableContainer.style.left = screen.width / 2 - 175 + "px";
      verbConjugationTableContainer.style.display = "flex";
      let infinitiveEnglishText = event.target.getAttribute("data-english-infinitive");
      let infinitiveSpanishText = event.target.getAttribute("data-spanish-infinitive");
      verbConjugationTableTitle.innerHTML = `<b>${infinitiveSpanishText}</b> - To ${infinitiveEnglishText}`;
      verbConjugationTableTitle.setAttribute("id", infinitiveSpanishText)
      verbConjugationTableTitle.addEventListener("click", (event) => {
        const word = event.target.id;
        playSpanish(word);
      });

      for (let i = 0; i < verbPronouns[0].length; i++) {
        let particleSpanishText = verbPronouns[0][i];
        let conjugatedPresentSpanishText = event.target.getAttribute(`data-present-${i}`);
        let conjugatedPastSpanishText = event.target.getAttribute(`data-past-${i}`);

        const popupRow = document.createElement("tr");
        const particleSpanishCell = document.createElement("td");
        const conjugatedPresentSpanishCell = document.createElement("td");
        const conjugatedPastSpanishCell = document.createElement("td");

        particleSpanishCell.textContent = particleSpanishText;

        conjugatedPresentSpanishCell.textContent = conjugatedPresentSpanishText;
        conjugatedPresentSpanishCell.setAttribute("id", conjugatedPresentSpanishText);
        conjugatedPresentSpanishCell.setAttribute("class", "summary_table");
        conjugatedPresentSpanishCell.addEventListener("click", (event) => {
          const word = event.target.id;
          playSpanish(word);
        });

        conjugatedPastSpanishCell.textContent = conjugatedPastSpanishText;
        conjugatedPastSpanishCell.setAttribute("id", conjugatedPastSpanishText);
        conjugatedPastSpanishCell.setAttribute("class", "summary_table");
        conjugatedPastSpanishCell.addEventListener("click", (event) => {
          const word = event.target.id;
          playSpanish(word);
        });

        verbConjugationTableBody.appendChild(popupRow);
        popupRow.appendChild(particleSpanishCell);
        popupRow.appendChild(conjugatedPresentSpanishCell);
        popupRow.appendChild(conjugatedPastSpanishCell);
      }
      setTimeout(() => {
        state.studyPopUp = true;
      }, 1000);
    });
    if (state.currentTab === "verbs") {
      newEnglishCell.setAttribute("class", "summary_table");
      newEnglishCell.setAttribute("data-spanish-infinitive", spanishText);
      newEnglishCell.setAttribute("data-english-infinitive", englishText);
      for (let j = 0; j < verbPronouns[0].length; j++) {
        let conjugatedAnswerPresent = "";
        let conjugatedAnswerPast = ""
        const stringMinusTwo = verbs[i][0].length - 2;
        const stringMinusFour = verbs[i][0].length - 4;
        let trimmedVerb = verbs[i][0]
          .substring(0, stringMinusTwo)
          .toLowerCase();
        if (verbs[i][2].length === 0) {
          // verb is NOT irregular, so conjugation array is empty
          let finalTwoLetters = verbs[i][0].substring(stringMinusTwo);
          if (finalTwoLetters === "se") {
            trimmedVerb = verbs[i][0]
              .substring(0, stringMinusFour)
              .toLowerCase();
            finalTwoLetters = verbs[i][0].substring(
              stringMinusFour,
              stringMinusTwo
            );
            conjugatedAnswerPresent = verbPronouns[4][j] + " ";
            // state.seConjugation = true;
          }
          switch (finalTwoLetters) {
            case "ar":
              conjugatedAnswerPresent += trimmedVerb + verbPronouns[1][j];
              conjugatedAnswerPast += trimmedVerb + verbPronouns[6][j]
              break;
            case "er":
              conjugatedAnswerPresent += trimmedVerb + verbPronouns[2][j];
              conjugatedAnswerPast += trimmedVerb + verbPronouns[7][j];
              break;
            case "ir":
              conjugatedAnswerPresent += trimmedVerb + verbPronouns[3][j];
              conjugatedAnswerPast += trimmedVerb + verbPronouns[8][j];
              break;
          }
        } else {
          conjugatedAnswerPresent = verbs[i][2][j];
        }
        newEnglishCell.setAttribute(`data-present-${j}`, conjugatedAnswerPresent);
        newEnglishCell.setAttribute(`data-past-${j}`, conjugatedAnswerPast)
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
      answerIndex = weatherAndNature[state.questionIndex][1].findIndex(
        (element) => {
          return element.toLowerCase().trim() === inputFormatted;
        }
      );
      break;
    case "linkWords":
      answerIndex = linkWords[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "phrases":
      answerIndex = phrases[state.questionIndex][1].findIndex((element) => {
        return element.toLowerCase().trim() === inputFormatted;
      });
      break;
    case "verbConjugation":
      if (inputFormatted === state.conjugatedAnswer.toLowerCase()) {
        answerIndex = 1;
      } else {
        answerIndex = -1;
      }
      break;
  }

  console.log("answer index", answerIndex);
  
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
        console.log("verbs", verbs);
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
      case "linkWords":
        linkWords.splice(state.questionIndex, 1)
        break;
      case "phrases":
        phrases.splice(state.questionIndex, 1)
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
