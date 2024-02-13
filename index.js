var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice png 1-6
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-6
var image1 = document.querySelector("img").setAttribute("src", randomImageSource); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png-6
var image2 = document.querySelector("img.img2").setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👾Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "👾Player 2 Wins!";
    }
else {
    document.querySelector("h1").innerHTML = "Draw!";

}