// This greeting function is based on the Week 9 Lab and reuses the supplied name.
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

// This Lab function returns the sum so it can be reused in the calculations below.
function addNumbers(num1, num2) {
  return num1 + num2;
}

// This Lab function returns the area from the prompted length and width.
function calculateArea(length, width) {
  return length * width;
}

// This no-parameter function gathers input, checks it, and runs the Lab functions.
function runHomework() {
  const name = prompt("What is your name?");
  const firstInput = prompt("Enter the first number to add:");
  const secondInput = prompt("Enter the second number to add:");
  const lengthInput = prompt("Enter the rectangle length:");
  const widthInput = prompt("Enter the rectangle width:");
  const limitInput = prompt("Enter a whole number from 1 to 100 for the running total:");

  if (
    name === null ||
    firstInput === null ||
    secondInput === null ||
    lengthInput === null ||
    widthInput === null ||
    limitInput === null
  ) {
    console.log("The program was canceled before all values were entered.");
    return;
  }

  const firstNumber = Number(firstInput);
  const secondNumber = Number(secondInput);
  const length = Number(lengthInput);
  const width = Number(widthInput);
  const limit = Number(limitInput);

  if (
    name.trim() === "" ||
    firstInput.trim() === "" ||
    secondInput.trim() === "" ||
    lengthInput.trim() === "" ||
    widthInput.trim() === "" ||
    limitInput.trim() === "" ||
    !Number.isFinite(firstNumber) ||
    !Number.isFinite(secondNumber) ||
    !Number.isFinite(length) ||
    !Number.isFinite(width) ||
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > 100
  ) {
    console.log("Enter a name, valid numbers, and a whole-number limit from 1 to 100.");
    return;
  }

  greetUser(name.trim());

  // These calls are nested inside console.log so the returned values are displayed.
  console.log("Sum:", addNumbers(firstNumber, secondNumber));
  console.log("Rectangle area:", calculateArea(length, width));

  // Reuse addNumbers in a loop to calculate and display a running total.
  let runningTotal = 0;
  for (let number = 1; number <= limit; number += 1) {
    runningTotal = addNumbers(runningTotal, number);
    console.log("Running total through " + number + ":", runningTotal);
  }
}

runHomework();
