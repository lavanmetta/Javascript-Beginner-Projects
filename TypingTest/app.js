const randomSentence = document.getElementById("randomSentence");
const spinner = document.getElementById("spinner");
const counter = document.getElementById("counter");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const infos = document.getElementById("infos");
const url = "https://api.quotable.io/random";

let count = 0;

let countId;

function timer() {
  countId = setInterval(function () {
    count++;
    counter.textContent = count;
  }, 1000);
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

input.addEventListener("keydown", function () {
    if (!countId) {
        timer();
      }
});

submit.addEventListener('click', function() {
    if (randomSentence.textContent === input.value) {
        infos.textContent = "Congratulations"
        clearInterval(countId)
    }
    else {
        infos.textContent = "Sorry"
    }
})
