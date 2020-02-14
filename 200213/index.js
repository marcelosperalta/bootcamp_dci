
// errors

// try...catch     // throw

try {
  console.log("Hi his is trying phase");
  cool()
  console.log("2nd phase");                 // if there is an error before this line, this part will never run
} catch (err) {
  console.log("This error is" + err)
}

console.log(``);

let userName = "";
try {
  console.log("Hi his is trying phase");
  if (userName == "") throw " Sorry something went wrong ";
  console.log("2nd phase");
} catch (err) {
  console.log("This error is" + err)
} finally {
  console.log(`This will always run`);
}

console.log(``);


// call a function several times

function display () {
  console.log("Hi this is a cool function")
}
for (let i = 0; i < 5; i++) {display()}

console.log(``);

(function manyTimesCalledFunction(num){
  display();
  if (num > 1) manyTimesCalledFunction (num -1);
})(5);

console.log(``);

function yourFunction() {
    console.log("hi");
}
[1, 2, 3, 4].map(() => yourFunction());

console.log(``);

// setTimeout()

function print() {
  console.log("Hi I am JS");
}
const timerPrint = setTimeout(print, 500);

const timerDisplay = setTimeout(() => console.log("Cool thats you have waited me"), 1000);
//clearTimeout(timerDisplay);


// exercises

// --------------------------------------------------------------------------------
// 13.02.2020 - 01
// Fido says...
// In the following code, we want fido to bark. Instead, we get an error. Why?
/*
class Dog {
  constructor(name) {
    this.name = name;
  }
}
Dog.bark = function() {
  console.log(`${this.name} says woof`);
};
let fido = new Dog("fido");
fido.bark();
*/
// Edit the code to make fido bark.

class Dog {
    constructor(name) {
      this.name = name;
  }
  bark() {
    console.log(`${this.name} says woof`);
  }
}
let fido = new Dog("fido");
fido.bark();
