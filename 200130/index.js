// --------------------------------------------------------------------------------
// 30.01.2020 - 01
// Write a function will give the alphabetical order for a passed character
// i.e.
// A -> 1
// B -> 2

console.log(`
Alphabetical order:
`);

function alphabeticalOrder (character) {
    
    let myArray = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let passedChar = myArray.indexOf(character.toUpperCase());
    //console.log(passedChar);
   
    if (passedChar < 27 & passedChar !== -1 && passedChar !== 0) {
        
        return `The alphabetical order for ${character.toUpperCase()} is ${passedChar}`;
    
    }
    
    return "Please, write a character between A and Z (A and Z included)";
 
}
console.log(alphabeticalOrder("A"));  // expected output: The alphabetical order for A is 1
console.log(alphabeticalOrder("C"));  // expected output: The alphabetical order for C is 3
console.log(alphabeticalOrder("Z"));  // expected output: The alphabetical order for Z is 26
console.log(alphabeticalOrder("a"));  // expected output: The alphabetical order for A is 1
console.log(alphabeticalOrder("aa")); // expected output: Please, write a character between A and Z (A and Z included)
console.log(alphabeticalOrder("1"));  // expected output: Please, write a character between A and Z (A and Z included)
console.log(alphabeticalOrder(""));   // expected output: Please, write a character between A and Z (A and Z included)


// New solutions for old exercises ("Refactoring")

// --------------------------------------------------------------------------------
// 28.01.2020 - 02
// Create a function that calculates the user age.
// e.g. 2000 -> 20

console.log(`
User age:`);

console.log(`
v1.0 - problems with small numbers (e.g. "1") and characters (e.g. "a")`);

function userAge (arg){
    if (typeof arg == "number"){
        let x = 2020;
        return x - arg;
    } else {
        return "Is not a number.";
    }
}
console.log(userAge(1980));
console.log(userAge(1));
console.log(userAge("a"));
console.log(userAge());

// or

console.log(`
v2.0 - solved the problems with small numbers`);

function userAge2 (arg) {
    if (arg >= 1900 && arg <= 2020) {
        return 2020 - arg;
    } else {
        return "Please, type a valid year number (format: YYYY)";
    }
}
console.log(userAge2(1988));
console.log(userAge2(1));
console.log(userAge2("a"));
console.log(userAge2());

// --------------------------------------------------------------------------------
// 28.01.2020 - 05
// Complete the function below so that it returns
// "Two for me and one for you" when no arguments are passed
/* 
const twofer = who => {
  return `Two for me and one for ${who}`;
};
console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"
*/

console.log(`
Complete the function... twofer...:`);

console.log(`
v1.0 - arrow function + if`);

const twofer = who => {
    if (who){
        return `Two for me and one for ${who}`;
    } else {
        return "Two for me and one for you";
    } 
};
console.log(twofer("Marcelo"));
console.log(twofer());

// or

console.log(`
v2.0 - arrow function + conditional (ternary) operator`);

const twofer2 = who => who ? `Two for me and one for ${who}` : "Two for me and one for you";
console.log(twofer2("Marcelo"));
console.log(twofer2());