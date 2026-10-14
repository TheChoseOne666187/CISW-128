// What is a function? A function is a block of code that performs a specific task. It can take inputs, called parameters, and can return an output. Functions help to organize code, make it reusable, and improve readability.
// reusable block of code that can be called multiple times with different inputs to perform a specific task. Functions can be defined using the function keyword, followed by a name, parameters in parentheses, and a block of code enclosed in curly braces.

function greetUser() {
    console.log("Hello, User!");
}
greetUser(); // Calling the function to execute its code

// Function stucture
//  Keyword, function: tells JavaScript that we are defining a function
//  Function name: a descriptive name for the function that indicates what it does
//  Parameters: optional inputs that the function can accept, enclosed in parentheses
//  Function body: the block of code that defines what the function does, enclosed in curly braces

// Parameters and Arguments
// Parameters are variables that are defined in the function declaration and act as placeholders for the values that will be passed to the function when it is called. Arguments are the actual values that are passed to the function when it is called.


function greetUserWithName(name) {
    console.log("Hello, " + name + "!");
}
greetUserWithName("Mac Daddy"); // Calling the function with an argument



// function that will take two numbers as parameters and return their sum
function addNumbers(num1, num2) {
    return num1 + num2;
}

let total = addNumbers(4, 6); // Calling the function with two arguments
console.log(total); // Output: 10

// Return sends a value back to the place where the function was called.
//  It allows us to capture the result of the function and use it later in our code.
//  If a function does not have a return statement, it will return undefined by default.

// Return is like your function saying "Hey, I have this value for you!" and giving it back to the place where it was called.
//  It allows us to capture the result of the function and use it later in our code. If a function does not have a return statement,
//  it will return undefined by default.

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
let product = multiplyNumbers(5, 3); // Calling the function with two arguments
console.log(product); // Output: 15

// Create me a function that will count 5 by 15
function countToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }

countToN(15); // Calling the function with an argument of 15

// nested function example
function outerFunction() {
    console.log("This is the outer function.");
    
    function innerFunction() {
        console.log("This is the inner function.");
    }
    
    innerFunction();
}
console.log(outerFunction()); // Calling the outer function, which in turn calls the inner function
print("This is the end of the code snippet.");  

// greetUserWithName("Mac Daddy"); // Calling the function with an argument

function greetUserWithName(name) {
    console.log("Hello, " + name + "!");
}       
greetUserWithName("Mac Daddy"); // Calling the function with an argument