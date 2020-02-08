// --------------------------------------------------------------------------------
// 27.01.2020 - 01
// Pig Latin Translation.
// Create a function that takes a string of words
// and moves the first letter of each word to the end of it,
// then adds ‘ay’ to the end of the word.
// This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// Preserve proper capitalization as in the examples below.
// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

function pigLatin(str) {
    let translation = [];
    const vowels = ["a", "e", "o", "i", "u"];
    let lowerCase = str.toLowerCase();
    let splitStr = lowerCase.split(" ");
    console.log(splitStr + "  THis is split arr");
    for (let i = 0; i < splitStr.length; i++) {
      let firstChr = splitStr[i][0]; //b anana
      console.log(firstChr + " first chr"); //anana
      let remainder = splitStr[i].slice(1, splitStr[i].length);
      console.log(remainder + " remainder");
      if (vowels.includes(firstChr)) {
        const firstChrVal =
          (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
        translation.push(firstChrVal);
      } else {
        if (i == 0) {
          let firstCharRem = remainder[0];
          let wordRemainder = remainder.slice(1, remainder.length);
          remainder = firstCharRem.toUpperCase() + wordRemainder;
        }
        const newString = remainder + firstChr + "ay";
        translation.push(newString);
        console.log(translation);
      }
    }
    let result = translation.join(" ");
    return result;
  }
  const strPig = "are are is";
  console.log(pigLatin(strPig));

// --------------------------------------------------------------------------------
// 27.01.2020 - 02
// Multiply - Function Declaration
// Create a function that multiples a number by another number.

console.log(`
1. Multiply`);
function mul1 (x, y){
    return x * y;    
}
console.log(mul1(2, 3));

// --------------------------------------------------------------------------------
// 27.01.2020 - 03
// Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

console.log(`
2. Multiply - Function Declarations as Values`);
const mul2 = function (x, y){
    return x * y;
}
console.log(mul2(2, 3));

// --------------------------------------------------------------------------------
// 27.01.2020 - 04
// Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

console.log(`
3. Multiply - Arrow Function`);
const mul3 = (x, y) => {
    return x * y;
}
console.log(mul3(2, 3));
//or
const mul4 = (x, y) => x * y;
console.log(mul4(2, 3));

// --------------------------------------------------------------------------------
// 27.01.2020 - 05
// Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.

console.log(`
4. Declarations`);
function div1 (a, b){
    console.log(a % b);
}
div1(3, 2);

const div2 = function (a, b) {
    console.log(a % b);
}
div2(3, 2);

const div3 = (a, b) => a % b;
console.log(div3(3, 2));


// --------------------------------------------------------------------------------
// 27.01.2020 - 06
// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have 
// 
// function(3, 5)
// The function should print 3 9 27 81 243.
// Prints 5 exponential values of 3.
// 
// function(2, 8)
// The function prints 2 4 8 16 32 64 128 256.
// Prints 8 exponential values of 2.

function printValue(x, y) {
  // console.log(typeof x);
  if (typeof x == "number" && typeof y == "number") {
    // console.log(true);
    let result = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
      result *= x;
      values += `${result} `;
    }
    return values;
  } else {
    return "One of your vars is not a number";
  }
}
console.log(printValue(2, 10));

// --------------------------------------------------------------------------------
// 27.01.2020 - 07
// Fruits
// Create a function named printFavoriteFruit.
// Declare a variable outside of the function
// and store your favorite fruit as a value.
// Reassign the variable within the function
// and print “My favorite fruit is: x”.

let fruit = `Apple`;
function printFavoriteFruit  () {
    fruit = `Banana`;
    console.log(`My favorite fruit is: ${fruit}`);
}
printFavoriteFruit();

// --------------------------------------------------------------------------------
// 27.01.2020 - 08
// Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function.
// Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(starterNum, exponent) {
    let result = 0;
    let multi = starterNum * starterNum;
    for (i = 0; i < exponent; i++){
        result += multi;
    }
    return result;
}
console.log(exponent(3, 2));


// Spread syntax ...
let array = [1, 3, 45, 6];
let copyArray = [...array];
console.log(copyArray);

function sum (x, y, z) {
    result = x + y + z;
    console.log(result);
}
sum(3, 4, 4);

function sum2 (...args) {
    let array = args;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return `the sum is ${result}`;
}
console.log(sum2(3, 4, 4, 5, 6, 7, 88, 98, 9));
console.log(sum2(7, 88, 98,9));
console.log(sum2(2, 4));


// --------------------------------------------------------------------------------
// 27.01.2020 - 09
// Create a function howManyArgs which returns the total amount of arguments passed to it.

const howManyArgs = (...args) => console.log(args.length);
howManyArgs(3, 4, 4, 5, 6, 7, 88, 98, 9, 30, 11);


// Self-invoking functions

(function add () {
    console.log("Hi");
})();
