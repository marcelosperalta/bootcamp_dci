// JavaScript

// --------------------------------------------------------------------------------
// 06.01.2020 - 01
// Declare a variable with the value of
// “I can walk in the park all day!“. Print the word “park” to the console.

console.log(`
06.01.2020 - 01`);

let park1 = "I can walk in the park all day!";
console.log(park1.slice(18,22)); // expected output: park

//or

let park2 = "I can walk in the park all day!";
let park3 = park2.split(' ');
//console.log(park3);  // expected output: ['I', 'can', 'walk', 'in', 'the', 'park', 'all', 'day!']
                       //                  [ 0 ,  1   ,  2    ,  3  ,  4   ,  5    ,  6   ,  7    ]
console.log(park3[5]); // expected output: park

//or

let park4 = "I can walk in the park all day!";
let park5 = park4.substring(18, 22);
console.log(park5);

// --------------------------------------------------------------------------------
// 06.01.2020 - 02
// Declare a variable with the value of “Hello World”.
// Covert the value to upper case and print the converted value to the console.

console.log(`
06.01.2020 - 02`);

let str1 = "Hello World";
let str2 = str1.toUpperCase();
console.log(str2);

//or

let str3 = "Hello World";
console.log(str3.toUpperCase());


// --------------------------------------------------------------------------------
// 06.01.2020 - 03
// Declare another variable with the value of “Earthlings”.
// Convert the value to lower case and print the converted value to the console.

console.log(`
06.01.2020 - 03`);

let str4 = "Earthlings";
let str5 = str4.toLowerCase();
console.log(str5);

//or

let str6 = "Earthlings";
console.log(str6.toLowerCase());


// --------------------------------------------------------------------------------
// 06.01.2020 - 04
// Declare a variable with the value “JavaScript”.
// Print the the characters “aSc” to the console using the substring() method.

console.log(`
06.01.2020 - 04`);

let str7 = "JavaScript";
let str8 = str7.substring(3,6)
console.log(str8);

//or

let str9 = "JavaScript";
//          J a v a S c r i p t
//         0 1 2 3 4 5 6 7 8 9 10

console.log(str9.substring(3,6));

//console.log(str9.substring(8,10)); // expected output: pt
//console.log(str9.substring(0,2));  // expected output: Ja
//console.log(str9.substring(4,0));  // expected output: Java


// --------------------------------------------------------------------------------
// 06.01.2020 - 05
// Check if the sentence “nice shoes” contains the letter l.

console.log(`
06.01.2020 - 05`);

let sentence = "nice shoes";
let newSentence = sentence.includes("l");
console.log(newSentence);             // expected output: false

//or

let sentence2 = "nice shoes";
console.log(sentence2.includes("l")); // expected output: false

//other

let sentence3 = "sapatos legais";
console.log(sentence3.includes("l")); // expected output: true


// --------------------------------------------------------------------------------
// 06.01.2020 - 06
// Create a new string from a given string with
// the first character of the given string added at the front and back.
// e.g. of output: JavaScript => JJavaScriptJ.

console.log(`
06.01.2020 - 06`);

let str10 = "JavaScript";
let str11 = str10.slice(0,1);
console.log(str11 + str10 + str11);

//or

let str12 = "JavaScript";
//           0123456789
let str13 = str12.charAt(0);
console.log(str13 + str12 + str13);

//or

let str14 = "JavaScript";
let str15 = str14.substring(0,1);
console.log(str15 + str14 + str15);

//or

let str16 = "JavaScript";
//           0123456789
let str17 = str16[0];
console.log(str17 + str16 + str17);


// --------------------------------------------------------------------------------
// 06.01.2020 - 07
// Create a new string from a given string taking the last 3 characters of the string
// and add them to both the front and back of the new string.
// The string length must be 3 or more.
// e.g. of output: JavaScript => iptJavaScriptipt

console.log(`
06.01.2020 - 07`);

let str18 = "JavaScript";
//           J a v a S c r i p t
//          0 1 2 3 4 5 6 7 8 9 10
let str19 = str18.substring(7);
console.log(str19 + str18 + str19);
let str20 = str18.substring(7,10);
console.log(str20 + str18 + str20);

//or

let str21 = "JavaScript";
//           J a v a S c r i p t
//          0 1 2 3 4 5 6 7 8 9 10
let str22 = str21.slice(7);
console.log(str22 + str21 + str22);
let str23 = str21.slice(7,10);
console.log(str23 + str21 + str23);

//or

let str24 ="JavaScript";
let str25 = str24.substring(str24.length - 3);
console.log(str25 + str24 + str25);

//or

let str26 ="JavaScript";
let str27 = str26.slice(str26.length - 3);
let str28 = str27 + str26 + str27;
console.log(str28);

// --------------------------------------------------------------------------------
// 06.01.2020 - 08
// Create a variable and assign a string value to it.
// Then, convert the value to upper case and print the converted
// value to the console and check whether it includes “Java”.

console.log(`
06.01.2020 - 08`);

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

console.log(`
06.01.2020 - 09`);

let newString = "hi this is long text and I do know";
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

console.log(`
06.01.2020 - 10`);

let myName = "Marcelo";
let myAge = 39;
let myCity = "Berlin";
console.log(`My name is ${myName}. I live in ${myCity} and I am ${myAge} years old.`);

// --------------------------------------------------------------------------------
// 06.01.2020 - 11
// Declare a variable and assign the value “the quick brown fox”
// (all in lower case). Capitalize the first letter of that string.
// Print the result to the console.

console.log(`
06.01.2020 - 11`);

let dvd = "the quick brow fox";
let firstCharUpper = dvd[0].toUpperCase();
let newUpdatesStr = dvd.slice(1);
console.log(firstCharUpper+newUpdatesStr);

// --------------------------------------------------------------------------------
// 08.01.2020 - 01
// Create two variables.
// One variable should contain a string value
// and the other should contain a number.
// Concatenate the string and the number.

console.log(`
08.01.2020 - 01`);

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

console.log(`
08.01.2020 - 02`);

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
// e.g. of output JavaScript => tavaScripJ

console.log(`
08.01.2020 - 03`);

let newString1 = "JavaScript";
let firstChr1 = newString1[0];
let lastChr1 = newString1[newString1.length - 1];
let shortStr1 = newString1.substring(1, newString1.length - 1);
console.log(lastChr1 + shortStr1 + firstChr1);

// --------------------------------------------------------------------------------
// 08.01.2020 - 04
// Create a variable with the value of “123”.
// Convert it to a number.

console.log(`
08.01.2020 - 04`);

let string1 = "123";
let realNum3 = parseInt(string1);
console.log(realNum3);

let string2 = "123";
console.log(parseInt(string2));

// --------------------------------------------------------------------------------
// 08.01.2020 - 05
// Create a variable with the value of “130.7".
// Convert it to a number.

console.log(`
08.01.2020 - 05`);

let float6 = "103.7";
let realFloat3 = parseFloat(float6);
console.log(realFloat3);

let float7 = "103.7";
console.log(parseFloat(float7));

// --------------------------------------------------------------------------------
// 08.01.2020 - 06
// Declare a variable named isDog.
// If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’

console.log(`
08.01.2020 - 06`);

let isDog = true;
console.log(isDog ? `pat, pat` : `find me a dog to pat`); // use ()

let isDog2 = false;
console.log(isDog2 ? `pat, pat` : `find me a dog to pat`); // use ()

// --------------------------------------------------------------------------------
// 08.01.2020 - 07
// Declare a variable named speedCheck.
// If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’.
// If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.

console.log(`
08.01.2020 - 07`);

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

console.log(`
08.01.2020 - 08`);

let age = 15;
console.log(age < 16 ? `serve butter beer` : `serve beer`);

let age2 = 17;
console.log(age2 < 16 ? `serve butter beer` : `serve beer`);

// --------------------------------------------------------------------------------
// 08.01.2020 - 09
// Declare a variable named isStudent.
// If true, print “Ticket costs €5,00”.
// If false, print “Ticket costs €12,00".

console.log(`
08.01.2020 - 09`);

let isStudent = true;
console.log(isStudent ? `Ticket costs €5,00` : `Ticket costs €12,00`);
let isStudent2 = false;
console.log(isStudent2 ? `Ticket costs €5,00` : `Ticket costs €12,00`);

