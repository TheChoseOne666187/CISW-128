console.log("Hello, World!");
// DOM and Basic Maniupulation
// What is the DOM?
// Document Object Model, this is how the browser represents the HTML document as a tree of objects. 
// Each element in the HTML document is represented as a node in the tree,
//  and these nodes can be manipulated using JavaScript.
// HTML elements are represented as objects in the DOM, 
// and these objects have properties and methods that can be used to manipulate them.
//  For example, you can use the innerHTML property to change the content of an element, 
// or you can use the appendChild() method to add a new element to the DOM.
// JS to change text, images, colors, and more. JS can also be used to add event listeners to elements,
//  which allows you to respond to user interactions such as clicks, mouse movements, and keyboard input.

// Change text content with JS
// We are going to findd the HTML element via it's nID attribute.
const title=document.getElementById("title");
// documnet, represents the whole webpage loaded in the browser
// .getelementById(), this is a method that allows us to find an HTML element by its ID attribute
// title, this is a variable that we are using to store the reference to the HTML element with the ID of "title"
// Now we can use the title variable to change the text content of the HTML element with the ID of "title"
// title.textContent="Hello, World! This is my first JS program!";
// Const, means that the variable title cannot be reassigned to a different value, 
// but we can still change the properties of the object that it references.
// It will always dpoint to the same HTML element in the DOM, 
// but we can change the text content of that element using the textContent property.
title.textContent="Welcome to my webpage!";
// .textcontent accesses or changes the text content of an HTML element.

// Selecting Elements
// getElements byID, Selects one element by its ID                       document.getElementById("title")
// querySleector, Selects the first element that matches a CSS selector  document.querySelector(".main")
// querySelectorAll, returns a nodelist of all matches   document.querySelectorAll("p")

// QuerySelector and QuerySelectorAll
// const mainsection=document.querySelector(".main");
// mainsection.style.backgroundColor="#f1f14f;

// // querySelectorAll
// const paragraphs=document.querySelectorAll("p");
// // Loop through all p elements and change their text
// paragraphs.forEach((para, index)=>{
//     para.textContent="This is a new paragraph " + (index + 1);
// });
// paragraphs.style.color="#ff0000";
// });

// Adding interactivity with Event Listeners
// select button
 const button=document.getElementById('toggle');
// add event listener to button
button.addEventListener('click',()=>{
   // toggle the highlight class on the title element
   document.body.classList.toggle('highlight');
});