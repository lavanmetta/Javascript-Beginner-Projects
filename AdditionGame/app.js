const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const answer = document.getElementById("answer");
const calculate = document.getElementById("calculate");
const restart = document.getElementById("restart");
const infos = document.getElementById("infos");

const randomNumberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return randomNumber;
};

restart.addEventListener("click", function () {
  const num1 = randomNumberGenerator();
  const num2 = randomNumberGenerator();
  number1.textContent = num1;
  number2.textContent = num2;
  answer.value = "";
  infos.textContent = ''
});

calculate.addEventListener("click", function () {
  const ans = answer.value
  const firstNumber = parseInt(number1.textContent);
  const secondNumber = parseInt(number2.textContent);
  const res = firstNumber + secondNumber;
  
  if (ans === "") {
    infos.textContent = "Invalid Input";
    infos.style.color = "blue";
  } else if (parseInt(ans) === res) {
    infos.textContent = "Correct Answer";
    infos.style.color = "green";
  } else {
    infos.textContent = "Wrong! Try again";
    infos.style.color = "red";
  }
});
