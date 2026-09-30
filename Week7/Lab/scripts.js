// // comparison operators
// console.log(5 > 3);     
// // document.body.innerHTML = 5 > 3; // true
// console.log(5 < 3);     
// // document.body.innerHTML = 5 < 3; // false


// why we use loops
// loops are used to repeat a block of code multiple times until a certain condition is met. 
// This helps to avoid writing the same code multiple times and makes the code more efficient and easier to maintain.   

// the while loop
// while (condition) {
//   // code to run repeatedly if condition is true
// }
// infinite loops, make sure something in the loop changes the condition to false, otherwise it will run forever and crash your program.

// // basic program is going to count from 1 to 5 using a while loop
// let count = 1;
// while (count <= 10) {
//   console.log("count is: " + count);
//   count++; // increment to avoid infinite loop
// }

// FOR LOOP
// for(initialization; condition; final-expression) {
//   // code to run repeatedly if condition is true
// }   
// for(let i = 1; i <= 5; i++) {
//   console.log("i is: " + i);
// }
// let i=1;
// while(i <= 5) {
//   console.log("i is: " + i);
//   i++;
// }
// Why FOR is cleaner than WHILE; easier to read and understand, less chance of errors, more concise.
// The for loop is often considered cleaner than the while loop because it consolidates the initialization, condition, and increment/decrement in one line, making it easier to read and understand. In contrast, the while loop separates these components, which can lead to more verbose code and potential errors if the increment/decrement is forgotten or misplaced.

// program the lets the user pick what number to count to
// let num=Number(prompt("Enter a number:"));
// for(let i=1; i<=num; i++) {
//   console.log("i is: " + i);
// }

// // classic triangle loop patterns
// let triangle= "";
// for(let line=1; line<=7; line++) {
//   triangle += "#";
//   console.log(triangle);
// }
