// Done by Carlos Amaral (2021/04/30)

// 1st Dice

// Generate a random Number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Make the dice images change
// 1st dice
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// 2nd dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// Display a winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!!";
}
else {
    document.querySelector("h2").innerHTML = "It's a tie!";
}
