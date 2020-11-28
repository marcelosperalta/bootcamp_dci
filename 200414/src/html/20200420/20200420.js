
// Concepts:

// JavaScript in the browser
//      XMl, JSON, jQuery, Ajax, API

// JS Engines:
//      V8 (Chrome, Node, Edge, Opera)
//      SpiderMonkey (Firefox)
//      Chakra (Internet Explorer, Edge)

// DOM aka Document Object Module
//      DOM tree.

// Adding javascript to HTML:
//      - The `<script>` tag
//      - External JS with `<script src="...">`

// The Window object
//      (objects functions and variables) are member of window object.
//      document object is also member of the window object
//      the window object contain many Properties amd methods

// -Host object-
//      are objects supplied by a certain environment.
//      like in browser environment you will find window
//      in node.js environment you will find NodeList

// -Native object-
//      are standard built-in objects provided by Javascript.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects



// Code:

// window.alert("Hi you are here");
// let x = window.prompt("enter your name", "Ali");
// console.log(x);

function change() {
    window.document.getElementsByTagName("h1")[0].outerHTML =
      "<h6>Hi, this is me</h6>";
    let newBox = document.getElementById("main");
    console.log(newBox);
    newBox.style.backgroundColor = "red";
}

function reset() {
    window.document.getElementsByTagName("h6")[0].outerHTML =
    "<h1>Hi, this is me</h1>";
    let newBox = document.getElementById("main");
    console.log(newBox);
    newBox.style.backgroundColor = "white";
}

const multiply = () => {
  let userNum = document.querySelector("#num").value;
  //   console.log(userNum);
  let x = "";
  for (let i = 0; i <= 10; i++) {
      if (i < 10) {
          x += `&nbsp;&nbsp;${i} * ${userNum} = ${i * userNum} <br>`;
      } else
          x += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  document.querySelector(".result").innerHTML = x;
};

// Exercise solution v1
document.getElementById('Guess').onclick = function guess() {
let max = 10;
let randomNum = Math.floor(Math.random() * Math.floor(max) + 1);
console.log(randomNum);
let userInput = window.prompt("Guess a number between 1 and 10", ""); 
let attempts = 1;
    while (attempts < 3) {
        if (userInput == randomNum) {
            return window.alert(`"Success", the number was ${userInput}! Attempts: ${attempts}`);
        } 
        attempts++;
        userInput = window.prompt("Nope, sorry! Try again!");
    }
    if (userInput == randomNum) {
            return window.alert(`"Success", the number was ${userInput}! Attempts: ${attempts}`);
        } else {
            return window.alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNum}!`);
    }
}

// Exercise solution v2
document.getElementById('Guess2').onclick = function guess2() {
    
  let max = 10;
  let randomNum = Math.floor(Math.random() * Math.floor(max) + 1);
  console.log(randomNum);
  let attempts = 1;
  var userInput = window.prompt("Guess a number between 1 and 10 (v2)", "")


  while (attempts != 3) {
      if (randomNum == userInput) {
               return window.alert(`"Success", the number was ${userInput}! Attempts: ${attempts} (v2)`);
      } else if (randomNum != userInput) {
          userInput = window.prompt("Nope, sorry! Try again! (v2)");
          attempts++;
      }
  }

  window.alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNum} (v2)!`);
}