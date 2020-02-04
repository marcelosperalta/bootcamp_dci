// mathematical expressions:
console.log(1 * 4);

// boolean expressions
console.log(1 >= 4);

// var
let x = 3;
let y = 3;
let str = "This is text";
let c = true;
let t = "3";
let result = 0;
let marceloPeralta = 1; // camelCase
var newVar = "text";    // hoisted
const z = 15;

// typeof
let cc = true;
console.log(typeof cc); // expected output: true

// ternary condition
let kid = 22;
kid > 16 ? console.log("Go Party") : console.log("Stay Home");
let drive = 55;
drive > 18 ? console.log("Yeah drive now") : console.log("Nope sorry");

// .length
let name = "hadi";
console.log(typeof name);     // expected output: string
console.log(name.length);     // expected output: 4
let lastName = "nsreeny";
console.log(lastName.length); // expected output: 7

// Str[0]
console.log(lastName[2]);                                              // expected output: r
let email = "xxxxxxxxxxx@gmail.com";
console.log(email[11]);                                                // expected output: @
(lastName[0] === "N") ? console.log("cool") : console.log("not cool"); // expected output: not cool
(lastName[0] === "n") ? console.log("cool") : console.log("not cool"); // expected output: cool

// .substring
let restOfStr = lastName.substring(5);
console.log(restOfStr);

// toUpperCase
let str3 = name.toUpperCase();
console.log(str3);
console.log(name);

// toLowerCase
let smallStr = str3.toLowerCase();
console.log(smallStr);
let userName = "marcElo";
let firstChr = userName[0].toLocaleUpperCase();
let restOfNameChr = userName.substring(1).toLowerCase();
console.log(firstChr + restOfNameChr);

// comment 

// or

/*

Lines of text

*/

// or

/**
 * 
 * 
 * 
 * 
 */

let var1 = 0;
let var2 = null;   // empty box
let var3;          // undefined
console.log(var1);
console.log(var2);
console.log(var3);

// camelCase vs. snake_case
let firstName = "hadi";
let first_name = "hadi";

// .includes
let text = firstName.includes("ho");
console.log(text);
let emailCheck = email.includes("@");
console.log(emailCheck);

// .substring
let longText = "This is long text";
let subStr = longText.substring(2, 4);
console.log(subStr);

// exercises

// --------------------------------------------------------------------------------
// 06.01.2020 - 01
// Declare a variable with the value of
// “I can walk in the park all day!“. Print the word “park” to the console.

let a = "I can walk in the park all day!";
let subStrOne = a.substring(18, 22);
console.log(subStrOne);

// --------------------------------------------------------------------------------
// 06.01.2020 - 02
// Declare a variable with the value of “Hello World”.
// Covert the value to upper case and print the converted value to the console.

let b = "Hello World";
let upper = b.toUpperCase();
console.log(upper);

// --------------------------------------------------------------------------------
// 06.01.2020 - 03
// Declare another variable with the value of “Earthlings”.
// Convert the value to lower case and print the converted value to the console.

let d = "Earthlings";
let lower = d.toLowerCase();
console.log(lower);

// --------------------------------------------------------------------------------
// 06.01.2020 - 04
// Declare a variable with the value “JavaScript”.
// Print the the characters “aSc” to the console using the substring() method.

let e = "JavaScript";
let subStr2 = e.substring(3,6);
console.log(subStr2);

// --------------------------------------------------------------------------------
// 06.01.2020 - 05
// Check if the sentence “nice shoes” contains the letter l.

let f = "nice shoes";
let sentenceCheck = f.includes("l");
console.log(sentenceCheck);

// --------------------------------------------------------------------------------
// 06.01.2020 - 06
// Create a new string from a given string with the first character of the
// given string added at the front and back. eg. of output:
// JavaScript => JJavaScriptJ.

let h = "Marcelo";
let add = h.substring(0,1);
console.log(add + h + add);
// or
let j = "Marcelo";
let add2 = j[0];
console.log(add2 + j + add2);


