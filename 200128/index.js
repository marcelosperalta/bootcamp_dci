// --------------------------------------------------------------------------------
// 28.01.2020 - 01
// Create a function that looks inside a givin string
// if it has the word (JavaScript) if so print "I know it's crazy 😉".

console.log(`
Search the word "JavaScript":
`);

function lookInsideString (string){
    
    let result = string.indexOf("JavaScript");
    // The method "indexOf()" (String.prototype.indexOf()) will returns the first occurrence of the value "JavaScript".
    // console.log(result);
    
    if (result !== -1) {
    // The method "indexOf()" returns "-1" if the value "JavaScript" is not founded
    // and because of this I used the operator "Strict not equal" combined with "-1".
    // If the result is different than "-1", the string "I know it's crazy 😉" will be returned.

    return "I know it's crazy 😉";

    } else {
    
    return "The string do not have the word JavaScript";

    }

}
console.log(lookInsideString("JavaScript"));             // expected output: I know it's crazy 😉
console.log(lookInsideString("JaVvaScript"));            // expected output: The string do not have the word JavaScript
console.log(lookInsideString("Coffee"));                 // expected output: The string do not have the word JavaScript
console.log(lookInsideString("Hello, I am JavaScript")); // expected output: I know it's crazy 😉
console.log(lookInsideString("AbcDeJavaScript"));        // expected output: I know it's crazy 😉


// --------------------------------------------------------------------------------
// 28.01.2020 - 02
// Create a function that calculates the user age.
// e.g. 2000 -> 20

console.log(`
User age:
`);

console.log(`v1.0 - problems with small numbers (e.g. "1") and characters (e.g. "a")
`);

function userAge (arg){
    if (typeof arg == "number"){
        let x = 2020;
        return x - arg;
    } else {
        return "Is not a number.";
    }
}
console.log(userAge(1988));
console.log(userAge(1));
console.log(userAge("a"));
console.log(userAge());

// or

console.log(`
v2.0 - solved the problems with small numbers
`);

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
// 28.01.2020 - 03
// Create a function that accepts a text from user
// and check if the user has entered a month name,
// if so print out that month and in which season it is.

console.log(`
Enter a month name:
`);

function checkMonth (arg) {

    let result = "";
    
    switch(arg) {

        case "January":
            result = "In January the season is Winter.";
            break;

        case "February":
            result = "In February the season is Winter.";
            break;

        case "March":
            result = "In March the season is Spring.";
            break;

        case "April":
            result = "In April the season is Spring.";
            break;

        case "May":
            result = "In May the season is Spring.";
            break;

        case "June":
            result = "In June the season is Summer.";
            break;

        case "July":
            result = "In July the season is Summer.";
            break;

        case "August":
            result = "In August the season is Summer.";
            break;

        case "September":
            result = "In September the season is Autumn.";
            break;

        case "October":
            result = "In October the season is Autumn.";
            break;

        case "November":
            result = "In November the season is Autumn.";
            break;

        case "December":
            result = "In December the season is Winter.";
            break;

        default:
            result = "Please, choose between the month names.";

    }

    return result;

}
console.log(`"1. ${checkMonth("October")}`);
console.log(`"2. ${checkMonth("April")}`);
console.log(`"3. ${checkMonth("December")}`);
console.log(`"4. ${checkMonth("Test")}`);
console.log(`"5. ${checkMonth("")}`);
console.log(`"6. ${checkMonth()}`);

// or (teacher Hadi's solution)

console.log(`
Enter a month name: (Hadi's solution)
`);

function monthCheck(string) {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  let strToArray = string.toLowerCase().split(" ");
  let result = "";
  let counter = 0;
  let winter = ["december", "january", "february"];
  let spring = ["march", "april", "may"];
  let summer = ["jun", "july", "august"];
  let autumn = ["september", "october", "november"];
  const currentSeason = monthToLook => {
    let seasonName = "";
    if (winter.includes(monthToLook)) {
      seasonName = seasons[0];
    } else if (spring.includes(monthToLook)) {
      seasonName = seasons[1];
    } else if (summer.includes(monthToLook)) {
      seasonName = seasons[2];
    } else if (autumn.includes(monthToLook)) {
      seasonName = seasons[3];
    } else {
      seasonName = "Sorry something went wong";
    }
    return seasonName;
  };
  //console.log(months);
  for (let i = 0; i < strToArray.length; i++) {
    if (months.includes(strToArray[i])) {
      let currentWord = strToArray[i];
      result += `You have entered ${currentWord}, which is in ${currentSeason(currentWord)}. `;
      counter++;
    }
  }
  if (counter == 0) {
    result = `Sorry, I didn't find any months in your text.`;
  }
  return result;
}
console.log(monthCheck("hi is jun"));
console.log(monthCheck("Hi hi is"));


// --------------------------------------------------------------------------------
// 28.01.2020 - 04
// Create a function that takes a string and a word,
// and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

