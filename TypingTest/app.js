const randomSentence = document.getElementById("randomSentence");
const spinner = document.getElementById("spinner");
const counter = document.getElementById("counter");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const infos = document.getElementById("infos");
const myElement = document.getElementById("myElement");
const url = "https://api.quotable.io/random";

let count = 0;

let countId;

function timer() {
  countId = setInterval(function () {
    count++;
    counter.textContent = count;
  }, 1000);
}

function startTimer() {
  timer();
}

function typingTest() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      spinner.classList.add("remove");
      randomSentence.textContent = data.content;
    });
}
typingTest();

input.addEventListener("keydown", () => {
  if (!countId) {
    startTimer();
  }
});

submit.addEventListener("click", function () {
  if (randomSentence.textContent === input.value) {
    infos.textContent = "Congratulations You typed in " + count + " seconds";
    infos.style.color = "green";
    clearInterval(countId);
  } else {
    infos.textContent = "Sentence Does Not Matched";
    infos.style.color = "red";
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  setInterval(timer());
  typingTest();
  input.value = "";
  infos.textContent = "";
});

myElement.addEventListener("copy", function (event) {
  event.preventDefault();
  event.clipboardData.setData("text/plain", "");
});
