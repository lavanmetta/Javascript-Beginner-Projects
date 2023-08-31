const  input = document.getElementById('input');
const  number = document.querySelectorAll('.numbers div');
const  operator = document.querySelectorAll('.operators div'); 
const  result = document.getElementById('result'); 
const  clear = document.getElementById('clear');




let resultDisplayed = false; 
// click handlers
for (let i = 0; i < number.length; i++) {

    /* Adding an event listener to the number buttons. */
    number[i].addEventListener("click", function(e) {

    /* Taking the last character of the string and storing it in a variable. */
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    // console.log("current" + " " +currentString)
    // console.log("last char" + " " + lastChar)
    
  
    if (resultDisplayed === false) {

        /* Adding the value of the button clicked to the input field. */
        input.innerHTML += e.target.innerHTML;

    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
    
        resultDisplayed = false;
        input.innerHTML += e.target.innerHTML;

    } else {

        resultDisplayed = false;
        input.innerHTML = "";
        input.innerHTML += e.target.innerHTML;
    }

    });
}

// click operators
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {
    
    /* Taking the last character of the string and storing it in a variable. */
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    //  console.log("currentOperator : " + " " +currentString)
    //  console.log("lastCharOperator :" + " " + lastChar)
    
  /* This is checking if the last character of the string is an operator. */
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {

        /* Taking the current string and removing the 
        last character and replacing it with the new character. */
        var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
        console.log(currentString.substring(currentString.length - 1));
        input.innerHTML = newString;

    } else if (currentString.length == 0) {
        alert("Please Enter Number First")

    } else {
        input.innerHTML += e.target.innerHTML;
    }
    
    });
}


result.addEventListener("click", function() {
    let inputString = input.innerHTML;

   /* The below code is splitting the inputString into an array of numbers. */
    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    
   /* The below code is replacing all the numbers and the decimal 
   point with nothing and then splitting the string into an array. */
    let operators = inputString.replace(/[0-9]|\./g, "").split("");
  
    // console.log("inputString :"+ " " + inputString);
    // console.log("operators :"+ " " +operators);
    // console.log("numbers :"+ " " +numbers);
    // console.log("````````````````````````````````````");

  
  /* The below code is checking to see if the operator "÷" is in the operators array. */
    let divide = operators.indexOf("÷");
   
   /* Dividing the numbers in the array. */
    while (divide != -1) {
      /* Dividing the first number in the array by the second number in the array. */
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
     /* Removing the operator from the array. */
      operators.splice(divide, 1);
     /* Checking to see if the operator "÷" is in the operators array. */
      divide = operators.indexOf("÷");
    }



 /* The below code is a while loop that is checking for the index of the multiply operator. If the
 multiply operator is found, it will multiply the two numbers that are next to it and replace the
 two numbers and the multiply operator with the product. */
  
    let multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
  


  /* Subtracting the numbers in the array. */
    let subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  

  /* The below code is finding the index of the "+" operator in the operators array. If the index is
  not -1, then it will add the two numbers in the numbers array at the index and the index + 1. It
  will then replace the two numbers with the sum of the two numbers. It will then remove the "+"
  operator from the operators array. It will then find the index of the "+" operator again. If the
  index is not -1, then it will repeat the process. */
    
    let add = operators.indexOf("+");
    while (add != -1) {
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
  
   /* Taking the first number in the numbers array and displaying it in the input field. */
    input.innerHTML = numbers[0]; 
  
    resultDisplayed = true;
  });
  

/* Clearing the input field. */
  clear.addEventListener("click", function() {
    input.innerHTML = "";
  })