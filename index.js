function updateDisplay(number) {
    let display = document.getElementById("display");
    if (display.innerHTML === "0") {
        display.innerHTML = number;
    } else {
        display.innerHTML += number;
        }
}
function clearDisplay() {
    let display = document.getElementById("display");
    display.innerHTML = 0;
}