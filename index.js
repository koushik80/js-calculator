let trailingResult = 0;
let opertaionOptions = ['divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";
function updateDisplay(input) {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");

    if (display.innerHTML === "0" && opertaionOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0.";
        } else {
            display.innerHTML = input;
        }
    } else if (opertaionOptions.indexOf(input) >= 0) {

        if (workingOperation === "") {
            //Dealing without an operand
            workingOperation = input;
            trailingResult = display.innerHTML;
            display.innerHTML = 0;
        } else if (trailingResult = display.innerHTML) {
          
        } else {
            //Dealing with a set operand
            trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
            secondaryDisplay.innerHTML = trailingResult;
            display.innerHTML = 0;
            workingOperation = input;
        }
    } else if (input === "equals") {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = display.innerHTML;
        workingOperation = "";
    } else if (input === "decimal") {
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }
    } else {
        display.innerHTML += input;
    }
}
    function clearDisplay() {
        let display = document.getElementById("display");
        display.innerHTML = 0;
    }

    function calculate(firstNumber, secondNumber, operation) {
        let result;
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        switch (operation) {
            case "add":
                result = firstNumber + secondNumber;
                break;
            case "subtract":
                result = firstNumber - secondNumber;
                break;
            case "multiply":
                result = firstNumber * secondNumber;
                break;
            case "divide":
                result = firstNumber / secondNumber;
                break;
            default:
        }
        return result.toString();
    }

