// Array of Qoutes 

var qoutes = [
{ qoute: "Horsepower, horsepower, all this Polo on, I got horsepower", source: "2 Chainz",
{ qoute :"She got a big booty, So I call her big booty", source: "2 Chainz"
{ qoute :"Weezy F. Baby and the 'F' is for phenomenal.", source: "Lil Wayne"
{ qoute :"I'm an animal/Half man, half mammal.", source: "Jay Z"
{ qoute :"Girl you're hot and cold. That makes you warm.", source: "Tyga"
{ qoute :"If cops pull up, I put that crack in my crack", source: "Young Thug"

];

// Array of BG Images
var images = [];

// Decleration For Button
var randomQoute;
var randomImage;
var randomOut;

function getRandomNumber () {
    randomNumber = Math.floor( Math.random() * quotes.length);
    return quotes[randomNumber]; 

function buildImage() {
  var img = document.createElement('img');
  img.src = images[index];
  document.getElementById('content').style.backgroundImage = (img);
}
