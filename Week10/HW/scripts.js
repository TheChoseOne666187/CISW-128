console.log("DOM HW loaded");

const title = document.getElementById("title");
title.textContent = "Optical Illusions are Fun!";

const intro = document.querySelector(".intro");
intro.textContent = "Optical Illusions — Powered by JavaScript";"";


const mainSection = document.getElementById("main");
mainSection.style.backgroundColor = "#ce7e05";

const image = document.getElementById("image");
const imageOne = "https://68.media.tumblr.com/dfba522bc67a735edd3e208c16770570/tumblr_ny61t25EDD1ro6x12o1_500.jpg";
const imageTwo = "https://i.pinimg.com/736x/eb/20/c2/eb20c2ca46e302b96ce255c72d5b0272.jpg";
let imageSwapped = false;

const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
  mainSection.classList.toggle("dark");
});

const swapButton = document.getElementById("swap");
swapButton.addEventListener("click", () => {
  image.src = imageSwapped ? imageOne : imageTwo;
  image.alt = imageSwapped ? "Optical illusion" : "Alternative optical illusion";
  imageSwapped = !imageSwapped;
});