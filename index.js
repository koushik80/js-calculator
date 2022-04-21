let trailingResult = 0;
let opertaionOptions = ['decimal', 'divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";
function updateDisplay(input) {
    let display = document.getElementById("display");

    if (display.innerHTML === "0" && opertaionOptions.indexOf(input) === -1) {
        display.innerHTML = input;
    } else if (opertaionOptions.indexOf(input) >= 0) {
        workingOperation = input;
        trailingResult = display.innerHTML;
        display.innerHTML = 0;
    } else if (input === "equals") {
        display.innerHTML = calculate(parseFloat(trailingResult),  parseFloat(display.innerHTML), workingOperation);
        trailingResult = display.innerHTML;
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
