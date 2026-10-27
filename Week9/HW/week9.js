// Function with no parameters
function greetUser() {
    console.log("Hello, User!");
}
greetUser(); 

// Function that accepts parameters and returns a value
function greetUserWithName(name) {
    console.log("Hello, " + name + "!");
}
greetUserWithName("Mac Daddy");

// Function that calls another function inside it(nested function call).
function addNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}  // calls multiplyNumbers()


// function that will take two numbers as parameters and return their sum
function addNumbers(num1, num2) {
    return num1 + num2;
}

let total = addNumbers(4, 6); // Calling the function with two arguments
console.log(total); // Output: 10
 
// Use a Loop Inside a Function:
// / Example ideas: generate a multiplication table, countdown, or running total.
function countdown(start) {
    for (let i = start; i >= 1; i--) {
        console.log(i);
    }
    console.log("Countdown complete!");
}

countdown(5);
  
