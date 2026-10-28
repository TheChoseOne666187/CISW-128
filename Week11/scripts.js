console.log("linked")

document.getElementById("myBtn").addEventListener("click", displayDate);

const all = document.getElementById("a-z");

// Let k listen for keydown
k.addEventListener("keydown", function (event) {
  document.getElementById("demo").innerHTML = "You pressed: " + event.key;
});
const in01 = document.getElementById("in01");

// Let in01 listen for keydown
in01.addEventListener("keydown", function (event) {
// If event.code was "enter", then display text
  if (event.code === "Enter") {
    document.getElementById("demo").innerHTML = "Enter was pressed!";
  }
});