// --------------------------------------------------------------------------------
// 08.01.2020 - 10
// Declare a variable named okMarie.
// Check if there is ‘cake’ - if so, print “Let them eat cake”.
// If not, print “Oh, bother”.

console.log(`
08.01.2020 - 10`);

function print(str1) {
    console.log(str1);
  }
  print("Marcelo");

let okMarie = "cak";
console.log(okMarie == "cake" ? `Let them eat cake` : `Oh, bother`);

let okMarie2 = "cake";
console.log(okMarie2 == "cake" ? `Let them eat cake` : `Oh, bother`);

let okMarie3 = "cake";
console.log(okMarie3.includes("cake") ? `Let them eat cake` : `Oh, bother`);

let okMarie4 = "Apple";
print(okMarie4 === "cake" ? `Let them eat cake` : `Oh, bother`);

// --------------------------------------------------------------------------------
// 09.01.2020 - 01
//Minimum and maximum
//a. Lowest Number
//Print out the lowest number between -1 and 4.
//b. Highest Number
//Print out the highest number between -1 and 4.

console.log(`
09.01.2020 - 01`);

console.log(Math.min(-1, 4));

console.log(Math.max(-1, 4));

// --------------------------------------------------------------------------------
// 09.01.2020 - 02
// Rounding
// a. Round up
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.
// b. Round down
// Round down the following numbers: 3321, 326.76, 76788.7, -9.78,

console.log(`
09.01.2020 - 02`);

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

console.log(`
09.01.2020 - 03`);

console.log(Math.floor( Math.random() * 6 ) + 1);
console.log(Math.random());                       // values between 0.01 and 0.99
console.log(Math.random() * 10);                  // values between 0.01 and 0.99
console.log(Math.floor(Math.random() * 10 + 1));  // values between 1 and 10

// --------------------------------------------------------------------------------
// 13.01.2020 - 01
// Nancy's income is 500 Euro per week. (1 year have 52 weeks)
// Ho much does Nancy makes every year?

console.log(`
13.01.2020 - 01`);

const nancySalary = 500 * 52;
console.log(`Nancy salary is ${nancySalary} Euro in one year`);

// --------------------------------------------------------------------------------
// 13.01.2020 - 02
// The number of hours Nancy worked over the last two weeks are
// 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Nancy's average hour?

console.log(`
13.01.2020 - 02`);

let nancyWorked = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(`The Nancy's average hour worked was ${nancyWorked}`);
//or
let nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage = nancyWorkingHours / 10;
console.log(nancyAverage);

// --------------------------------------------------------------------------------
// 13.01.2020 - 03
// A math student scored 75, 70, 85, 90, 100 on the first five tests he took.
// After he took his sixth math test, the average is now 85.
// What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

console.log(`
13.01.2020 - 03`);

let studentScored = 85 * 6;                           
console.log(studentScored);                           // 510
let studentSum = 75 + 70 + 85 + 90 + 100;
console.log(studentSum);                              // 420
console.log(studentScored - studentSum);              // 90
let studentSum2 = (75 + 70 + 85 + 90 + 100 + 90) / 6;
console.log(studentSum2);                             // 85
//or
let totalTest = 85 * 6;
let totalFifty = 75 + 70 + 85 + 90 + 100;
let sixthTest = totalTest - totalFifty;
console.log(`The sixth test result is ${sixthTest}`);

// --------------------------------------------------------------------------------
// 13.01.2020 - 04
// For James to get a 1st class degree, he needs to get an average of 80%
// in all 9 of his assessments.
// He has taken 8 assessments and his average is 78%.
// What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
// Expected output: James needs a minimum of --% to get an 80% average.

console.log(`
13.01.2020 - 04`);

let james1 = 9 * 80;          // 720
console.log(james1);
let james2 = 8 * 78;          // 624
console.log(james2);
console.log(james1 - james2); // 720 - 624 = 96
let james3 = james1 - james2;
console.log((78 * 8) + 96);   // 720
console.log(`James needs a minimum of ${james3}% to get an 80% average`);
console.log((78 + 78 + 78 + 78 + 78 + 78 + 78 + + 78 + 96) / 9);
//or
const totalScore = 80 * 9;
const currentAvg = 78 * 8;
let diffTotal = totalScore - currentAvg;
console.log(`James needs a minimum of ${diffTotal} to get an 80% average.`);

// --------------------------------------------------------------------------------
// 13.01.2020 - 05
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
// Print true if either of them are in the range.

console.log(`
13.01.2020 - 05`);

