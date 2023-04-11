let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculateTip() {
    let billAmountInputValue = billAmountElement.value;
    let percentageInputValue = percentageTipElement.value;
    if (billAmountInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageInputValue);

        let calculateTip = (percentageTip / 100) * billAmount;
        let calculatetotal = billAmount + calculateTip;

        tipAmountElement.value = calculateTip;
        totalAmountElement.value = calculatetotal;


    }
}