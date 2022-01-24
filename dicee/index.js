var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

var img1 = document.querySelector('.img1');
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
var img2 = document.querySelector('.img2');
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var head1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    head1.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    head1.innerHTML = "Draw!";
} else {
    head1.innerHTML = "Player 2 Wins! 🚩";
}