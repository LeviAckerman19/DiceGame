var randomNumber;
randomNumber = Math.floor(Math.random()*6)+1 ;
var randomDiceImage = "dice"+ randomNumber + ".png" ; // using cancatenation;
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

var randomNumber1;
randomNumber1= Math.floor(Math.random()*6) +1;
// var randomDiceImage1 = "dice" + randomNumber1+ ".png";
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource1);


 if (randomNumber > randomNumber1) {
   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
 }
 else if (randomNumber1 > randomNumber) {
   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 }
 else {
   document.querySelector("h1").innerHTML = "Draw!";
 }
