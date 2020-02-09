
// loops review
// https://en.wikipedia.org/wiki/For_loop

for (let i = 0; i <= 10; i++) {         // for (A, B, C)
      // i = 0; 0 <= 10; i = 0 + 1
  let result = i * 3;                   // D
  console.log(`${i} * 3 = ${result}`)
}


// functions inside functions

console.log(`
functions inside functions:
`);

function main (num, num2) {
// outer function
  function second (n) {
  // inner function
      return n * n;
  }
  return second(num) + second(num2);
}
console.log(main(3,4));


// nested scopes: Accessing outer global variables

console.log(`
nested scopes: Accessing outer global variables:
`);

console.log(`
example 1:
`);

const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = num => {
      big = false;
      console.log(big + " innerFunction");
      return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3,4));

console.log(`
example 2:
`);

var nice = true;
const outerFunction2 = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = num => {
      big = false;
      nice = false;
      console.log(big + " innerFunction");
      return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(nice);
console.log(outerFunction2(3,4));
console.log(nice);


// closure

console.log(`
closure:
`);

var number = 10;
function fun() {
  return number + number;
}
console.log(fun());
console.log(number);

var counter = 0;        // insecure variable
function add (){
  counter += 1;
}
add(); // 1
add(); // 2
add(); // 3
console.log(counter);

//or

var counter2 = 0;       // insecure variable
function add2 (){
  counter2++;
}
add2(); // 1
add2(); // 2
add2(); // 3
console.log(counter2);

//or

const add3 = (() => {   // invoking == calling
  var counter = 0;    // secure variable
  return () => {
      counter++;
      return counter; 
  };
})();   // () == invoking
add3(); // 1
add3(); // 2
add3(); // 3
console.log(add3());
console.log(add3());

//or

(function display() {
  console.log("Hi")
})();

(function display() {
  let x = 0;
  console.log("Hi")
  return () => {
      x++;
      return x;
};
})();


// SIAF

(function () {            // Self Invoking Anonymous Function
  let x = 0;
  console.log("Hi")
})();                     // () == invoking


// IIFE

const sum = ((x, y) => {  // Immediately-Invoked Function Expression
  return x + y;
})(4, 5);
console.log(sum);


// exercises

// --------------------------------------------------------------------------------
// 03.02.2020 - 01
// Write a function add that uses a closure that performs
// addition on arguments in two separate function calls.
// e.g.
// add(2)(3)

console.log(`
Addition:
`);

function addClosure (a) {
  return function (b) {
      return a + b;
  };
}
console.log(addClosure(2)(3)); // (a) = 2 // (b) = 3

// --------------------------------------------------------------------------------
// 03.02.2020 - 02
// Write a function multiplier that uses a closure to perform multiplication.
// However, the outer function should be stored in a variable which is then called.

console.log(`
Multiplication:
`);

function multiplier(num) {        // outer function
  
  return x => x * num;          // inner function
}
const times = multiplier(2);      // num = 2
console.log(times(5));            // x   = 5 // 2 * 5 -> // expected output: 10
console.log(times(6));            // x   = 6 // 2 * 6 -> // expected output: 12
//or
const times2 = multiplier(2)(5);  // num = 2 // x = 5 // 2 * 5 -> // expected output: 10
console.log(times2);


// Self Invoking vs. Global Variable

var all = 3;
(function () {
  var all = "Hi";
  console.log(all);             // expected output: Hi
})();
console.log(all);                 // expected output: 3


// exercise

// --------------------------------------------------------------------------------
// 03.02.2020 - 03
// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message
// ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month
// and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

console.log(`
Money saved:
`);

(function moneySaved (age, retirAge, montWage, percSaves) {

  if (age >= retirAge) {

      console.log("You’re already retired!");

  } else {
      
      let yearsToRetire      = retirAge - age;
      let newPercSaves       = percSaves * 0.01;
      let savedMoneyPerMonth = montWage * newPercSaves;
      let savedMoneyPerYear  = montWage * newPercSaves * 12;

      let result = (retirAge - age) * (montWage * newPercSaves * 12);

      console.log(`
      How many years remain until the person retires? ${yearsToRetire}
      Saved money per month:                          ${savedMoneyPerMonth} EUR
      Saved money per year:                           ${savedMoneyPerYear} EUR
      Saved until retires:                            ${result} EUR
      `);
  }

})(40, 65, 2000, 5);


// methods

// trim()
let str = "   Hi   ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());

// startsWith()
let text = "Hi we will have fun now";
console.log(text.startsWith("Hi"));  // expected output: true
console.log(text.startsWith("we"));  // expected output: false
// endsWith()
console.log(text.endsWith("now"));   // expected output: true
console.log(text.endsWith("we", 5)); // expected output: true

//charCodeAt()
let chr = "a";                       // UTF-16 -> "A" = 65 // old versions: UTF-8, ASCII
console.log(chr.charCodeAt(0) - 96);

// codePointAt()
const icons = '😂';
console.log(icons.codePointAt(1));