console.log(`
Dictionary:
`);

function dictionary (str, word) {
for (let i = 0; i <= str.length; i++) {
    if (str.substring(0,str.length) === word.substring(0,str.length)) {
        return true; 
    } else {
        return false;
    }
  }
}
console.log(dictionary("co", "coffee"));    // expected output: true
console.log(dictionary("coff", "coffee"));  // expected output: true
console.log(dictionary("b", "ball"));       // expected output: true
console.log(dictionary("cosf", "coffee"));  // expected output: false
console.log(dictionary("bo", "ball"));      // expected output: false


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
Complete the function... twofer...:
`);

const twofer = who => {
    if (who) {
        return `Two for me and one for ${who}`;
    } else {
        return "Two for me and one for you";
    } 
};
console.log(twofer("Marcelo"));
console.log(twofer());

// or

const twofer2 = who => who ? `Two for me and one for ${who}` : "Two for me and one for you";
console.log(twofer2("Marcelo"));
console.log(twofer2());


// --------------------------------------------------------------------------------
// 28.01.2020 - 06
// Complete the function below so that it still calculates the power of a number even
// if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example:
// Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).
/*
const exponent = (num, exp) => {
  
    for (let i = 0; i < exp; i++) {
  }

    return result;
};
console.log(exponent(3, 3)); // -> 27
console.log(exponent(3));    // -> 9
*/

console.log(`
Complete the function... exponent...:
`);

const exponent = (num, exp) => {
    let result = 1; 
    for (let i = 0; i < exp; i++) {
        result *= num ** exp;
        return result
      }
  result = num * num;
  return result;
};
console.log(exponent(3, 3));  // 27
console.log(exponent(3));     // 9
console.log(exponent(2, 4));  // 16
console.log(exponent(2));     // 4
console.log(exponent(3));     // 9
console.log(exponent(3, 5));  // 243


// --------------------------------------------------------------------------------
// 28.01.2020 - 07
// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)
/*
function average (...args) {

let result = "";

if (notesResult > 90) {

*/

console.log(`
Student Degrees:
`);


function average (...args) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let average = args.reduce(reducer) / args.length;
    //console.log(average);
    if (args.length === 6 && average < 70) {
        result = "F";
    } else if (args.length === 6 && average >= 70 && average < 80) {
        result = "C";
    } else if (args.length === 6 && average >= 80 && average < 85) {
        result = "B";
    } else if (args.length === 6 && average >= 85 && average < 90) {
        result = "A";
    } else if (args.length === 6 && average >= 90) {
        result = "A+";
    } else if (args.length < 6 || args.length > 6 ) {
        result = "Please, put your last 6 grades";
    }
    return result;
}
console.log(average(90, 80, 80, 90, 50));          // "Please, put your last 6 grades"
console.log(average(50, 60, 80, 90, 10, 40, 50));  // "Please, put your last 6 grades"
console.log(average(50, 60, 80, 90, 10, 40));      // 50 + ... + 40 = 330 // 330 / 6 = 55 // 55 = "F"
console.log(average(70, 60, 80, 90, 40, 80));      // 70 + ... + 80 = 420 // 420 / 6 = 70 // 70 = "C"
console.log(average(90, 90, 85, 90, 60, 80));      // 90 + ... + 80 = 495 // 495 / 6 = 82 // 82 = "B"
console.log(average(90, 90, 85, 90, 100, 80));     // 90 + ... + 80 = 535 // 535 / 6 = 89 // 89 = "A"
console.log(average(90, 90, 100, 90, 100, 80));    // 90 + ... + 80 = 550 // 550 / 6 = 91 // 91 = "A+"


// --------------------------------------------------------------------------------
// 28.01.2020 - 08
// Create a function that accepts the
// (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

console.log(`
User name, age... you are cool:
`);

function register (userName, age, address, ...args) {

     if (args.includes("dance") || args.includes("party")) {
    
       return `${userName} is ${age} years old and lives at ${address}. Enjoys ${args.join(", ")}. You are cool`;

   } else {

   return `${userName} is ${age} years old and lives at ${address}. He enjoy ${args.join(", ")}.`;

 }

}
console.log(register("Marcelo", 39, "Quitz", "party", "run", "paint"));
console.log(register("Marcelo", 39, "Quitz", "run", "dance"));
console.log(register("Marcelo", 39, "Quitz", "run", "travel"));


// --------------------------------------------------------------------------------
// 28.01.2020 - 09
// Count Occurrences. 
// Create a function that accepts two arguments: a string and a letter.
// The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

console.log(`
Count letter occurrences:
`);

function countOccurrences (string, letter) {
    let myArray = string.split('');
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == letter){
            sum++;
        }
    }
    return sum;
}
console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("this is a string", "t"));


// --------------------------------------------------------------------------------
// 28.01.2020 - 10
// Create a function which calculates how old a dog is in doggie years.
// The function should accept one argument that is the puppy’s age in human years.
// Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

console.log(`
Doggie years:
`);

function dogAge (age) {
    let calc = age * 7;
    console.log(`Your doggo is ${calc} years old in dog years!`)
}
dogAge(4);
dogAge(1);


// --------------------------------------------------------------------------------
// 28.01.2020 - 11
// A Lifetime Supply...
// Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favorite snack.
// The function should accept two arguments: age and amount per day.
// The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// i.e.
// calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

console.log(`
Lifetime supply:
`);

function calcSupply (age, amountPerDay) {
    const maxAge = 80;
    let calc = (maxAge - age) * amountPerDay * 365;
    console.log(`You will need ${calc} bars of chocolate (${amountPerDay} a day) to last you til the age of 80.`)
}
calcSupply(25, 2);
calcSupply(39, 2);

// or (teacher Hadi's solution, with BONUS)

console.log(`
Lifetime supply: (Hadi's solution)
`);

function calcLifetimeSupply(age, amount, snack) {
  const maxAge = 100;
  const supplyCalc = Math.ceil((maxAge - age) * 365 * amount);
  // Bonus: round the result of any floating values here
  return `You will need ${supplyCalc} pieces of that ${snack} that you like, (assuming you live until the ripe old age of ${maxAge}. Happy snacking!`;
}
console.log(calcLifetimeSupply(32, 3.58, "chocolate"));


// --------------------------------------------------------------------------------
// 28.01.2020 - 12
// Pie.
// Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true

console.log(`
Slices per person:
`);

function equalSlices (totalNumberSlices, recipientsNumber, slicesEachPerson) {
    if (totalNumberSlices < recipientsNumber * slicesEachPerson){
        return false;
    } else {
        return true;
    }
}
console.log(equalSlices(11, 5, 3));  // false // 5 people x 3 slices each = 15 slices > 11 slices
console.log(equalSlices(8, 3, 2));   // true
console.log(equalSlices(8, 3, 3));   // false
console.log(equalSlices(24, 12, 2)); // true


// --------------------------------------------------------------------------------
// 28.01.2020 - 13
// XO
// Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

console.log(`
Same number of ’x’s and ’o’s:
`);

function XO (string) {
    let newArray1 = string.toLowerCase().split("x").join('').split("").length; // or string.toLowerCase().split("x").length -1; (Bido's solution)
    let newArray2 = string.toLowerCase().split("o").join('').split("").length; // or string.toLowerCase().split("o").length -1; (Bido's solution)
    if (newArray1 === newArray2 || newArray1 === 0 && newArray2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(XO("ooxx"));    // true
console.log(XO("xooxx"));   // false
console.log(XO("ooxXm"));   // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo"));    // false
console.log(XO("XoxXoO"));  // true


// --------------------------------------------------------------------------------
// 28.01.2020 - 14
// Validate Email.
// Create a function that takes a string,
// checks if it’s a valid email address,
// and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

console.log(`
Validate Email:
`);

function emailValidation (string) {

    let emailCheckFirstAt = string.indexOf("@");
    //console.log(emailCheckFirstAt);

    let emailCheckLastAt  = string.lastIndexOf("@");
    //console.log(emailCheckLastAt);

    let emailCheckLastDot = string.lastIndexOf(".");
    //console.log(emailCheckLastDot);

    let emailCheckDomainName = string.length;
    //console.log(emailCheckDomainName);
    
    if (emailCheckFirstAt >= 1 && emailCheckFirstAt === emailCheckLastAt && emailCheckLastDot > emailCheckLastAt + 1 && emailCheckLastDot < emailCheckDomainName - 2) {

        return true

    } else {

        return false
        
    }

}
console.log(emailValidation("john@example.com"));     // expected output: true
console.log(emailValidation("john@example.de"));      // expected output: true
console.log(emailValidation("a@a.com"));              // expected output: true
console.log(emailValidation("john.smith@email.com")); // expected output: true
console.log(emailValidation("john@example.c"));       // expected output: false
console.log(emailValidation("john@example."));        // expected output: false
console.log(emailValidation("jo@hn@example.com"));    // expected output: false
console.log(emailValidation("john@examp@le.com"));    // expected output: false
console.log(emailValidation("@example.com"));         // expected output: false
console.log(emailValidation("example.com@"));         // expected output: false
console.log(emailValidation("a@.com"));               // expected output: false
console.log(emailValidation("john.smith@com"));       // expected output: false


// --------------------------------------------------------------------------------
// 28.01.2020 - 15
// Create a function will calculate how many times empty space occurred
// in a given string by the user and print out only the characters number

console.log(`
Number of characters without spaces:
`);

function characterNumber (string) {
    let newArray = string.split(" ").join('').split("").length;
    console.log(newArray);
}
characterNumber("Number of characters");
characterNumber("Number of characters without spaces");