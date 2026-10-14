// Define Three Functions
// 1. Greet User
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser();

// 2. addNumbers()
function addNumbers(num1, num2) {
    return num1 + num2;
}

let total = addNumbers(4, 6); // Calling the function with two arguments
console.log(total);

// 3. calculateArea()   
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5, 10); // Calling the function with two arguments
console.log(area);
