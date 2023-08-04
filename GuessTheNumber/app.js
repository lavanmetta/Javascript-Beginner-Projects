const resetButton = document.getElementById("resetButton");
const randomNumber = document.getElementById("randomNumber");
const checkResults = document.getElementById("checkResults");
const instructorHeading = document.getElementById("instructorHeading");
const score = document.getElementById("score");
const heighestScore = document.getElementById("heighestScore");
const inputNums = document.getElementById("inputNums");
// Random Number generation

function randomNumberGenerator() {
  const randomNum = Math.ceil(Math.random() * 20);
  return randomNum;
}
let randomInteger = randomNumberGenerator();

// reset

function resetFunction() {
  inputNums.value = "";
  randomInteger = randomNumberGenerator();
}

// Checking

let tooLow = "Too Low 👇";
let tooHigh = "Too High 👆";
let correct = "Yahooo! Correct 🥳😎";

let heighScore = parseInt(localStorage.getItem("score")) || 0;
console.log(heighScore);
let normalScore = 0;

function checkingResults() {
  let inputInteger = inputNums.value;
  if (inputInteger > randomInteger) {
    instructorHeading.textContent = tooHigh;
  } else if (inputInteger < randomInteger) {
    instructorHeading.textContent = tooLow;
  } else {
    instructorHeading.textContent = correct;
    document.querySelector(".main-container").classList.add("bg");
    normalScore += 1;
    score.textContent = normalScore;
    heighestScore.textContent = normalScore;
      // Update and store the heighScore in localStorage
      if (normalScore > heighScore) {
        heighScore = normalScore;
        localStorage.setItem("score", heighScore.toString());
      }
    

    resetFunction();
  }
}



checkResults.addEventListener("click", function () {
  checkingResults();
});

resetButton.addEventListener("click", function () {
  resetFunction();
  score.textContent = 0;
  instructorHeading.textContent = "Guessing Number...";
  localStorage.removeItem("score");
});

const savedScore = localStorage.getItem("score");
if (savedScore) {
  heighestScore.textContent = parseInt(savedScore);
}
