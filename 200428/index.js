// Events:
// User Events (interaction) and Browser Events (loading, etc...)

// Listening:
// Higher order functions aka functions that accept function (callbacks)

let divText = document.querySelector(".text");
const print = () => {
    divText.innerText = `Hi, I am "onclick" from HTML`;
}
let btn = document.getElementById("more");
btn.onclick = function () {
    divText.innerText = `Hi, I am "onclick" method from JS`;
}
// or
// let divText = document.querySelector(".text");
// const print = () => {
//     divText.innerText += `Hi, I am "onclick" from HTML <b>`;
// }
// let btn = document.getElementById("more");
// btn.onclick = function () {
//     divText.innerText += `Hi, I am "onclick" method from JS <b>`;
// }

// - Listening to user actions
// "EventTarget.addEventListener(<namespace>, <callback>)"

// - Mouse Events:
// "click", "mouseenter", "mouseleave", ...
function myFunction() {
    header.style.backgroundColor = "white";
}
let header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "red";
});
header.addEventListener("mouseleave", myFunction);


// - Keyboard Events:
// "keydown", "keyup", ...
function keyUpFunction(e) {
    this.style.backgroundColor = "pink";
    console.log(e);
    if (e.code == "KeyP") alert("You are cool");
    // if (e.code == "Enter") addToList(); // to add to the "To-do list" project
}
function keyDownFunction(e) {
    this.style.backgroundColor = "yellow";
}
function keyPressFunction(e) {
    this.style.backgroundColor = "white";
}
let userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keypress", keyPressFunction); //*kepress
//*keypress = if you do not see the effect, try to press "crtl" or "alt"