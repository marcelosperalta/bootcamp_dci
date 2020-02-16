// Nesting arrays
// Nesting and accessing arrays within each other
const arr = [
    [2, 4, 6, 7], // 0
    [533,53],     // 1
    [345,56,6]    // 2
];
console.log(arr[1][1]);                          // expect output: 53
console.log(arr[2][1]);                          // expect output: 56
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);                      // expect output: all "arr" elements
  }
}
console.log(``);

// forEach
let arrayNew = [];
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 2; j++) {
        arrayNew.push([i, j, i, 44]);            // [<elements>] nested array // pushing an array
    }
}
//console.log(arrayNew);
arr.forEach(array => array.forEach(element => console.log(element)));
console.log(``);

let names = [
    "Ali",
    "Olga",
    "Nancy"
];
names.forEach(name => console.log(name));
names.map(name => console.log(name));
console.log(``);

let family = [
    ["Ali", 22, "teacher"], // 0
    ["Olga",40,"chef"]      // 1
];
for (let i = 0; i < family.length; i++) {
    for (let j = 0; j < family[i].length; j++) { // i = index in array "family"
        console.log(family[i][j]);
    }
}
// or
console.log(``);
family.forEach(arr => arr.forEach(element => console.log(element)));
console.log(``);

// for...in
const newObject = {a: 1, b: 2, c: 3};
for (const property in newObject) {
  console.log(`${property}: ${newObject[property]}`); // expected output: a: 1
}                                                     //                  b: 2
                                                      //                  c: 3
console.log(``);

// for...of
for (let innerArray of family) {
    for (let element of innerArray) {
        console.log(element);
    }
}
console.log(``);

// Nesting objects
// Nesting and accessing objects in objects
const tShirt = {
    color: "red",
    size: ["XS", "S", "M", "L", "XL"],
    countries: {
        name: ["China", "Germany"],
        capital: ["Beijing", "Berlin"],
        obj: {
            one: 3344,
            two: 5654,
            printOut: function () {
                console.log(this.one);
                                  }
             },
        display: function () {
            console.log(this.name);
                             }
             },
    fabric: "cotton",
    method: function () {
        console.log (this.color)
                        }
};
tShirt.countries.obj.printOut();                      // expect output: 3344
tShirt.countries.display();                           // expect output: [ 'China', 'Germany' ]
tShirt.method();                                      // expect output: red
console.log(tShirt.size[2]);                          // expect output: M
console.log(tShirt.countries.capital[1]);             // expect output: Berlin
console.log(tShirt.countries.name[0]);                // expect output: China
console.log(tShirt.countries.obj["one"]);             // expect output: 5654
console.log(``);
let newShortWay = tShirt.countries; // reference
    newShortWay.display();          // call a method  // expect output: [ 'China', 'Germany' ]
console.log(``);

// Nesting and accessing arrays in objects
let car = ["Ford", "pink", 2020, "enj", "xs"];
// let carName  = car[0];
// let carColor = car[1];
// let carYear  = car[2];
// or
let [carName, carColor, carYear, ...rest] = car;
console.log(carName);                                 // expect output: Ford
console.log(rest);                                    // expect output: [ 'enj', 'xs' ]
console.log(car);                                     // expect output: [ 'Ford', 'pink', 2020, 'enj', 'xs' ]
console.log(``);

// Nesting and iterating over objects in arrays
const object = {
    firstName: "Ali",
    old: 22,
    country: "Germany"
};
// console.log(object.firstName);
// or
({ firstName, old, country } = object);
console.log(firstName);                               // expect output: Ali
console.log(``);


// Exercises

// --------------------------------------------------------------------------------
// 11.02.2020 - 01
// Return Keys and Values.
// Write a program that takes an object
// and returns an array which contains two arrays:
// one for the keys of the object
// and the other for the values of the object.

console.log(`
Return Keys and Values
`);

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
Where's Waldo?
`);

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
isPrime?
`);

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
