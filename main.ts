// CALCULATOR --THERE ARE (ADD, SUBTRACT, MULTIPLY,DIVIDE,)

function add() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );
  const result = num1 + num2;
  displayResult(result);
}

function subtract() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );
  const result = num1 - num2;
  displayResult(result);
}

function multiply() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );
  const result = num1 * num2;
  displayResult(result);
}

function divide() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );

  if (num2 === 0) {
    displayResult("Cannot divide by zero");
  } else {
    const result = num1 / num2;
    displayResult(result);
  }
}

function displayResult(value: string | number) {
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.textContent = value.toString();
  }
}

// CALCULATOR END HERE
