// switch case

const color = "a";
switch (color){
    case "Pink":
     console.log("cool");
     break;
    case "Black":
     console.log("nice");
     break;
    case "white":
     console.log("sooo nice");
     break;
   default:
     console.log("noooo that is crazy");
}

let x = 10  // ok
x = 11      // ok

/*
let y = 10 > ok
let y = 11 > this is a problem
*/

const month = 5;
switch (month) {
 case 1:
    console.log("Jan");
    break;
 case 2:
    console.log("Feb");
    break;
 case 3:
    console.log("Mar");
    break;
 case 4:
    console.log("Apr");
    break;
 case 5:
    console.log("May");
    break;
 case 6:
    console.log("Jun");
    break;
 case 7:
    console.log("Jul");
    break;
 case 8:
    console.log("Aug");
    break;
 case 9:
    console.log("Set");
    break;
 case 10:
    console.log("Oct");
    break;
 case 11:
    console.log("Nov");
    break;
 case 12:
    console.log("Dec");
    break;
 default:
    console.log("this is not a real month");        
}

const x1 = 22.22;
switch(x1){
    case -1999.33:
        console.log("fine");
        break;
    case 22.22:
        console.log("this is wrong");
        break;
    case 10000000001:
        console.log("cool");
        break;
    default:
        console.log("So this is not fun or is it !!!");
}

// "switch" vs. "else if"

const num = 11;

if (num <= 10 && num >= 0 ){
    console.log("it is num in the range of 0-10");
} else {
    console.log("it is num outside of the range of 0-10");
}

switch (num) {
    case 1:
        console.log(num);
        break;
    case 2:
        console.log(num);
        break;
    case 3:
        console.log(num);
        break;
    case 4:
        console.log(num);
        break;
    default:
        console.log("it is not a number")
}


// exercise

// --------------------------------------------------------------------------------
// 14.02.2020 - 01
// Let’s play mini FizzBuzz! For any given number, if the number is:
// divisible by 3, print “Fizz”.
// divisible by “5", print “Buzz”.
// divisible by both 3 and 5, print “FizzBuzz”.
// That is, if any of the above conditions apply, print the above words instead of the number.
// Otherwise, just print the number.

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