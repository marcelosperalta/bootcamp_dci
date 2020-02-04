// let
let str1 = "this is a long text";
console.log(str1[1]);
let str2 = "this is a long text";
console.log(str2.substring(2, 4));
let str3 = "this is a long text";
console.log(str3.slice(3));
let str4 = "Hi";
let str5 = "Hadi";
console.log(str4 + " " + str5);
console.log(`${str4} ${str5}`);
console.log(`${str4}
${str5}`);
console.log(str4.toLocaleUpperCase());
console.log(str5.toLocaleLowerCase());
console.log(str1.includes("java"));
let x = true;
x ? console.log("cool") : console.log("nope");
false ? console.log("cool") : console.log("nope");
true ? console.log("cool") : console.log("nope");

// const
const dr = 2; // dr = 3 > do not work > is not possible to assign a new value to const

// local and global
var global = `Hi I\`m global`; // global
function sum() {
  // local - between curly brackets {}
  let local = `Hi I\`m local`;
  console.log(global);
  console.log(local);
}
sum();

// console.log(local); not there - local is not defined
console.log(global);

// conditional assignment with the ternary operator
let kid = 2;
console.log(kid > 16 ? `Party` : `Home Party`);
console.log(true ? `Hey thats nice` : `Oh nooooo`);

// bracket notation [0]

// `\` , `\"` , `\n`
console.log("Hi I am \n Hadi");

// .trim()
let str6 = " Hadi    ";
console.log(str6.trim());

// "new" method
function print(str1) {
  console.log(str1);
}
print("Marcelo");

// Numbers (bases 10, 2, 16...) (integer, float) (EU = 1.1 / USA = 1,1)
let b = 3;
let c = 2;
console.log(b + c);
console.log(b - c);
console.log(b * c);
console.log(b / c);
console.log(b % c); // remainder of division

// integers vs. floats
let int1 = 11;
flo1 = 1.5;
console.log(int1 + " " + flo1);

// isNaN = is Not-A-Number
console.log(!isNaN(int1) ? "yeah it is" : "nope sorry");
console.log(isNaN(int1) ? "yeah it is" : "nope sorry");

// converting string into numbers
let strInt1 = "2";
let strInt2 = "2";
let strInt3 = "1E";
let result = strInt1 + strInt2; // 2 "and" 2
console.log(result); // 22
let newNum1 = parseInt(strInt1, 10); // 10 is the number base
console.log(newNum1); // 2
let newNum2 = parseInt(strInt1, 2); // 2 is the number base
console.log(newNum2); // NaN at binary system
let newNum3 = parseInt(strInt3, 16); // 16 is the number base
console.log(newNum3); // 30 in decimal base


// --------------------------------------------------------------------------------
// 08.01.2020 - 01
// Create two variables.
// One variable should contain a string value
// and the other should contain a number.
// Concatenate the string and the number.

let var1 = "text";
let var2 = 2;
conc = var1 + var2; // concatenate
console.log(`${var1}${var2}`);
//or
console.log(conc);
//or
console.log(var1 + var2);

// --------------------------------------------------------------------------------
// 08.01.2020 - 02
// Check if the following numbers are even numbers.
// Use a ternary and if the number is even print "30 is even",
// else print that it is odd.

console.log(30 % 2 == 0 ? "30 is even" : "is odd"); // (condition ? true : false) (: = else)

let numOdd = 30 % 2;
console.log(numOdd == 0 ? "is even" : "is odd");

let num1 = 30;
let num2 = num1 % 2;
console.log(num2 == 0 ? `${num1} is even` : `${num1} is odd`);

let num3 = 31;
let num4 = num3 % 2;
console.log(num4 == 0 ? `${num3} is even` : `${num3} is odd`);

let var3 = 5;
console.log(var3 % 2 == 0 ? "is even" : "is odd"); // (condition ? true : false) (: = else)

let var4 = 5;
console.log(var4 % 2 === 0 ? "is even" : "is odd");

let var5 = 5;
console.log(var5 % 2 === 1 ? "is odd" : "is even");

// --------------------------------------------------------------------------------
// 08.01.2020 - 03
// Create a new string from a given string by changing the position
// of first and last characters.
// The string length must be greater than or equal to 1.
// eg. of output JavaScript => tavaScripJ

let newString1 = "JavaScript";
let firstChr1 = newString1[0];
let lastChr1 = newString1[newString1.length - 1];
let shortStr1 = newString1.substring(1, newString1.length - 1);
console.log(lastChr1 + shortStr1 + firstChr1);


// integer
let integer = "1005";
let realNum = parseInt(integer);
console.log(realNum);

let float = "10.05";
let realFloat = parseFloat(float);
console.log(realFloat);

