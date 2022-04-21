function updateDisplay(number) {
    console.log(number);
    let display = document.getElementById("display");
    display.innerHTML += number;
}
function clearDisplay() {
    let display = document.getElementById("display");
    display.innerHTML = 0;
}