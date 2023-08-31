<p>
The code starts by getting some important elements from the web page, like the input field where you type your numbers and operators, and some buttons that you click on to enter the numbers and operators.

Next, there's a loop that listens for clicks on the number buttons. When you click on one of these buttons, the code adds the corresponding number to the input field.

There's also another loop that listens for clicks on the operator buttons. When you click on one of these buttons, the code figures out what the last character in the input field is. If the last character is already an operator, the code replaces it with the new operator you just clicked. If the input field is empty, the code tells you to enter a number first. Otherwise, it just adds the new operator to the input field.

The most important part of the code is the part that listens for clicks on the equals button. When you click on this button, the code takes the string of numbers and operators from the input field and splits them into separate arrays. Then, it does a bunch of calculations with those arrays to get the answer to the math problem you entered. Finally, the code displays the answer in the input field.

Lastly, there's a "clear" button that you can click to erase everything from the input field and start over with a new math problem.


I am writing this for easy understanding.for more details check app.js file

thanks to CodePen
</p>

<img src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1677349506/calc_zfrrbr.png" alt="calcs">