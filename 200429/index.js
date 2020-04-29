
// h1
function redBg() {
    this.style.backgroundColor = "red";
}
function whiteBg() {
    this.style.backgroundColor = "white";
}
// STOP Listening
const stop = () => {
    header.removeEventListener("mouseover", redBg);
    header.removeEventListener("mouseleave", whiteBg);
}
// START Listening
const start = () => {
    header.addEventListener("mouseover", redBg);
    header.addEventListener("mouseleave", whiteBg);
}
// h1
let header = document.querySelector("h1");
header.addEventListener("mouseover", redBg);
header.addEventListener("mouseleave", whiteBg);
// header.removeEventListener("mouseover", function () {
//     this.style.backgroundColor = "red";
// });


// pop up message
function newUser(){
    result.innerHTML += "Hi, this is you <br>"
}
function windowLoad() {
    // setInterval(newUser, 1000)
    // alert("Hi new person");
}
window.addEventListener("load", windowLoad);


// form
let form = document.querySelector("form");
form.addEventListener("submit", () => {
    alert("Thanks for your feedback");
});
form.addEventListener("reset", () => {
    alert("Your input has been cleared out");
});
function changeColor() {
    event.preventDefault();
    form.style.backgroundColor = "pink"
}