var m, n;
m = 51;
n = 100;
if ((m >= 50 && m <= 99) || (n >= 50 && n <= 99)) {       
    console.log(true);
} else {
    console.log(false);
}
//or
let int1 = 4;
let int2 = 50;
if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99))  {
    console.log("True")
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 06
// Check if three given integer values are in the range 50 to 99 (inclusive).
// Print true if one or more of them are in the range.

console.log(`
13.01.2020 - 06`);

var mm, nn, oo;
mm = 49;
nn = 99;
oo = 50;
if ((mm >= 50 && mm <= 99) || (nn >= 50 && nn <= 99) || (oo >= 50 && oo <= 99)) {       
    console.log(true);
} else {
    console.log(false);
}
// or
let int3 = 66;
if (
    (int1 >= 50 && int1 <= 99) ||
    (int2 >= 50 && int2 <= 99) ||
    (int3 >= 50 && int3 <= 99)
)
{
    console.log("True")
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 07
// Declare the variables a, b and c, and give them number values.
// Check which one out of the three variables has the
// largest value and print it to the console.
// Then change the values of the variables to see if your conditional still works.

console.log(`
13.01.2020 - 07`);

let aaa, bbb, ccc;
aaa = 11;
bbb = 2;
ccc = 3;
max = Math.max(aaa, bbb, ccc)
console.log(max);
//or
let a1, b1, c1;
a1 = 10;
b1 = 20;
c1 = 30;
console.log(Math.max(a1,b1,c1));

// --------------------------------------------------------------------------------
// 13.01.2020 - 08
// Create a new string adding “Py” in front of a given string.
// If the given string begins with “Py” then print the original string.

console.log(`
13.01.2020 - 08`);

let strOne = "Python";
if (strOne.substring(0,2) === "Py"){
    console.log(strOne);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 09
// Calculate the sum of the two integers.
// If the sum is in the range 50 to 80, print 65, otherwise print 80.

console.log(`
13.01.2020 - 09`);

let aaaa = 10;
let bbbb = 50;
let cccc = aaaa + bbbb;
if (cccc >= 50 && cccc <= 80){
    console.log(65);
} else{
    console.log(80);
}
//or
let sumInt = int1 + int2;
console.log(sumInt);
if ( sumInt >= 50 && sumInt <= 80){
    console.log(65);
} else {
    console.log(80);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 10
// Check whether the sum of two integers is 8,
// or whether their difference is 8.
// If one of these is the case, print true.

console.log(`
13.01.2020 - 10`);

let int4 = 3;
let int5 = 5;
let numDiff = Math.abs(int4 - int5);
let numSum = int4 + int5;
console.log(numDiff);
if ( numSum == 8  ||numDiff == 8){
    console.log(true);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 11
// Check whether either one of two integers is 15,
// or if their sum is 15. If one of these is the case,
// print true.

console.log(`
13.01.2020 - 11`);

let int7 = 5;
let int8 = 10;
let intSum = int7 + int8;
if (int7 == 15 || int8 == 15 || intSum == 15){
    console.log(true);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 12
// Check whether one of two integers is a
// multiple of 7 or 11. If so, print true.

console.log(`
13.01.2020 - 12`);

let number1 = 1;
let number2 = 7;
if (
    number1 % 7 == 0 ||
    number2 % 7 == 0 ||
    number1 % 11 == 0 ||
    number2 % 11 == 0
){
    console.log(true);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 13
// Calculate the sum of the two given integers.
// If the two values are the same,
// then print triple their sum.

console.log(`
13.01.2020 - 13`);

let int22 = 4;
let int21 = 3;
let numTrip = (int22 + int21) * 3;
if (int22 === int21){
    console.log(numTrip);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 14
// Calculate the difference between a specified number and 19.
// Print double the difference if the specified number is greater than 19.

console.log(`
13.01.2020 - 14`);

let numOne = 90;
let numDiff2 = Math.abs(numOne - 19);
let numDo = numDiff * 2;
if ( numDiff2 > 19 ){
    console.log(numDo);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 15
// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

console.log(`
13.01.2020 - 15`);

let firstName2 = "Marcelo";
let ageOne = 30;
if (ageOne < 13){
    console.log(`${firstName2} is a child`);
}
if (ageOne >= 13 && ageOne < 20){
    console.log(`${firstName2} is a teenager`);
}
if (ageOne >= 20 && ageOne < 30){
    console.log(`${firstName2} is a young adult`);
}
if (ageOne >= 30){
    console.log(`${firstName2} is a adult`);
}
//or
const ageTwo = "w";
if (ageTwo < 10) {
    console.log("he is boy");
} else if (ageTwo < 20) {
    console.log("he is teen");
} else if (ageTwo <= 30) {
    console.log("he is adult");
} else {
    console.log("it is not a number");
}
// or
const firstName3 = "Ali";
const ageThree = 22;
if (ageThree < 13) {
  console.log(`${firstName3} is a child`);
} else {
  if (ageThree < 20) {
    console.log(`${firstName3} is a teenager`);
  } else {
    if (ageThree < 30) {
      console.log(`${firstName3} is a young adult`);
    } else {
      if (ageThree >= 30) {
        console.log(`${firstName3} is an adult`);
      } else {
        console.log("Oi, put in a valid numeric age!");
      }
    }
  }
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 16
// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula:
// BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// 1 - Store Mark’s and John’s mass and height in variables.
// 2 - Calculate both their BMIs and store their BMIs in variables.
// 3 - Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4 - Print a string to the console containing the variable from step 3 using string interpolation.
// (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// 5 - Create an if statement which prints the name and BMI of the person with the highest BMI

console.log(`
13.01.2020 - 16`);

let markMass = 80;
let johnMass = 70;
let markHeight = 1.70;
let johnHeight = 1.75;
let bmiMark = (markMass / (markHeight * markHeight));
console.log(bmiMark.toFixed(2));
let bmiJohn = (johnMass / (johnHeight * johnHeight));
console.log(bmiJohn.toFixed(2));
let bmiDiff = bmiMark > bmiJohn ? true : false;
console.log(`Is Mark’s BMI higher than John’s? Why yes, it’s ${bmiDiff}, it is`);
if (bmiMark > bmiJohn){
    console.log((bmiMark).toFixed(2));
} else {
    console.log((bmiJohn).toFixed(2));
}

// --------------------------------------------------------------------------------
// 14.02.2020 - 01
// Let’s play mini FizzBuzz! For any given number, if the number is:
// divisible by 3, print “Fizz”.
// divisible by “5", print “Buzz”.
// divisible by both 3 and 5, print “FizzBuzz”.
// That is, if any of the above conditions apply, print the above words instead of the number.
// Otherwise, just print the number.

console.log(`
14.01.2020 - 01`);

const fizz = 15;

if (fizz % 3 == 0 && fizz % 5 == 0) { // or (fizz % 15 == 0)
    console.log("FizzBuzz");
} else if (fizz % 3 == 0) { 
    console.log("Fizz");
} else if (fizz % 5 == 0) {
    console.log("Buzz");
} else {
    console.log(`noooo ${fizz}`);
}

// --------------------------------------------------------------------------------
// 15.01.2020 - 01
// Declare two variables:
// “a” with the value of true,
// and “b” with the value of false.
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).
// 
// Declare three more variables “x”, “y”, “z”.
// Give these variables number values.
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

console.log(`
15.01.2020 - 01`);

var a = true;
var b = false;
console.log(  a && b  ? "true" : "false");
console.log(  a || b  ? "true" : "false");
console.log(!(a && b) ? "true" : "false");
var x = 9;
var y = 2;
var z = 1;
if (x > z && x > y){
    console.log("x is greater than z and y");
} else {
    console.log("x is less than or equal to z and/or y");
}
if (x !== y){
    console.log("x is not equal to y");
} else {
    console.log("x is equal to y");
}
if (z < y || z > x){
    console.log("z is less than y OR z is greater than x");
} else {
    console.log("z is greater than y AND less than x");
}
if (x == z || x !== y){
    console.log("x is equal to z OR x is NOT equal to y");
} else {
    console.log("x is NOT equal to z OR x is equal to y");
}
if (x >= 10 && y <= 10){
    console.log("x is greater than or equal to 10 AND y is less than or equal to 10");
} else {
    console.log("x is less than or not equal to 10 AND y is greater than or not equal to 10");
}
if ((x * z) < 100 || (x * y) > 100){
    console.log("x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.");
} else {
    console.log("x multiplied by z is greater than 100 OR whether x multiplied by y is less than 100.");
}

// --------------------------------------------------------------------------------
// 15.01.2020 - 02
// Calculate the perimeter of a square.
// Assume each side is 4.75cm.

console.log(`
15.01.2020 - 02`);

var squareSides = 4.75;
var perimeter = 4 * 4.75;
console.log(`The perimeter of a square where each side has ${squareSides}cm is ${perimeter}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 03
// Calculate the perimeter of a triangle.
// Assume the length of the sides are 5cm, 6cm (base), 7cm.

console.log(`
15.01.2020 - 03`);

var triangleSide1 = 5;
var triangleSide2 = 6;
var triangleSide3 = 7;
var trianglePerimeter = triangleSide1 + triangleSide2 + triangleSide3;
console.log(`The triangle perimeter is ${trianglePerimeter}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 04 
// Calculate the area of a square.
// Each side is 5cm.

console.log(`
15.01.2020 - 04`);

var squareSides2 = 5;
var squareArea = squareSides2 ** 2;
console.log(`The square area is ${squareArea}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 05
// Calculate the area of a triangle.
// Assume the length of the sides are 5cm, 6cm (base), 7cm.
// (this is a right triangle)
// (area of triangle is base length multiplied by height or altitude of the triangle and divided by 2)

console.log(`
15.01.2020 - 05`);

var triangleSideA = 5;  // assumed as the height of the triangle
var triangleSideB = 6;   
var triangleSideC = 7;
var triangleArea = (triangleSideB * triangleSideA) / 2;
console.log(`The triangle area is ${triangleArea}cm`);

// --------------------------------------------------------------------------------
// 15.01.2020 - 06
// Calculate the volume of a cube. 
// Length of each side is 9cm.

console.log(`
15.01.2020 - 06`);

var lengthCubeSides = 9;
var cubeVolume = lengthCubeSides ** 3;
console.log(`The cube volume is ${cubeVolume}cm`); 

// --------------------------------------------------------------------------------
// 15.01.2020 - 07
// Calculate the three bills including tips:
// €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

console.log(`
15.01.2020 - 07`);

var bill1 = (22.35 * (0.10 + 1));
console.log(bill1.toFixed(2));
var bill2 = (26.67 * (0.15 + 1));
console.log(bill2.toFixed(2));
var bill3 = (35.92 * (0.20 + 1));
console.log(bill3.toFixed(2));
var total = bill1 + bill2 + bill3;
console.log(`The total with tips is ${total.toFixed(2)}`);

// --------------------------------------------------------------------------------
// 16.01.2020 - 01
// Addition.
// Write a program to add up the numbers 1 to 20.

console.log(`
16.01.2020 - 01`);

let  counterSum = 0;
for (let i = 1; i <= 20; i++){
    counterSum += i;     // 0 = 0 + 1, 0 = 0 + 2 ... 0 = 0 + 20
}
console.log(counterSum); // 1 + 2 + 3 ... + 20

// --------------------------------------------------------------------------------
// 16.01.2020 - 02
// There are "i" bottles of beer on the wall.
// Write a program that will output, “There is one bottle of beer on the wall.”
// “There are two bottles of beer on the wall” up until there are five bottles.

console.log(`
16.01.2020 - 02`);

for (let i = 1; i <= 1; i++){
    console.log(`There is ${i} bottle of beer on the wall.`);
} for (let i = 2; i <= 5; i++){
    console.log(`There are ${i} bottles of beer on the wall.`);
}
//or
let text = "of beer on the wall";
for (let i = 1; i <= 5; i++){
    if (i == 1){
        console.log(`There is ${i} bottle ${text}`);
    } else {
        console.log(`There is ${i} bottles ${text}`);
    }
}
//or
let text2 = "of beer on the wall";
for (let i = 1; i <= 5; i++){
    if (i > 1){
        console.log(`There is ${i} bottles ${text2}`);
    } else {
        console.log(`There is ${i} bottle ${text2}`); 
    }
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 03
// The odd/even reporter.
// Write a program that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd,
// and report that to the screen (e.g. “2 is even”).

console.log(`
16.01.2020 - 03`);

for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log(`${i} is even`);
    } else if (i % 2 != 0) {
        console.log(`${i} is odd`);
    }     
}
//or
for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log(`${i} is even`);
    } 
    if (i % 2 == 1){
        console.log(`${i} is odd`);       
    }
}

//
for(let i = 0; i <= 10; i++){
    console.log("Hadi");
}
console.log("Hadi \n".repeat(10));

// --------------------------------------------------------------------------------
// 16.01.2020 - 04
// Show the drawing below using "console.log".
// YYYY
// YYYY
// YYYY
// YYYY
// YYYY

console.log(`
16.01.2020 - 04`);

let box = "";
for (let i = 0; i <= 4; i++){
    box += "YYYY \n";
}
console.log(box);

// --------------------------------------------------------------------------------
// 16.01.2020 - 05
// Show the sequence below using "console.log".
// 1, 2, 4, 8... 128

console.log(`
16.01.2020 - 05`);

let i = 0.5;
do {
  i = i * 2       // i = 1 * 2, i = 2 * 2, i = 4 * 2...
  console.log(i);
} while (i < 128);

// --------------------------------------------------------------------------------
// 16.01.2020 - 06
// Show the sequence below using "console.log".
// 0, 2, 4... 10

console.log(`
16.01.2020 - 06`);

i = -2;
do {
  i = i + 2
  console.log(i);
} while (i < 10);

// --------------------------------------------------------------------------------
// 16.01.2020 - 07
// Show the sequence below using "console.log".
// 3, 6, 9 ... 15

console.log(`
16.01.2020 - 07`);

i = 0;
do {
  i = i + 3
  console.log(i);
} while (i < 15);

// --------------------------------------------------------------------------------
// 16.01.2020 - 08
// Show the sequence below using "console.log".
// 9, 8, 7... 0

console.log(`
16.01.2020 - 08`);

i = 10;
do {
  i = i - 1
  console.log(i);
} while (i >= 1);

// --------------------------------------------------------------------------------
// 16.01.2020 - 09
// Show the sequence below using "console.log".
// 1 1 1 2 2 2 3 3 3 4 4 4

console.log(`
16.01.2020 - 09`);

for (let i = 1; i <= 4; i++){   // 1 1 1 2 2 2 3 3 3 4 4 4
    for (let j = 1; j <= 3; j++){ // 1 2 3 1 2 3 1 2 3 1 2 3
      console.log(i);
    }
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 10
// Show the sequence below using "console.log".
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

console.log(`
16.01.2020 - 10`);

for (let i = 1; i <= 3; i++){  
    for (let j = 0; j <= 4; j++){ 
      console.log(j);
    }
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 11
// Show the drawing below using "console.log".
//T
//TT
//TTT
//TTTT
//TTTTT

console.log(`
16.01.2020 - 11`);

x = ``;
for (let i = 1; i <= 5; i++){
  x += `T`;
  console.log(x);
}

// --------------------------------------------------------------------------------
// 16.01.2020 - 12
// Show the drawing below using "console.log".
//@@@@@
//@@@@
//@@@
//@@
//@

console.log(`
16.01.2020 - 12`);

x = `@@@@@@`;
for (let i = 1; i <= 5; i++){
  x = x.slice(1);
  console.log(x);
}   
console.log(`
or
`);
x = `@@@@@@`;
for (let i = 1; i <= 5; i++){
  x = x.substring(1);
  console.log(x);
}

// --------------------------------------------------------------------------------
// 20.01.2020 - 01
// Declare a variable named “euroCities”
// and assign an array to the variable e.g.
// [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
// Declare another variable and
// assign the second item of the array as a value.

console.log(`
20.01.2020 - 01`);

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
let euroCity = euroCities[1];
console.log(euroCity);

// --------------------------------------------------------------------------------
// 20.01.2020 - 02
// Change the first item in the array to “Berlin”.
// *change = new assignment

console.log(`
20.01.2020 - 02`);

euroCities[0] = `Berlin`;
console.log(euroCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 03
// Print the length of the array “euroCities”.

console.log(`
20.01.2020 - 03`);

console.log(euroCities.length);

// --------------------------------------------------------------------------------
// 20.01.2020 - 04
// Remove the last item of the array “euroCities”.

console.log(`
20.01.2020 - 04`);

euroCities.pop()
console.log(euroCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 05
// Use an array method to add “Budapest” to the euroCities array.

console.log(`
20.01.2020 - 05`);

euroCity = "Budapest";
euroCities.push(euroCity);
console.log(euroCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 06
// Create another variable named asianCities
// and assign an array of at least 5 cities to the variable.

console.log(`
20.01.2020 - 06`);

const asianCities = ["Tokyo", "Jakarta", "Delhi", "Karachi", "Seoul"];
//                      0        1          2        3           4
// human language       1        2          3        4           5
console.log(asianCities);

// --------------------------------------------------------------------------------
// 20.01.2020 - 07
// Use an array method to select items 2-4 (human language) from the array of asianCities
// and store this in another variable.

console.log(`
20.01.2020 - 07`);

let newArray = asianCities.splice(1, 3);
console.log(newArray); // [ "Jakarta", "Delhi", "Karachi" ]

// --------------------------------------------------------------------------------
// 20.01.2020 - 08
// sumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.

console.log(`
20.01.2020 - 08`);

let intArr = [2, 4, 5, 7];
let result = 0;
let product = 1;
for (let i = 0; i < intArr.length; i++){
    result += intArr[i];
    product *= intArr[i];
}
console.log(`The sum for your Array is ${result}, The product of your Array is ${product}`);

// --------------------------------------------------------------------------------
// 20.01.2020 - 09
// Hello Friend Create an array filled with your friends’ and family’s names.
// Loop over the array and greet each friend
// e.g. Hello Maria! Hello Mike! etc.
// Bonus: Print the indexes of each item in the array.
// Expected output example: Mike is at index 1 of my friends array.

console.log(`
20.01.2020 - 09`);

const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++){ //or "for (let i = 0; i <= names2.length -1; i++){"
    console.log(`Hello ${names2[i]}, and he is index ${i} of Names array`);
}

// --------------------------------------------------------------------------------
// 20.01.2020 - 10
// City Names.
// Create an array of city names.
// Loop through the array and add the city names to a string.
// Example of expected output: Berlin, Paris, Prague, Rome.

console.log(`
20.01.2020 - 10`);

const cityNames = ["Berlin", "Paris", "Miami", "Dubai"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++){
    cityNamesStr += cityNames[i];
    if (i == cityNames.length -1){
        cityNamesStr += "."
    } else {
        cityNamesStr += ", "
    }
}
console.log(cityNamesStr);

// --------------------------------------------------------------------------------
// 20.01.2020 - 11
// Odds and Evens.
// Create a program that changes a given array by adding
// 1 to each odd integer and subtracting 1 from each even integer.
// Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

console.log(`
20.01.2020 - 11`);

let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(numArr);

// --------------------------------------------------------------------------------
// 20.01.2020 - 12
// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names.
// Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

console.log(`
20.01.2020 - 12`);

const arrNames = ["sAra", "alI", "nanCy"];
for (let i = 0; i < arrNames.length; i++){
    arrNames[i] = arrNames[i][0].toUpperCase() + arrNames[i].substring(1).toLowerCase();
    // arrNames [i][0] = "sara"
}
console.log(arrNames);

// --------------------------------------------------------------------------------
// 21.01.2020 - 01
// Reverse the string: “JavaScript”.

console.log(`
21.01.2020 - 01`);

const str111 = "JavaScript";
let strToArr = str111.split("")
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);

// --------------------------------------------------------------------------------
// 21.01.2020 - 02
// Make an array of your siblings’ names or your favorite movie characters’ names.

console.log(`
21.01.2020 - 02`);

const coolNames1 = ["Ali" , "Hadi", "Olga", "Nancy"];

// --------------------------------------------------------------------------------
// 21.01.2020 - 03
// Make an array of your parents’ names.

console.log(`
21.01.2020 - 03`);

const coolNames2 = ["A" , "B", "C", "D"];

// --------------------------------------------------------------------------------
// 21.01.2020 - 04
// Combine these two arrays.

console.log(`
21.01.2020 - 04`);

const arrTotal3 = coolNames1.concat(coolNames2);
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 05
// Add your pets’ names.

console.log(`
21.01.2020 - 05`);

arrTotal3.push("Dyson");
arrTotal3.push("Sofi");
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 06
// Reverse the order of the array.

console.log(`
21.01.2020 - 06`);

arrTotal3.reverse();
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 07
// Access one of your parents’ names.

console.log(`
21.01.2020 - 07`);

let mom = arrTotal3[2];
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 21.01.2020 - 08
// Update the name of one of your parents.

console.log(`
21.01.2020 - 08`);

mom = "Katy"
arrTotal3[2] = mom;
console.log(arrTotal3);

// --------------------------------------------------------------------------------
// 22.01.2020 - 01
// Amplify the Multiples of 4.
// Create a function that takes an integer
// and returns an array of integers ascending from 1 to the given number, where:
// - For each number in the array that can be evenly divided by 4,
// that number is amplified by 10 (i.e. return 10 times the number).
// - If the number cannot be divided evenly by 4, simply return the number.
// - The given integer will always be equal to or greater than 1.
// - Include the given number (the number in the parameters).
// Examples:
// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160,
// 17, 18, 19, 200, 21, 22, 23, 240, 25]

console.log(`
22.01.2020 - 01`);

function amp (num){ // or "const amp = num => {""
    let result = [];
    let ampByTen = 0;
    for (let i = 1; i <= num; i++){
        if (i % 4 == 0){
            ampByTen = i * 10;
            result.push(ampByTen);
        } else {
            result.push(i);
        }
    }
    return result;
}
console.log(amp(4));

// --------------------------------------------------------------------------------
// 22.01.2020 - 02
// One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
// Examples:
// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

console.log(`
22.01.2020 - 02`);

function unique (arr){
    let currentValue = 0;
    let current = [];
    let remainder = [];
    for (let i = 0; i < arr.length; i++){
        if (current.length === 0 || current[0] == arr[i]) {
            current.push(arr[i]);
            currentValue++;
        } else if (current[0] !== arr[i]) {
            remainder.push(arr[i]);
        }
        }
        if (currentValue === 1) {
            return current[0];
        } else {
            return remainder[0];
        }
    }
let numArray = [1, 1, 1, 2, 1, 1];
console.log(unique(numArray));

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

console.log(`
23.01.2020 - 01`);

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

console.log(`
23.01.2020 - 02`);

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

console.log(`
23.01.2020 - 03`);

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

console.log(`
27.01.2020 - 01`);

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
27.01.2020 - 02`);

function mul1 (x, y){
    return x * y;    
}
console.log(mul1(2, 3));

// --------------------------------------------------------------------------------
// 27.01.2020 - 03
// Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

console.log(`
27.01.2020 - 03`);

const mul2 = function (x, y){
    return x * y;
}
console.log(mul2(2, 3));

// --------------------------------------------------------------------------------
// 27.01.2020 - 04
// Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

console.log(`
27.01.2020 - 04`);

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
27.01.2020 - 05`);

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

console.log(`
27.01.2020 - 06`);

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

console.log(`
27.01.2020 - 07`);

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

console.log(`
27.01.2020 - 08`);

function exponent(starterNum, exponent) {
    let result = 0;
    let multi = starterNum * starterNum;
    for (i = 0; i < exponent; i++){
        result += multi;
    }
    return result;
}
console.log(exponent(3, 2));

// --------------------------------------------------------------------------------
// 27.01.2020 - 09
// Create a function howManyArgs which returns the total amount of arguments passed to it.

console.log(`
27.01.2020 - 09`);

const howManyArgs = (...args) => console.log(args.length);
howManyArgs(3, 4, 4, 5, 6, 7, 88, 98, 9, 30, 11);

// --------------------------------------------------------------------------------
// 27.01.2020 - 10
// Create a function average which accepts any amount of numbers and returns their mean average.

console.log(`
27.01.2020 - 10`);

function average (...args) {
    let array = args;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    result = result / array.length;
    return `The function has ${array.length} arguments and the average is ${result.toFixed(2)}`;
  }
  console.log(average(5, 6, 7, 10, 2, 5, 7, 35));

// --------------------------------------------------------------------------------
// 28.01.2020 - 01
// Create a function that looks inside a givin string
// if it has the word (JavaScript) if so print "I know it's crazy 😉".

console.log(`
28.01.2020 - 01`);

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
28.01.2020 - 02`);

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
28.01.2020 - 03`);

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
28.01.2020 - 04`);

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
28.01.2020 - 05`);

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
28.01.2020 - 06`);

const exponent2 = (num111, exp) => {
    let result = 1; 
    for (let i = 0; i < exp; i++) {
        result *= num111 ** exp;
        return result
      }
  result = num111 * num111;
  return result;
};
console.log(exponent2(3, 3));  // 27
console.log(exponent2(3));     // 9
console.log(exponent2(2, 4));  // 16
console.log(exponent2(2));     // 4
console.log(exponent2(3));     // 9
console.log(exponent2(3, 5));  // 243

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
28.01.2020 - 07`);

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
28.01.2020 - 08`);

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
28.01.2020 - 09`);

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
28.01.2020 - 10`);

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
28.01.2020 - 11`);

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
28.01.2020 - 12`);

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
28.01.2020 - 13`);

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
28.01.2020 - 14`);

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
28.01.2020 - 15`);

function characterNumber (string) {
    let newArray = string.split(" ").join('').split("").length;
    console.log(newArray);
}
characterNumber("Number of characters");
characterNumber("Number of characters without spaces");

// --------------------------------------------------------------------------------
// 29.01.2020 - 01
// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary 
// For two kids subtract 25%
// and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

console.log(`
29.01.2020 - 01`);

function salaryTaxes (userName, salary, ...kidsNames) {
    if (kidsNames.length === 1) {
        newSalary = (salary - (salary * 0.30));
        result = `${userName} is the father of ${kidsNames}. His salary subtracting 30% of taxes is ${newSalary.toFixed(2)} EUR.`;
    } else if (kidsNames.length == 2) {
        newSalary = (salary - (salary * 0.25));
        result = `${userName} is the father of ${kidsNames.join(" and ")}. His salary subtracting 25% of taxes is ${newSalary.toFixed(2)} EUR.`;
    } else if (kidsNames.length > 2) {
        newSalary = (salary - (salary * 0.20));
        result = `${userName} is the father of ${kidsNames.join(", ")}. His salary subtracting 20% of taxes is ${newSalary.toFixed(2)} EUR.`;
    } else if (kidsNames.length === 0) {
        newSalary = (salary - (salary * 0.55));
        result = `${userName} does not have kids. His salary subtracting 55% of taxes is ${newSalary.toFixed(2)} EUR.`;
    }
    return result;
}
console.log(salaryTaxes("Marcelo", "4166.66", "Marco"));
console.log(salaryTaxes("Marcelo", "4166.66", "Marco", "Elisa"));
console.log(salaryTaxes("Marcelo", "4166.66", "Marco", "Elisa", "Isabel"));
console.log(salaryTaxes("Marcelo", "4166.66"));

// --------------------------------------------------------------------------------
// 29.01.2020 - 02
// Create a function that receive a text from user
// and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

console.log(`
29.01.2020 - 02`);

function phoneNumber (arg) {
    let newArg = arg.slice(0,3);
    //console.log(newArg);
    if (newArg === "030" || newArg === "017" && !isNaN(arg) && arg.length === 10) {
    //console.log(arg.length);    
        result = arg;
    } else {
        result = "Please, put a valid phone number with 10 digits without spaces"
    }
    return result
 }
 console.log(phoneNumber("0171234567"));
 console.log(phoneNumber("0301234567"));
 console.log(phoneNumber("0181234567"));
 console.log(phoneNumber("1311234567"));
 console.log(phoneNumber("01712345678"));

// --------------------------------------------------------------------------------
// 29.01.2020 - 03
// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with DE and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

console.log(`
29.01.2020 - 03`);

function bankAccount (arg) {
    let newArg = arg.toUpperCase().slice(0,2);
    //console.log(newArg);
    if (newArg === "DE" && arg.length === 22) {   
        result = "This is a valid German bank account.";
    } else {
        result = "Please, put a valid German bank account.";
    }
    return result
 }
 console.log(bankAccount("DE12345678901234567890"));
 console.log(bankAccount("de12345678901234567890"));
 console.log(bankAccount("De12345678901234567890"));
 console.log(bankAccount("Da12345678901234567890"));
 console.log(bankAccount("DE123456789012345678901"));

// --------------------------------------------------------------------------------
// 30.01.2020 - 01
// Write a function will give the alphabetical order for a passed character
// i.e.
// A -> 1
// B -> 2

console.log(`
30.01.2020 - 01`);

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

// --------------------------------------------------------------------------------
// 03.02.2020 - 01
// Write a function add that uses a closure that performs
// addition on arguments in two separate function calls.
// e.g.
// add(2)(3)

console.log(`
03.02.2020 - 01`);

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
03.02.2020 - 02`);

function multiplier(num) {        // outer function
  
    return x => x * num;          // inner function
  }
  const times = multiplier(2);      // num = 2
  console.log(times(5));            // x   = 5 // 2 * 5 -> // expected output: 10
  console.log(times(6));            // x   = 6 // 2 * 6 -> // expected output: 12
  //or
  const times2 = multiplier(2)(5);  // num = 2 // x = 5 // 2 * 5 -> // expected output: 10
  console.log(times2);

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
03.02.2020 - 03`);

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

// --------------------------------------------------------------------------------
// 04.02.2020 - 01
// Object Person.
// Create an object named person.
// Loop through the object and print both the property and value of the object.

console.log(`
04.02.2020 - 01`);

const person2 = {
    name: "Marcelo",
    age: 39,
    birthYear: 1980,
};

for (let [key, value] of Object.entries(person2)) {
    console.log(`${key} : ${value}`);
}

//or

for (let prop in person2) {
    console.log(`person.${prop} : ${person2[prop]}`)
}

// Object.assign
const obj1 = { 1 : 2, 2 : 300 };
const obj2 = { 1 : 4, 3 : 3224 };
const totalObj = Object.assign({4: 55}, obj1, obj2);
console.log(totalObj);  // expected output: { '1': 4, '2': 300, '3': 3224, '4': 55 }
const totalObj2 = Object.assign({2: 55}, obj1, obj2); 
console.log(totalObj2); // expected output: { '1': 4, '2': 300, '3': 3224 }
const totalObj3 = Object.assign({2: 55}, obj1, obj2, {5: 1}); 
console.log(totalObj3); // expected output: { '1': 4, '2': 300, '3': 3224, '5': 1 }
const totalObj4 = Object.assign({ name: "Nancy" }, obj1, obj2); 
console.log(totalObj4); // expected output: { '1': 4, '2': 300, '3': 3224, name: 'Nancy' }

// --------------------------------------------------------------------------------
// 04.02.2020 - 02
// Get Values.
// Create a function that returns an array of all values of an object’s properties.
/*
getObjectValues({
choice1: "tea",
choice2: "coffee",
choice3: "milk"
})
*/
// Expected output:
// ["tea", "coffee", "milk"]

console.log(`
04.02.2020 - 02`);

const newPerson1 = {
    name: "Marcelo",
    age: 39,
    city: "Berlin"
};

const getValues = (object) => {
    return Object.values(object)
};
console.log(getValues(newPerson1));

// --------------------------------------------------------------------------------
// 04.02.2020 - 03
// Add A Method. 
// Create an object and add a method to that object which prints the values of the objects in a string.
// Example
/*
let person = {
  firstName: "Ali",
  job: "painter",
  age: 20, 
  city: "Berlin"
}
*/
// Example of Expected Output “Ali is a 20 years old and lives in Berlin”.

console.log(`
04.02.2020 - 03`);

const newPerson2 = {
    name: "Marcelo",
    age: 39,
    city: "Berlin"
};

newPerson2.printOut = () => {
    return `${newPerson2.name} is a ${newPerson2.age} years old and lives ${newPerson2.city}`;
};
console.log(newPerson2.printOut());

// --------------------------------------------------------------------------------
// 04.02.2020 - 04
// List Properties.
// Create a function that returns an array of properties of a javascript object.
// Example
/*
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
*/
// Expected output:
// ["name", "class", "course"]

console.log(`
04.02.2020 - 04`);

const student = {
    name: "Marcelo",
    class: "FbW-26",
    course: "Web Development"
};
console.log(Object.getOwnPropertyNames(student));

student.printOut = () => {
    return Object.getOwnPropertyNames(student);
};
console.log(student.printOut());

//or

const person = {
    name: "Zain",
    age: 20,
    birthYear: 2000,
    city: "Berlin",
    print: function() {
        console.log(` this user ${person.name} his born in ${person.birthYear} `);
    },
    old: () => {
        return 2020 - person.birthYear;
    }
};

const getProperties = (obj) => {
    return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person));

// --------------------------------------------------------------------------------
// 04.02.2020 - 05
// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// (use Objects and Functions)

console.log(`
04.02.2020 - 05`);

function countLetters(str) {
    let arr = str.split("");
    console.log(arr);
    let result = {};
    function countOccurrences(string, letter) {
      let counter = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
          counter++;
        }
      }
      return counter;
    }
    for (let i = 0; i < arr.length; i++) {
      let currentChar = arr[i];
      result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
    }
    return result;
  }
console.log(countLetters("ABC"));
console.log(countLetters("ABCCCCCDAAGG"));
console.log(countLetters("345122235gnmttG"));

// --------------------------------------------------------------------------------
// 05.02.2020 - 01
// Merge.
// Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

console.log(`
05.02.2020 - 01`);

let first = {firstName: "John"};
let last = {lastName: "Smith"};
let fullName = Object.assign(first, last);
console.log(fullName);    // expected output: { firstName: 'John', lastName: 'Smith' }

// with function

const fun = (x, o) => {
    return Object.assign(x,o);
};
const o1 = {firstName: "John"};
const o2 = {lastName: "Smith"};
console.log(fun(o1, o2)); // expected output: { firstName: 'John', lastName: 'Smith' }

// with Spread-Operator/Spread-Syntax
const fun2 = (x, o) => {
    return { ...x, ...o};;
};
console.log(fun2({ firstName: "Marcelo"}, { lastName: "Peralta"},));

// --------------------------------------------------------------------------------
// 05.02.2020 - 02
// Zodiac signs
// Create and object that receives: user name, birthday, birth month, birth year.
// Show what is the zodiac signs.
//
// from 20.01 to 18.02 = "Aquarius"
// from 19.02 to 20.03 = "Pisces"
// from 21.03 to 19.04 = "Aries"
// from 20.04 to 20.05 = "Taurus"
// from 21.05 to 20.06 = "Gemini"
// from 21.06 to 22.07 = "Cancer"
// from 23.07 to 22.08 = "Leo"
// from 23.08 to 22.09 = "Virgo"
// from 23.09 to 22.10 = "Libra"
// from 23.10 to 21.11 = "Scorpio"
// from 22.11 to 21.12 = "Sagittarius"
// from 22.12 to 19.01 = "Capricorn"
/*
function zodiac(name, day, month, year) {
const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    };
    return result;
}
console.log(zodiac("Marcelo", "31", "10", "1980"));
*/

console.log(`
05.02.2020 - 02`);

// v1

console.log(`
Zodiac v1:
`);

let day = 31;
let month = 10;
       if (month <= 12 && month ==  1 && day >= 20 && day <= 31 || month ==  2 && day <= 18) { // from 20.01 to 18.02 = "Aquarius"
    console.log("Aquarius");
} else if (month <= 12 && month ==  2 && day >= 19 && day <= 29 || month ==  3 && day <= 20) { // from 19.02 to 20.03 = "Pisces"
    console.log("Pisces");
} else if (month <= 12 && month ==  3 && day >= 21 && day <= 31 || month ==  4 && day <= 19) { // from 21.03 to 19.04 = "Aries"
    console.log("Aries");
} else if (month <= 12 && month ==  4 && day >= 20 && day <= 30 || month ==  5 && day <= 20) { // from 20.04 to 20.05 = "Taurus"
    console.log("Taurus");
} else if (month <= 12 && month ==  5 && day >= 21 && day <= 31 || month ==  6 && day <= 20) { // from 21.05 to 20.06 = "Gemini"
    console.log("Gemini");
} else if (month <= 12 && month ==  6 && day >= 21 && day <= 30 || month ==  7 && day <= 22) { // from 21.06 to 22.07 = "Cancer"
    console.log("Cancer");
} else if (month <= 12 && month ==  7 && day >= 23 && day <= 31 || month ==  8 && day <= 22) { // from 23.07 to 22.08 = "Leo"
    console.log("Leo");
} else if (month <= 12 && month ==  8 && day >= 23 && day <= 31 || month ==  9 && day <= 22) { // from 23.08 to 22.09 = "Virgo"
    console.log("Virgo");
} else if (month <= 12 && month ==  9 && day >= 23 && day <= 30 || month == 10 && day <= 22) { // from 23.09 to 22.10 = "Libra"
    console.log("Libra");
} else if (month <= 12 && month == 10 && day >= 23 && day <= 31 || month == 11 && day <= 21) { // from 23.10 to 21.11 = "Scorpio"
    console.log("Scorpio");
} else if (month <= 12 && month == 11 && day >= 22 && day <= 30 || month == 12 && day <= 21) { // from 22.11 to 21.12 = "Sagittarius"
    console.log("Sagittarius");
} else if (month <= 12 && month == 12 && day >= 22 && day <= 31 || month ==  1 && day <= 19) { // from 22.12 to 19.01 = "Capricorn"
    console.log("Capricorn");
} else {
    console.log("Please, put a valid date");
}

// v2

console.log(`
Zodiac v2:
`);

function zodiac (name, birthday, month, year) {
  
  let result = {

    userName: name,
    birthDay: birthday,
    birthMonth: month,
    birthYear: year,
    
    printOut: function () {

      let signs = [
        '', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
      // 0,           1,          2,        3,       4,        5,        6,
        'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn' 
      //       7,     8,       9,      10,        11,            12,         13,
      ];

      let lastDay = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
      //              0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13

               if (birthday > lastDay[month] && birthday >= 1 && month >= 1 && month <= 12) {

            return `${name} was born ${birthday}.${month}.${year} and then your sign is ${signs[month + 1]}`;

        } else if (birthday < lastDay[month] && birthday >= 1 && month >= 1 && month <= 12) {

            return `${name} was born ${birthday}.${month}.${year} and then your sign is ${signs[month]}`;

        } else {

            return "Please, write a valid date";
        }
     }
  };
//console.log(result);
  return result.printOut();

}
console.log(zodiac("Marcelo", 31, 10, 1980));  // expect output: Marcelo was born 31.10.1980 and then your sign is Scorpio
console.log(zodiac("Priscila", 15, 12, 1988)); // expect output: Priscila was born 15.12.1988 and then your sign is Sagittarius
console.log(zodiac("Hadi", 1, 9, 1989));       // expect output: Hadi was born 1.9.1989 and then your sign is Virgo
console.log(zodiac("Test", 0, 12, 1988));      // expect output: Please, write a valid date
console.log(zodiac("Test", 15, 13, 1988));     // expect output: Please, write a valid date

// v3 - teacher Hadi's partial solution

console.log(`
Zodiac v3:
`);

// function zodiac1(name, day, month, year) {
//   const result = {
//     userName: name,
//     birthDay: day,
//     birthMonth: month,
//     birthYear: year,
//     yourZodiac: function() {
//       let singNames = [
//         "Capricorn",
//         "Aquarius",
//         "Pisces",
//         "Aries",
//         "Taurus",
//         "Gemini",
//         "Cancer",
//         "Leo",
//         "Virgo",
//         "Libra",
//         "Scorpio",
//         "Sagittarius",
//         "Capricorn"
//       ];
//  
//       let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
// // do something 🤓
// return `Hey ${this.userName}, your zodiac sing is ${yourZodiac}`;
//     }
//   };
//   return result.yourZodiac();
// }
// console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way");

// v3 - teacher Hadi's solution

function zodiac1(name, day, month, year) {
    const result = {
      userName: name,
      birthDay: day,
      birthMonth: month,
      birthYear: year,
      yourZodiac: function() {
        let singNames = [
          "Capricorn",
          "Aquarius",
          "Pisces",
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn"
        ];
        let userBDay = parseInt(this.birthDay);
        let month = parseInt(this.birthMonth);
        let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        let yourZodiacName =
          userBDay > endsAt[month] ? singNames[month] : singNames[month - 1];
        return `Hey ${this.userName}, your zodiac sing is ${yourZodiacName}`;
      }
    };
    return result.yourZodiac();
  }
  console.log(zodiac1("Hadi", "01", "09", "1989") + " (2nd way)");

// --------------------------------------------------------------------------------
// 06.02.2020 - 01
// Which is the first animal with more than three letters?
// const animals = ["cat", "bird", "dog", "worm"]

console.log(`
06.02.2020 - 01`);

const animals = ["cat", "bird", "dog", "worm"]
console.log(animals.find(e => e.length > 3));

// --------------------------------------------------------------------------------
// 06.02.2020 - 02
// Find all animals with more than three letters.
// const animals = ["cat", "bird", "dog", "worm"]

console.log(`
06.02.2020 - 02`);

const animals2 = ["cat", "bird", "dog", "worm"]
console.log(animals2.filter(e => e.length > 3));

// --------------------------------------------------------------------------------
// 06.02.2020 - 03
// Switch Keys and Values.
// Create a function to get a copy of an object.
// The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

console.log(`
06.02.2020 - 03`);

let person3 = {
    name: "Ali",
    job: "teacher"
};
function keysToValue (obj) {
    const keysValuesPair = Object.entries(obj);
    console.log(keysValuesPair);
    let reversArr = [];
    for (let i = 0; i < keysValuesPair.length; i++) {
        reversArr.push(keysValuesPair[i].reverse())
    }
    console.log(reversArr);
    console.log(Object.fromEntries(reversArr));
    return Object.fromEntries(reversArr);
}
console.log(keysToValue(person3));

// --------------------------------------------------------------------------------
// 10.02.2020 - 01
// Check if a number is within a given range.
// Write a program that checks if a number is within the range of an object's min and max properties.
// Assume min <= max is always true.
// Examples:
// (4, { min: 0, max: 5 })  ➞ true
// (4, { min: 4, max: 5 })  ➞ true
// (4, { min: 6, max: 10 }) ➞ false
// (5, { min: 5, max: 5 })  ➞ true

console.log(`
10.02.2020 - 01`);

console.log(`
v1:
`)

function checkNumber (number) {
    let range = {
        min: 0,
        max: 5,
        printOut: function () {
            if (number >= this.min && number <= this.max) {
                return true
            } else {
                return false
            }
        }
    };
    return range.printOut()
}
console.log(checkNumber(4));            // expect output: true
console.log(checkNumber(6));            // expect output: false
console.log(checkNumber(-1));           // expect output: false

console.log(`
v2:
`)

function checkNumber2 (rangeMin, rangeMax, number) {
    let range = {
        min: rangeMin,
        max: rangeMax,
        printOut: function () {
            if (number >= this.min && number <= this.max) {
                return true
            } else {
                return false
            }
        }
    };
    return range.printOut()
}
console.log(checkNumber2(0, 5, 4));     // expect output: true
console.log(checkNumber2(4, 5, 4));     // expect output: true
console.log(checkNumber2(6, 10, 4));    // expect output: false
console.log(checkNumber2(5, 5, 5));     // expect output: true

console.log(`
v3:
`)

let objRa = {min: 10, max: 11}
function fun3 (num, obj) {
    return num >= obj.min && num <= obj.max;
}
console.log(fun3(4, { min: 0, max: 5 })); // expect output: true
console.log(fun3(4, objRa));              // expect output: false

// --------------------------------------------------------------------------------
// 10.02.2020 - 02
// Scrabble.
// Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 } ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

console.log(`
10.02.2020 - 02`);

console.log(`
v1:
`)

let initialValue = 0;
let maximumScore = [ 
    { tile: "N", score: 1 },  // 0 
    { tile: "K", score: 5 },  // 1 
    { tile: "Z", score: 10 }, // 2 
    { tile: "X", score: 8 },  // 3 
    { tile: "D", score: 2 },  // 4 
    { tile: "A", score: 1 },  // 5 
    { tile: "E", score: 1 }   // 6 
    ].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score
    }, initialValue)
console.log(maximumScore);      // expect output: 28

console.log(`
v2:
`)

let maximumScore2 = [ 
    { tile: "N", score: 1 },  // 0 
    { tile: "K", score: 5 },  // 1 
    { tile: "Z", score: 10 }, // 2 
    { tile: "X", score: 8 },  // 3 
    { tile: "D", score: 2 },  // 4 
    { tile: "A", score: 1 },  // 5 
    { tile: "E", score: 1 }   // 6 
    ].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score
    }, 0)
console.log(maximumScore2);     // expect output: 28

console.log(`
v3:
`)

function scrabble () {
    let array = [ 
        { tile: "N", score: 1 },  // 0 
        { tile: "K", score: 5 },  // 1 
        { tile: "Z", score: 10 }, // 2 
        { tile: "X", score: 8 },  // 3 
        { tile: "D", score: 2 },  // 4 
        { tile: "A", score: 1 },  // 5 
        { tile: "E", score: 1 }   // 6 
        ]
    let result = 0;
    for (let i = 0; i < array.length; i++) { 
        result += array[i].score;
    } 
    return result
}
console.log(scrabble());        // expect output: 28

console.log(`
v4:
`)

let arrayScore = [ 
    { tile: "N", score: 1 },  // 0 
    { tile: "K", score: 5 },  // 1 
    { tile: "Z", score: 10 }, // 2 
    { tile: "X", score: 8 },  // 3 
    { tile: "D", score: 2 },  // 4 
    { tile: "A", score: 1 },  // 5 
    { tile: "E", score: 1 }   // 6 
];
//console.log[(arrayScore[3].score);
function score (arr) {
    let result = 0
        for (let i = 0; i < arr.length; i++) { 
            result += arrayScore[i].score;
        } 
    return result;
}
console.log(score(arrayScore));  // expect output: 28

// --------------------------------------------------------------------------------
// 10.02.2020 - 03
// Is it an empty object? 
// Write a program that returns true if an object is empty,
// and false if otherwise.
// Examples:
// {}     ➞ true
// {a: 1} ➞ false

console.log(`
10.02.2020 - 03`);

console.log(`
v1:
`)

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEmpty({}));      // expect output: true
console.log(isEmpty({a: 1}));  // expect output: false

console.log(`
v2:
`)

function isEmpty2(obj){
    return Object.keys(obj).length == 0
}
console.log(isEmpty2({}));      // expect output: true
console.log(isEmpty2({a: 1}));  // expect output: false

// --------------------------------------------------------------------------------
// 10.02.2020 - 04
// Free Shipping. 
// Create a function that determines whether an online order should get free shipping.
// An order gets free shipping if the total cost of items exceeds €50.
// Examples:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 })                           ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 })                     ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false 

console.log(`
10.02.2020 - 04`);

console.log(`
Free Shipping:
`)

function freeShipping (obj) {
    let values = Object.values(obj);
    //console.log(values);
    let result = 0;
    for (let i = 0; i < values.length; i++) { 
        result += values;
    }
    return result > 50;
}
console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }));       // expect output: false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 })); // expect output: true

// --------------------------------------------------------------------------------
// 10.02.2020 - 05
// Programming Object.
/*
const programming = { 
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
 */   
// Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write a command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true",
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
// Bonus: Make sure that any other code cannot delete or change properties of the object.

console.log(`
10.02.2020 - 05`);

const programming = { 
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming.difficulty = 7;

delete programming.jokes

programming.isFun = true;
//or
programming["isFun"] = true;

let array = programming.languages; // reference
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let programmingKeys = Object.keys(programming);
for (let i = 0; i < programmingKeys.length; i++) {
    console.log(programmingKeys[i]);
}
//or
for (let key in programming) {
    console.log(key);
}

for (let key in programming) {
    console.log(programming[key]);
}

programming.isTrue = () => {
    if(programming.isChallenging && programming.isRewarding) {
        return `Learning the programming languages: ${programming.languages} is rewarding and challenging`
    } else {
        return "Sorry, something is wrong"
    }
};
console.log(programming.isTrue());

console.log(programming);   // expected output: ... isFun: true, ...
Object.freeze(programming); 
programming.isFun = false;
console.log(programming);   // expected output: ... isFun: true, ...

// --------------------------------------------------------------------------------
// 11.02.2020 - 01
// Return Keys and Values.
// Write a program that takes an object
// and returns an array which contains two arrays:
// one for the keys of the object
// and the other for the values of the object.

console.log(`
11.02.2020 - 01`);

function objectKeys() {
    const object2 = {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
    }
    return console.log(Object.keys(object2), Object.values(object2));
  }
  objectKeys();

// --------------------------------------------------------------------------------
// 11.02.2020 - 02
// Where's Waldo?
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.
// 
// Examples:
// 
// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!")  ➞ true
// isWaldoHere("is wally here?")      ➞ false
// isWaldoHere("waldo is here")       ➞ true

console.log(`
11.02.2020 - 02`);

function isWaldoHere (str) {
    if (str.includes("Waldo") || str.includes("waldo")) {
        return true
    } else {
        return false
    }
}
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

// --------------------------------------------------------------------------------
// 11.02.2020 - 03
// isPrime?
// Create a function that returns true if a number is prime
// and false if it's not.
// NB: a prime number is any positive integer greater than 1,
// which is only evenly divisible by two divisors: itself and 1.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// 
// Examples:
// 
// isPrime(7)  ➞ true
// isPrime(9)  ➞ false
// isPrime(10) ➞ false

console.log(`
11.02.2020 - 03`);

function isPrime (number) {
    if (number % 2 == 0 || number % 3 == 0) {
        return false
    } else {
        return true
    }
}
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(5));
console.log(isPrime(29));

// --------------------------------------------------------------------------------
// 11.02.2020 - 04
// For the longest word.
// Create a function to find the longest word in a given string.
// 
// i.e. longestWord("this is a web development course") ➞ "development"

console.log(`
11.02.2020 - 04`);

function longestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for(let word of words) {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(longestWord("this is a web development course")) // return: development
console.log(longestWord("this is a course"))                 // return: course

// --------------------------------------------------------------------------------
// 12.02.2020 - 01
// Person Class
// Create a class called Person which accepts the name of a person as a string,
// and his/her age as a number.
// The Person class should have a method called describe
// which returns a string with the following syntax:
// “name, age years old”.
// So, for example, if John is 19 years old,
// then the function describe of his object will return “John, 19 years old”.

console.log(`
12.02.2020 - 01`);

class Person2 {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    describe(){
        console.log(`${this.name}, ${this.age} years old`);
    }
}
let marcelo = new Person2("Marcelo", 39);
marcelo.describe();

// --------------------------------------------------------------------------------
// 12.02.2020 - 02
// TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter.
// Channel should be 1 by default. Volume should be 50 by default.
//
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
//
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
//
// Add a method to reset TV so it goes back to channel 1 and volume 50.
//
// It’s useful to write a status, that returns info about the TV status like:
// “Panasonic at channel 8, volume 75”.

console.log(`
12.02.2020 - 02`);

class TV {
    constructor(_brand, _chanel = 1, _volume = 50) {
      this.brand = _brand;
      this.chanel = _chanel;
      this.volume = _volume;
    }
    incVolume() {
      if (this.volume < 100) {
        this.volume++;
        console.log(`Volume is ${this.volume}`);
      } else {
        console.log("this is too much");
      }
    }
    decVolume() {
      if (this.volume > 0) {
        this.volume--;
        console.log(`Volume is ${this.volume}`);
      } else {
        console.log("this is not too much");
      }
    }
    reset() {
      this.chanel = 1;
      this.volume = 50;
    }
    ranChanel() {
      this.chanel = Math.floor(Math.random() * 51);
      console.log(`Chanel ${this.chanel}`);
    }
    display() {
      return `this Tv is ${this.brand}, has ${this.chanel} and ${this.volume}`;
    }
  }
  let samsung = new TV("SAmsung", 20, 500);
  samsung.incVolume();
  samsung.ranChanel();
  let apple = new TV("Apple", 100, 30);
  console.log(apple.display());

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

console.log(`
13.02.2020 - 01`);

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