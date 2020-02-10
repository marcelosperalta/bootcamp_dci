// Compound object
const objects = [{
    name: "Ali",
    lastName: "see"
    },
    {
    name: "Olga",
    lastName: "xs",
    printOut: function () {
        console.log("Hi");
    }
    },
    {
    name: "Nancy",
    lastName: "Ali"
    }
];
// dot.
objects[1].printOut();
// 2nd way to call bracket []
objects[1]["printOut"]();


// Simple values are always clones

// Primitive
// String, Number, Boolean
let str = "How are you";
let newStr = str;            // cloning
str = "something else";    
console.log(newStr);         // expect output: How are you
console.log(str);            // expect output: something else
let num = 222;
let newNum = num;
console.log(newNum);

// Compound
// Object, Array, Function
const names = ["Ali", "Olga", "Nancy", "Zain"];
let newArr = names;          // reference
console.log(newArr);         // expect output: [ 'Ali', 'Olga', 'Nancy', 'Zain' ]
newArr[1] = "New";    
console.log(names);          // expect output: [ 'Ali', 'New', 'Nancy', 'Zain' ]
const car = {
    name: "Ford",
    year: "2020",
    color: "Red"
};

const newObject = car;
newObject.name = "BMW";      // reference
console.log(newObject.name); // expect output: BMW
console.log(car.name);       // expect output: BMW

// Shallow copy using ... (spread operator)
let namesArr = ["Ali", "Hadi"];
let newNamesArr = [...namesArr];
newNamesArr[0] = "Nancy";
console.log(newNamesArr);    // expect output: [ 'Nancy', 'Hadi' ]
console.log(namesArr);       // expect output: [ 'Ali', 'Hadi' ]

// Shallow copy using .concat()
let newNames2 = [].concat(namesArr);
console.log(newNames2);      // expect output: [ 'Ali', 'Hadi' ]

// Shallow copy using .slice()
let newNames3 = namesArr.slice(0)
                      // skip the second parameter and the whole array is cloned
console.log(newNames3);
let newNames4 = namesArr.slice()
                      // skip all parameters and the whole array is cloned
console.log(newNames4);

// Shallow copy using .assign()
const newObject2 = Object.assign(car);
console.log(newObject2);

// Shallow copy using ... (spread operator)
const newObject3 = {...car};
console.log(newObject3);

// infinity function call
// DO NOT DO THAT
// function one () {
//     two()
// }
// function two () {
//     one()
// }

// Recursion
const factorial = function (num) {
    // console.log(num);
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
        // 5   *           5   - 1 = 5 * 4 = 20 ..........................
};
console.log(factorial(5));

// Deep copy using recursion 🤨
function deepCopy(obj) {
    if (typeof obj == "object") {
      return Object.keys(obj)
        .map(key => ({ [key]: deepCopy(obj[key]) }))
        .reduce((acc, cur) => Object.assign(acc, cur), {});
    } else if (typeof obj == "array") {
      return; // something
    }
    return obj;
  }
  const newObj = { 1: "hi", 2: "how are you", fun: () => console.log("Hi") };
  const superNewObj = deepCopy(newObj);
  console.log(superNewObj);

// Console
console.log(typeof console);
console.log(console);
console.table(newObject);


// Exercises

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
Range:
`)

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
function fun (num, obj) {
    return num >= obj.min && num <= obj.max;
}
console.log(fun(4, { min: 0, max: 5 })); // expect output: true
console.log(fun(4, objRa));              // expect output: false

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
Scrabble:
`)

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
Empty object:
`)

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
// 
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 })                           ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 })                     ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false 

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
// Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
// Write a command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true",
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
// Bonus: Make sure that any other code cannot delete or change properties of the object.(need Google)

console.log(`
Programming Object:
`)

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


// Object.getOwnPropertyNames()

const object1 =
  {
    a: 1,
    b: 2,
    c: 3
  };
console.log(Object.getOwnPropertyNames(object1)); // expected output: Array ["a", "b", "c"]