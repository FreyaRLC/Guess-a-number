"use strict";

let randomNumber;
let max = 100;
let userGuess;

document.querySelector(".myButton").addEventListener("click", userGuesses);

generateNumber();
function generateNumber() {
  randomNumber = Math.floor(Math.random() * max) + 1;
  showNumber();
}

function showNumber() {
  console.log(randomNumber);
  // document.querySelector(".max").textContent = max;
  // document.querySelector(".randomNumber").textContent = randomNumber;
}

function userGuesses() {
  // console.log("userGuesses");
  userGuess = document.getElementById("userNumber").value;
  determineResult();
}

function determineResult() {
  if (userGuess < randomNumber) {
    // console.log("You guessed too low");
    document.querySelector(".result").textContent = `Try again, your guess was too low.`;
    document.querySelector(".result").style.color = "red";
  } else if (userGuess > randomNumber) {
    // console.log("You guessed too high");
    document.querySelector(".result").textContent = `Shucks! Your guess was too high.`;
    document.querySelector(".result").style.color = "red";
  } else {
    console.log("Congratulations, you guessed right!");
    document.querySelector(".result").textContent = `Wohoo! You guessed correctly!`;
    document.querySelector(".result").style.color = "green";
  }
}
