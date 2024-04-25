// CALCULATOR --THERE ARE (ADD, SUBTRACT, MULTIPLY,DIVIDE,)
function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    displayResult(result);
}
function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    displayResult(result);
}
function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    displayResult(result);
}
function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        displayResult("Cannot divide by zero");
    }
    else {
        var result = num1 / num2;
        displayResult(result);
    }
}
function displayResult(value) {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.textContent = value.toString();
    }
}
// CALCULATOR END HERE
