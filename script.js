//bruger koden new Date() til at hente data, som repræsenterer den aktuelle dato og tid.
const d = new Date();

//Derefter bruges getDay() metoden på dette objekt til at hente den aktuelle ugedag (hvor 0 = søndag, 1 = mandag, 2 = tirsdag, og så videre).
let day = d.getDay()
document.getElementsByClassName("dayOutput").innerHTML = day;

//Hvis getDay() er 1, får mandag ændret fontWeight til bold, det samme sker med alle andre ugedage
// === kaldes også "strict equality" fordi det ikke kun sammenligner værdierne, men også typerne af de sammenlignede værdier. 
if (day === 1) {
  document.getElementById("man").style.fontFamily = "nitti-typewriter-cameo"; //Referer til id="man" som er kolonnen med ugedagene
  document.getElementById("man1").style.fontFamily = "nitti-typewriter-cameo";//Referer til id="man1" som er kolonnen med klokkeslettet
}
if (day === 2) {
  document.getElementById("tir").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("tir1").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 3) {
  document.getElementById("ons").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("ons1").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 4) {
  document.getElementById("tor").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("tor1").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 5) {
  document.getElementById("fre").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("fre1").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 6) {
  document.getElementById("lør").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("lør1").style.fontFamily = "nitti-typewriter-cameo";
}
if (day === 0) {
  document.getElementById("søn").style.fontFamily = "nitti-typewriter-cameo";
  document.getElementById("søn1").style.fontFamily = "nitti-typewriter-cameo";
}



// Java til nedtælling 

// Set the date we're counting down to
var countDownDate = new Date("June 7, 2023 12:00:00").getTime();

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