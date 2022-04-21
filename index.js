let trailingResult = 0;
function updateDisplay(input) {
    let display = document.getElementById("display");

    if (display.innerHTML === "0") {
        display.innerHTML = input;
    } else if (input === "add") {
        trailingResult = display.innerHTML
        display.innerHTML = 0;
    } else if (input === "equals") {
        display.innerHTML = parseFloat(trailingResult) + parseFloat(display.innerHTML);
        trailingResult = display.innerHTML;
    } else {
        display.innerHTML += input;
        }
}
function clearDisplay() {
    let display = document.getElementById("display");
    display.innerHTML = 0;
}