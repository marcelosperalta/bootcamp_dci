// JavaScript

// Review

// sum_int > snake case
// sumInt  > camel case

// var, let, const
var x = 0;        // x = is a global variable
let y = "3";
y = 3;
const q = 12;

// increment
let a = 0;
a++; // a = a + 1 or a += 1 (all the same)

// decrement
a--; // a = a - 1 or a -=1 (all the same)
let str = "Hi";
str += " how are you";
console.log(str);

// function <name>(<parameters>){ ... }
// { } = code between are the scope
function sum (x, y) { // parameters are optional = (x, y) or ()
    let z = x + y;    // z = is a local variable
    return z;           
} 
console.log(sum(2, 3));
sum(10, 3); // function call

// variables in function
function fun() {
    const num = 10;
    const num2 = 20;
    console.log("Hi");
    return `Hi the sum is ${num + num2} \n  I\'m  \" `;
}
console.log(fun());      // function call

// substring, toLocaleUpperCase...
let string = `This is a long text`;
console.log(string[0]);
console.log(string.substring(0, 4));
let newStr = string[0].toLocaleUpperCase() + string.substring(1).toLocaleLowerCase();
let newStr2 = string.substring(0, 2).toLocaleUpperCase() + string.substring(2).toLocaleLowerCase();
console.log(newStr);
console.log(newStr2);

console.log(typeof d);
console.log(typeof console);
console.log(typeof console.log);

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
let blue = true;
console.log(blue ? `I like ${x} ${arr}`: `Nooo`);

// if, else if, else, and (&&), or (||)
if (1 < 10) {
    arr.push(1);
} else if (1 == 20 && 1 == 1 || 3 == 3) {
    arr.unshift(1);
} else {
    arr.push(2);
    a++;
}

// switch
let color = "Black";
switch(color){
    case "Pink":
        arr.push(1);
        break;
    case "Black":
        console.log("Hi");
        break;
        default:
            a++;
            console.log("Please, choose between pink and black");
}

// const <function name> = (<parameters>) => { ... }
const div2 = (x, y) => x / y;
console.log(div2(3, 9));
//or
const div = () => {
    const you = () => {
        let x = 3 * 3;
        return x;
    }
    let call = you();
    return call;
};
console.log(div());

// Array
const names = ["Ali", "Olga", "Hadi"];

// Array.includes()
console.log(names.includes("Ali")); //true

// Array.indexOf(<item>)
console.log(names.indexOf("Ali"));

// Removing items:
// Array.pop()    // Remove the last item
// Array.shift()  // Remove the first item
names.push("Zara");
console.log(names);
names.unshift("XX");
console.log(names);
names.shift();
console.log(names);
names.pop();
console.log(names);

// Array.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));

// Array.split()
const arr1 = ["Hi", "This", "is"];
const arr2 = ["Me", "writing", "you"];

// Array.concat()
const arrTotal = arr1.concat(arr2);
arrTotal.push("You");
console.log(arrTotal.join(" "));

// Array.filter()    // creates a new array
let newArr = names.filter(name => name.length == 3); // (...(anonymous function));
console.log(newArr);

// Array.find()      // returns the value of the first element
const numbers = [1, 2, 4, 55, 67];
let arrCall = numbers.find(num => num == 55);
console.log(arrCall);
let arrCall2 = numbers.find(num => num == 3);
console.log(arrCall2);

// reverse()
const str3 = "JavaScript";
let newRevStr = str3
    .split("")
    .reverse()
    .join("");
console.log(newRevStr); // tpircSavaJ

// --------------------------------------------------------------------------------
// 23.01.2020 - 01
// c4n y0u r34d th15?
// Create a function that takes a string as an argument
// and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all
// ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

const hacking = (str) => {
    let hackedArr = [];
    let toSmall = str.toLocaleLowerCase();
    let letters = toSmall.split('');
    for (let i = 0; i < letters.length; i++){
        if (letters[i] == 'a'){
            letters[i] = 4;
            hackedArr.push(letters[i]);
        } else if (letters[i] == 'e'){
            letters[i] = 3;
            hackedArr.push(letters[i]);
        } else if (letters[i] == 'i'){
            letters[i] = 1;
            hackedArr.push(letters[i]);
        } else if (letters[i] == 's'){
            letters[i] = 5;
            hackedArr.push(letters[i]);
        } else {
            hackedArr.push(letters[i]);
        }
    }
    let result = hackedArr.join("");
    return result;
};
let codeStr = "Hi, I am nice aaa";
console.log(hacking(codeStr));     // h1, 1 4m n1c3 444

// --------------------------------------------------------------------------------
// 23.01.2020 - 02
// Is it Symmetrical?
// Create a function that takes a number as an argument
// and returns true or false depending on whether the number is symmetrical or not.
//  NB(Nota Bene: used to mark something as particularly important):
//  A number is symmetrical when it is the same as its reverse.
// Examples:
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

function isSymmetrical(num){
    let numToStr = num.toString();
    let result = numToStr.split('')
    .reverse()
    .join('');
    if (numToStr == result){
        return true
    } else {
        return false
    }
}
console.log(isSymmetrical(9939)); // false
console.log(isSymmetrical(9339)); // true

// --------------------------------------------------------------------------------
// 23.01.2020 - 03
// snake_case ➞ camelCase
// Create a function toCamelCase() that takes a single string in snake_case
// and converts it into camelCase.
// Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

const toCamelCase = str => { // function ES6 style > Arrow functions
    let splitStr = str.split("_");
    let camelArray = [];
    for (let i = 0; i < splitStr.length; i++){
        let firstChr, restStr;
        if (splitStr[i] == splitStr[0]){
            camelArray.push(splitStr[0]);
            continue;
        } else {
            firstChr = splitStr[i].slice(0, 1);
            restStr = splitStr[i].slice(1, splitStr[i].length);
        }
        let newWord = firstChr.toUpperCase() + restStr;
        camelArray.push(newWord);
    }
    let result = camelArray.join("");
    return result;
}
console.log(toCamelCase("snack_long_hi"));

// --------------------------------------------------------------------------------
// 23.01.2020 - 04
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
    let lowerCase = str.toLowerCase();
    let splitStr = lowerCase.split(" ");
    // this is without the vowel task
    //const vowels = ["a", "e", "o", "i", "u"];
    for (let i = 0; i < splitStr.length; i++) {
      // i = 1   splitStr = that
      let firstChr = splitStr[i][0]; // t
      let remainder = splitStr[i].slice(1, splitStr[i].length); //hat
      const newString = remainder + firstChr + "ay";
      // hat + z + ay
      translation.push(newString);
    }
    let result = translation.join(" ");
    return result;
  }
  const strPig = "higo that is fun";
  console.log(pigLatin(strPig));
