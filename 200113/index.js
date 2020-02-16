// (0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
let num = 3;
let result = floatNum * floatNum1;
let lastResult = result.toFixed(3)
console.log((result).toFixed(3));

let old, nice, crazy;
old = true;
nice = false;
crazy = !3 < 3;
crazy2 = 3 <= 3;
console.log(!crazy);   // ! = not
console.log(1 !== 1);  // 1 is not equal to 1 = false
console.log(old !== crazy);
console.log(old !== nice);

console.log(crazy ? "Yeah" : "Nope");
console.log(crazy2 ? "Yeah" : "Nope");

console.log("Abc");
let givenName, firstName;
firstName = "Hadi";
console.log(givenName || firstName || "Abc"); // check the first Truthy
console.log(givenName || firstName || 2);
console.log(givenName || "Abc" || firstName);
console.log("Abc" || firstName || givenName);


// exercises

// --------------------------------------------------------------------------------
// 13.01.2020 - 01
// Nancy's income is 500 Euro per week. (1 year have 52 weeks)
// Ho much does Nancy makes every year?

const nancySalary = 500 * 52;
console.log(`Nancy salary is ${nancySalary} Euro in one year`);

// --------------------------------------------------------------------------------
// 13.01.2020 - 02
// The number of hours Nancy worked over the last two weeks are
// 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Nancy's average hour?

let nancyWorked = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(`The Nancy's average hour worked was ${nancyWorked}`);
//or
let nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage = nancyWorkingHours / 10;
console.log(nancyAverage);


// if(<boolean>) { ... } (if else)
console.log(true ? "Yeah cool" : "Nope sorry");

if (true) {
    console.log("Yeah it is true");
}

if (false) {
    console.log("Yeah it is true"); // ignored with "false"
}

if (true) {
    var superHero = 44; // only "var" is allowed inside de {}
    console.log("Yeah it is true");
}
console.log(superHero);

if (1 < 4 || (1 < 55 && true)) {
    console.log("Yeah it is true");
    console.log("Yeah it is true");
}

if (false || (1 < 55 && true)) {
    console.log("Yeah it is true");
    console.log("Yeah it is true");
}

let a, b, c;
a = true;
b = false;
c = true;
if (a == b && c) {       // = false
    console.log("Nice"); // the false condition before ignore this line
} else {
    console.log("Not cool");
}
if (a == b || c) {       // true = false or true > true = true
    console.log("Nice");
}
let d, e, f;
d = 1 === 4;
e = 20 < 100;
f = true;
let counter = 0;
let logIn = false;
if (d == f && e) {       
    console.log("Nice");
    counter = 2;
    logIn = true;
} else {
    console.log("Not cool");
    counter = 3;
    logIn = false;
}
console.log(logIn, counter);


// exercises

// --------------------------------------------------------------------------------
// 13.01.2020 - 03
// A math student scored 75, 70, 85, 90, 100 on the first five tests he took.
// After he took his sixth math test, the average is now 85.
// What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

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

let str1 = "Python";
if (str1.substring(0,2) === "Py"){
    console.log(str1);
}

// --------------------------------------------------------------------------------
// 13.01.2020 - 09
// Calculate the sum of the two integers.
// If the sum is in the range 50 to 80, print 65, otherwise print 80.

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

// 77 is the smaller number between 0 and 100 which multiple by 7 and 11 at same time.
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

let num1 = 90;
let numDiff2 = Math.abs(num1 - 19);
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

let firstName2 = "Marcelo";
let age = 30;
if (age < 13){
    console.log(`${firstName2} is a child`);
}
if (age >= 13 && age < 20){
    console.log(`${firstName2} is a teenager`);
}
if (age >= 20 && age < 30){
    console.log(`${firstName2} is a young adult`);
}
if (age >= 30){
    console.log(`${firstName2} is a adult`);
}
//or
const age2 = "w";
if (age2 < 10) {
    console.log("he is boy");
} else if (age2 < 20) {
    console.log("he is teen");
} else if (age2 <= 30) {
    console.log("he is adult");
} else {
    console.log("it is not a number");
}
// or
const firstName3 = "Ali";
const age3 = 22;
if (age3 < 13) {
  console.log(`${firstName3} is a child`);
} else {
  if (age3 < 20) {
    console.log(`${firstName3} is a teenager`);
  } else {
    if (age3 < 30) {
      console.log(`${firstName3} is a young adult`);
    } else {
      if (age3 >= 30) {
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
