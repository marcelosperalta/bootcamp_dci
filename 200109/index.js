// console.log
let x, y, z;
x = 1;
y = 5;
z = x + y;
console.log(z);
console.log(Math.max(33, 44, 52, 111111, 76, 7, z));
console.log(Math.min(33, 44, 5, 6, 7, 7111, z));
function display (str){
    console.log(str);
}
display("Hi it is a new function");
let strInt = "12333";
console.log(parseInt(strInt));
let strInt2 = "999";
console.log(parseInt(strInt+strInt2));
console.log(parseInt(strInt) + parseInt(strInt2));
let strFloat = "333.553";
console.log(parseFloat(strFloat));
let float1 = 2.4;
console.log(Math.ceil(float1));  // Round down
console.log(Math.floor(float1)); // Round up
let str1 = "This Is New Text";
console.log(str1.toLocaleUpperCase());
console.log(str1.toLocaleLowerCase());

// Addition
// x + y + s
console.log(((x +y) / (z + 2.3)) * 29 + x);

// String + Number
let d, f, r;
d = 5;
f = "Hi I'm Hadi ";
console.log(f + d);

// String + Boolean
r = true;            // true  in JavaScript is "1"
console.log(r + d);
r = false;           // false in JavaScript is "0"
console.log(r + d);  

// String + String
let str2 = "Hi ";
let str3 = "I am Hadi";
console.log(str2 + str3);

// typeof (Objects, function, console...)
console.log(typeof str3);
console.log(typeof x);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof Math);
console.log(typeof Math.floor);
console.log(typeof let);
console.log(typeof m);           // is not declared
console.log(typeof null);

// (0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
let num = 3;
let result = floatNum * floatNum1;
let lastResult = result.toFixed(3)
console.log((result).toFixed(3));

// 1025e2 where "e" is exponent

// x = 2nd
let intStr = "2nd";
let floatStr = "1033.3 hi this is noooo";
console.log(parseInt(intStr));
console.log(parseFloat(floatStr));

// && || and or
let var1 = 1 > 4; // false
console.log(var1);
let var2 = false;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "Not cool");
console.log(var1 || var2 || var3 ? "cool" : "Not cool");
console.log(var1 && var2 || var3 ? "cool" : "Not cool");

// Assigning
var ohNo;                                    // var ohNo here will be hoisting (do not work with let)
console.log(ohNo);                           // undefined
console.log(x);
ohNo = (3 + 4 * 6) / (12.2 + 211);           // "=" assign value
console.log(ohNo);

// = == ===
console.log(1 == 1 ? `yeah it is` : `nope it is not`); // 1 == 1 is True
console.log(1 == 2 ? `yeah it is` : `nope it is not`); // 1 == 2 is False
console.log(x == 2 ? `yeah it is` : `nope it is not`);
console.log(x == ohNo ? `yeah it is` : `nope it is not`);
console.log(x == ohNo ? `yeah it is` : `nope it is not`);
let xx = "1";
let ohNo2 = 1;
console.log(xx === ohNo2 ? `yeah it is` : `nope it is not`); // check the variable and the type of the variable

// Truthy and falsy values: false, undefined, null...
console.log(true ? "Yes": "Nooooo");
console.log(1 ? "Yes": "Nooooo");
console.log(0 ? "Yes": "Nooooo");          // Falsy
console.log(11 ? "Yes": "Nooooo");
console.log(12 ? "Yes": "Nooooo");
console.log(12.0 ? "Yes": "Nooooo");
console.log(-1 ? "Yes": "Nooooo");
console.log("20" ? "Yes": "Nooooo");
console.log("A" ? "Yes": "Nooooo");
console.log("" ? "Yes": "Nooooo");         // Falsy
console.log(null ? "Yes": "Nooooo");       // Falsy
console.log(undefined ? "Yes": "Nooooo");  // Falsy
console.log(Math.pow ? "Yes": "Nooooo");
console.log(Math.pow() ? "Yes": "Nooooo"); // Falsy
console.log(display ? "Yes": "Nooooo");

// isNaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({}));
console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN(37));
// isNaN - strings
console.log(isNaN('37'));
console.log(isNaN('37.37'));
console.log(isNaN("37,5"));
console.log(isNaN('123ABC'));
console.log(isNaN(''));
console.log(isNaN(' '));

// Math.random
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 100 + 1);
console.log(Math.floor(Math.random() * 100) + 1);

// exercises

// --------------------------------------------------------------------------------
// 09.01.2020 - 01
//Minimum and maximum
//a. Lowest Number
//Print out the lowest number between -1 and 4.
//b. Highest Number
//Print out the highest number between -1 and 4.

console.log(Math.min(-1, 4));

console.log(Math.max(-1, 4));

// --------------------------------------------------------------------------------
// 09.01.2020 - 02
// Rounding
// a. Round up
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.
// b. Round down
// Round down the following numbers: 3321, 326.76, 76788.7, -9.78,

console.log(Math.ceil(3321));    
console.log(Math.ceil(326.76));  
console.log(Math.ceil(76788.7)); 
console.log(Math.ceil(-9.78)); 

console.log(Math.floor(3321));   
console.log(Math.floor(326.76)); 
console.log(Math.floor(-9.78));  
console.log(Math.floor(43.342)); 

// --------------------------------------------------------------------------------
// 09.01.2020 - 03
// Dice Roll!
// Create a program that prints a random integer from 1 - 6.

console.log(Math.floor( Math.random() * 6 ) + 1);
console.log(Math.random());                       // values between 0.01 and 0.99
console.log(Math.random() * 10);                  // values between 0.01 and 0.99
console.log(Math.floor(Math.random() * 10 + 1));  // values between 1 and 10

// homework

// Function Math.pow()

/*
Definition:
The Math.pow() function returns the base to the exponent (a.k.a. power)
e.g. 2³ where 2 is the base and 3 is the exponent
*/

/*
Syntax:
Math.pow(base, exponent)
*/

// Demo:
console.log(Math.pow(2, 3)); // expected output: "8" (2 * 2 * 2 = 8)

/*
Implementation:
If you need to know how much money you will have along twelve months
investing five hundred euros with one percent of interest rate per month
*/
let investmentValue = 500;           // amount of money to be invested
let investmentPeriod = 12;           // period of investment in months
let compoundInterestRate = 1 + 0.01; // 1% interest rate per month ("1 +" is a math convention)
let text1 = `Total value after ${investmentPeriod} month(s) = `;
let text2 = ` EUR`;
// math: Total value after months = 500 * (1 + 0.01)¹²
console.log(text1 + (investmentValue * Math.pow(compoundInterestRate,investmentPeriod)).toFixed(2) + text2);