let float2 = "10.05";
let realFloat2 = parseInt(float2);
console.log(realFloat2);

let integer2 = "1005";
let realNum2 = parseFloat(integer2);
console.log(realNum2);

let LastNum = 4 % 2;
console.log(LastNum);

let q = 3;
let s = 4;
let sum2 = q + s;
let div = q / s;
let mul = q * s;
console.log(sum2, div, mul);

// exponentiation...
let power = 2 ** 2;
console.log(power);
let power2 = 2 ** 3;
console.log(power2);

// Math.floor() Math.ceil()
let float3 = 1.1;
let realIni = Math.floor(float3);
console.log(realIni);
let float4 = 1.9;
let realIni2 = Math.floor(float4);
console.log(realIni2);
let float5 = 1.1;
let realIni3 = Math.ceil(float5);
console.log(realIni3);

//Math.max()
console.log(Math.max(1, 33333.5, 4, 66, 700)); // 33333.5

let xx = 111;
let zz = 3;
let yy = 4;
console.log(Math.max(xx, zz, yy, 100));        // 111


// --------------------------------------------------------------------------------
// 08.01.2020 - 04
// Create a variable with the value of “123”.
// Convert it to a number.

let string1 = "123";
let realNum3 = parseInt(string1);
console.log(realNum3);

let string2 = "123";
console.log(parseInt(string2));

// --------------------------------------------------------------------------------
// 08.01.2020 - 05
// Create a variable with the value of “130.7".
// Convert it to a number.

let float6 = "103.7";
let realFloat3 = parseFloat(float6);
console.log(realFloat3);

let float7 = "103.7";
console.log(parseFloat(float7));

// --------------------------------------------------------------------------------
// 08.01.2020 - 06
// Declare a variable named isDog.
// If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’

let isDog = true;
console.log(isDog ? `pat, pat` : `find me a dog to pat`); // use ()

let isDog2 = false;
console.log(isDog2 ? `pat, pat` : `find me a dog to pat`); // use ()

// --------------------------------------------------------------------------------
// 08.01.2020 - 07
// Declare a variable named speedCheck.
// If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’.
// If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.

let speedCheck = 30;
console.log(
  speedCheck > 50
    ? `you’re going too fast!`
    : `you’re driving below the speed limit, Oma`
);

let speedCheck2 = 60;
console.log(
  speedCheck2 > 50
    ? `you’re going too fast!`
    : `you’re driving below the speed limit, Oma`
);

let speedCheck3 = 0;
let speedlimit = 50; // best practice = declare all the variables
console.log(
  speedCheck3 > speedlimit
    ? `you’re going too fast!`
    : `you’re driving below the speed limit, Oma`
);

let speedCheck4 = 60;
let speedlimit2 = 50; // best practice = declare all the variables
let textStrTrue = "you’re going too fast!";
let textStrfalse = "you’re driving below the speed limit, Oma";
console.log(speedCheck4 > speedlimit2 ? textStrTrue : textStrfalse);

// --------------------------------------------------------------------------------
// 08.01.2020 - 08
// Declare a variable named age.
// If age is below 16, print “serve butter beer”.
// Otherwise print “serve beer”.

let age = 15;
console.log(age < 16 ? `serve butter beer` : `serve beer`);

let age2 = 17;
console.log(age2 < 16 ? `serve butter beer` : `serve beer`);

// --------------------------------------------------------------------------------
// 08.01.2020 - 09
// Declare a variable named isStudent.
// If true, print “Ticket costs €5,00”.
// If false, print “Ticket costs €12,00".

let isStudent = true;
console.log(isStudent ? `Ticket costs €5,00` : `Ticket costs €12,00`);
let isStudent2 = false;
console.log(isStudent2 ? `Ticket costs €5,00` : `Ticket costs €12,00`);

// --------------------------------------------------------------------------------
// 08.01.2020 - 10
// Declare a variable named okMarie.
// Check if there is ‘cake’ - if so, print “Let them eat cake”.
// If not, print “Oh, bother”.

let okMarie = "cak";
console.log(okMarie == "cake" ? `Let them eat cake` : `Oh, bother`);

let okMarie2 = "cake";
console.log(okMarie2 == "cake" ? `Let them eat cake` : `Oh, bother`);

let okMarie3 = "cake";
console.log(okMarie3.includes("cake") ? `Let them eat cake` : `Oh, bother`);

let okMarie4 = "Apple";
print(okMarie4 === "cake" ? `Let them eat cake` : `Oh, bother`);


//Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4)); // 0.2

let xxx = 111;
let zzz = 3;
let yyy = 4;
console.log(Math.max(xxx, zzz, yyy, 100));    // 111

console.log(Math.min(4, 5, 88, 0.2, 200, 4)); // 0.2