// .length - number
let str4 ="This is long str";
let shortStr2 = str4.substring(str4.length - 3);
console.log(shortStr2); // "str"
let shortStr3 = str4.substring(str4.length - 10);
console.log(shortStr3); // " longe str"

// .slice
let str5 ="This is long str";
let sliceStr = str5.slice(5);
console.log(sliceStr);

// `...${}...`
let firstName2 = "Marcelo";
let lastName2 = "Peralta";
let address = "X 100, 10000 Berlin";
let niceText = `Hi, I am ${firstName2} and I live in ${address}, my door has my family name ${lastName2}`;
console.log(niceText);

// global and local var
var globalVar = "this is global";
function sum(){
    let localVar = "this is local";
    console.log(globalVar);
    console.log(localVar);
}
sum();

// Hoisting (Hoisted)
let newHoisted = "text";
console.log(newHoisted);
let notHoisted = "aaa"; // hoisted

// ++ -- += -=
let num1 = 1;       // num = 1
num1 = num1 + 1;    // 1 + 1 = 2
num1 = num1 + 1;    // 2 + 1 = 3
console.log(num1);  // 3
// or (easy way)
let num2 = 1;       // num = 1
num2 = num2 + 1;    // 1 + 1 = 2
num2 += 1;          // 2 + 1 = 3
console.log(num2);  // 3
let num3 = 1;       // num = 1
num3 = num3 + 1;    // 1 + 1 = 2
num3 -= 1;          // 2 + 1 = 1
console.log(num3);  // 1
let l = 1;
console.log(+l);

let bbbb = 1;
bbbb++;
console.log(bbbb);

let bbbbb = 1;
bbbbb--;
console.log(bbbbb);

// exercises

// --------------------------------------------------------------------------------
// 06.01.2020 - 07
// Create a new string from a given string taking the last 3 characters
// of the string and add them to both the front and back of the new string.
// The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt

let str6 ="JavaScript";
let shortStr4 = str6.substring(str6.length - 3);
console.log(shortStr4 + str6 + shortStr4);
// or
let str66 ="JavaScript";
let str666 = str66.slice(str66.length-3);
console.log(str666);
let longStr66 = str666 + str66 + str666;
console.log(longStr66);

// --------------------------------------------------------------------------------
// 06.01.2020 - 08
// Create a variable and assign a string value to it.
// Then, convert the value to upper case and print the converted
// value to the console and check whether it includes “Java”.

var aa = "test";
let upper2 = aa.toUpperCase();
console.log(upper2);
let check2 = aa.includes("Java");
console.log(check2);
// or
let newVar2 = "This is text";
let newVarUpper = newVar2.toUpperCase();
console.log(newVarUpper);
let javaCheck = newVarUpper.includes("Java");
console.log(javaCheck);

// --------------------------------------------------------------------------------
// 06.01.2020 - 09
// Create a new string from a given string by changing the
// position of first and last characters. The string length must
// be greater than or equal to 1. eg. of output JavaScript => tavaScripJ

let newString = "hi this is long text and i do know";
let firstChr2 = newString[0];
let lastChr2 = newString[newString.length -1];
let shortStr6 = newString.substring(1,newString.length-1);
console.log(lastChr2+shortStr6+firstChr2);

// --------------------------------------------------------------------------------
// 06.01.2020 - 10
// Create 3 different variables about yourself using strings as values
// e.g. let firstName = “Maria”. Print the sentence to the console using
// string interpolation
// e.g. “My name is Maria. I live in Berlin and I am a teacher”.

let myName = "Marcelo";
let myAge = 39;
let myCity = "Berlin";
console.log(`My name is ${myName}. I live in ${myCity} and I am ${myAge} years old.`);

// --------------------------------------------------------------------------------
// 06.01.2020 - 11
// Declare a variable and assign the value “the quick brown fox”
// (all in lower case). Capitalize the first letter of that string.
// Print the result to the console.

let dvd = "the quick brow fox";
let firstCharUpper = dvd[0].toUpperCase();
let newUpdatesStr = dvd.slice(1);
console.log(firstCharUpper+newUpdatesStr);
