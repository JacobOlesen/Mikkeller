// ----------- Filter funktion på menu siden - Jacob ---------- //
// https://www.w3schools.com/howto/howto_js_filter_elements.asp //

/* En meget kompleks kode vi har været meget glade for at få implementeret på vores side.
  Det var ikke lige til, men vi fik det til at fungere som vi gerne ville have det til.
  Vi har forsøgt at sætte os grundigt ind i koden og forstår de grundlæggende elementer */
filterSelection("all") //denne linje sørger for at alle elementerne bliver vist når siden loades //
function filterSelection(c) { // her får filterselection parameteret "c"//
  var x, i; // her bliver der erklæret to variabler x og i //
  x = document.getElementsByClassName("filterDiv"); // Her finder den alle de elementer der har class="filterDiv" //
  if (c == "all") c = ""; // her tjekker den om "c" viser "all", hvis dette er tilfældet bliver den til en tom string //
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show"); // Sørger for at "show" bliver fjernet fra det viste element, så det næste element kan blive aktiveret //
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); // her tjekker den om det valgte element har værdien "c", hvis dette er tilfældet bliver "show" class'en tilføjet til elementet ved brug at w3addclass
  }
}

function w3AddClass(element, name) { // Dette er funktionen som tilføjer en class til et element på siden //
  var i, arr1, arr2;
  arr1 = element.className.split(" "); 
  arr2 = name.split(" "); 
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) { // Dette er funktionen som fjerner en class fra et element på siden
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



// denne del tilføjer en aktiv class, som gør at den kanp som er aktiv bliver highlightet på den måde man styler den til
var btnContainer = document.getElementById("myBtnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("aktiv");
    current[0].className = current[0].className.replace(" aktiv", "");
    this.className += " aktiv";
  });
}

/* AOS - Eksternt scrolling bibliotek */
AOS.init();




// Kilde: ChatGPT - FAQ
// Der startes med at blive lavet en variabel som linkes til class="eventOverskrift" i html
var questions = document.getElementsByClassName('eventOverskrift');

// Herefter bruges addEventListener 'click'
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
    var dropDown = this.nextElementSibling;
    var arrow = this.querySelector('.arrow');

    // Nu bruges if statementet til at vise dropDown og rotere pilen
    if (dropDown.style.display === 'block') {
      dropDown.style.display = 'none';
      arrow.classList.remove('rotate');
    } 
    else { // Nu bruges else statementet til at det omvente af if statmentet oven over
      dropDown.style.display = 'block';
      arrow.classList.add('rotate');
    }
  });
}




// ----------- Sektion Find os - pågældende dato bliver bremhævet  - Daniel ---------- //

//Kilde: https://stackoverflow.com/questions/4701940/change-background-with-css-on-particular-date

//bruger koden new Date() til at hente data, som repræsenterer den aktuelle dato og tid.
let d = new Date();

//Derefter bruges getDay() metoden på dette objekt til at hente den aktuelle ugedag (hvor 0 = søndag, 1 = mandag, 2 = tirsdag, og så videre).
let day = d.getDay()

//Hvis getDay() er 1, får mandag ændret fontWeight til bold, det samme sker med alle andre ugedage
// === kaldes også "strict equality" fordi det ikke kun sammenligner værdierne, men også typerne af de sammenlignede værdier. 
if (day === 1) {
  document.getElementById("man").style.fontFamily = "nitti-typewriter-cameo"; //Referer til id="man" som er kolonnen med ugedagene
  document.getElementById("man-tid").style.fontFamily = "nitti-typewriter-cameo";//Referer til id="man-tid" som er kolonnen med klokkeslettet
}
if (day === 2) {
  document.getElementById("tir").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("tir-tid").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 3) {
  document.getElementById("ons").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("ons-tid").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 4) {
  document.getElementById("tor").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("tor-tid").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 5) {
  document.getElementById("fre").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("fre-tid").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 6) {
  document.getElementById("lør").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("lør-tid").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 0) {
  document.getElementById("søn").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("søn-tid").style.fontFamily = "nitti-typewriter-cameo";
}


// Java til nedtælling 

// Set the date we're counting down to
var countDownDate = new Date("June 26, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// Java til "konkurrence"

// The modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//---------MODAL------Tilmeld Nyhedsbrev-------------------------------------------

// Først henter koden elementet med ID'et "myModal" og gemmer det i en variabel (var) med navnet "modal".
var modal = document.getElementById("myModal");

// Derefter hentes knappen med ID'et "myBtn" og gemmes i en variabel (var) med navnet "btn".
var btn = document.getElementById("myBtn");

// Til sidst hentes et HTML-element med klassenavnet "close", og det første element gemmes i en variabel med navnet "span".
var span = document.getElementsByClassName("close")[0];

// Når brugeren klikker på knappen, som er blevet gemt i variablen "btn", bliver modal vinduet åbnet, og dens stil attribut ændres til "block". Indtil da har .modal display: none;.
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brugeren klikker på X-knappen i modal vinduet, som er gemt i variablen "span", lukker vinduet og .modal får display: none;.
span.onclick = function() {
  modal.style.display = "none";
}

// Hvis brugeren klikker et hvilket som helst sted uden for modal vinduet, vil det også lukke, da koden lytter efter klik på vinduet (window.onclick) og lukker modal vinduet, hvis klikket blev udført på elementet med ID'et "myModal".
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// ----------- Footer - Allert når man har trykket på knap - Daniel ---------- //

const button = document.getElementById('tilmeld'); //Henter Id fra HTML

button.addEventListener('click', function() { //Når knappen bliver klikket popper en allert op, til info
  alert('Du er nu tilmeldt vores nyhedsbrev :))');
});



















