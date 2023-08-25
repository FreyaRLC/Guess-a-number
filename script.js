"use strict";

let max = 100;
let min = 1;
let timesGuessed = 0;

addEventListenersToButtons();

function addEventListenersToButtons() {
  console.log("Adding eventlisteners");
  document.querySelector("#start").addEventListener("click", computerGuesses);
  document.querySelector("#tooLow").addEventListener("click", tooLow);
  document.querySelector("#tooHigh").addEventListener("click", tooHigh);
}

function computerGuesses() {
  console.log("Computer guessing");
  const midpoint = Math.floor((min + max) / 2);
  timesGuessed++;

  document.querySelector("#guessNumber").textContent = timesGuessed;
  document.querySelector(
    "#computersGuess"
  ).textContent = `Was your number: ${midpoint}?`;
}

function showGuess() {}

function tooHigh() {
  max = Math.floor((min + max) / 2) - 1;
  computerGuesses();
}

function tooLow() {
  min = Math.floor((min + max) / 2) + 1;
  computerGuesses();
}
