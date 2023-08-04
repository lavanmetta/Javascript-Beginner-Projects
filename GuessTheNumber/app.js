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
randomNumber.textContent = randomInteger;

// reset

function resetFunction() {
  inputNums.value = "";
  randomInteger = randomNumberGenerator();
  randomNumber.textContent = randomInteger;
  
}

// Checking

let tooLow = "Too Low";
let tooHigh = "Too High";
let correct = "Guessed Number correct";

let heighScore = 1;
let normalScore = 1;

function checkingResults() {
  let inputInteger = inputNums.value;
  if (inputInteger > randomInteger) {
    instructorHeading.textContent = tooHigh;
  } else if (inputInteger < randomInteger) {
    instructorHeading.textContent = tooLow;
  } else {
    instructorHeading.textContent = correct;
    document.querySelector('.main-container').classList.add('bg')
    score.textContent = normalScore++;
    if (normalScore < heighScore) {
      heighScore = normalScore;
    }
    resetFunction();
  }
}

checkResults.addEventListener("click", function () {
  checkingResults();
});

resetButton.addEventListener("click", function () {
    resetFunction()
    score.textContent = 0
    instructorHeading.textContent = 'Guessing Number...'
});
