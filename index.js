img_array = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
if (window.performance.navigation.type === 1) {
  var randomnumber1 = Math.random();
  randomnumber1 = Math.floor(randomnumber1 * img_array.length);
  var randomnumber2 = Math.random();
  randomnumber2 = Math.floor(randomnumber2 * img_array.length);
  document.querySelector(".img1").src = img_array[randomnumber1];
  document.querySelector(".img2").src = img_array[randomnumber2];

  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Its a draw!!";
  }
}
