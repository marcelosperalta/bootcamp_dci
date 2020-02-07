// Function

//old way to declare a function
const sum = function (x, y){
    return x + y;
}
sum(5, 4);

// new way (ES6)
const sum2 = (x, y) => {
    return x + y;
}
sum2(5, 4);

// Array.map
const names = ["Ali", "Olga", "Nancy", "Hadi"];
const newArr = names.map(name => name[0] == "O")
console.log(newArr);

// new school (ES6)
              // callback new way
names.forEach((name, index) => console.log(name + " index num = " + index));
// old school
for ( let i = 0; i < names.length; i++){
    console.log(names[i] + "index num = " + i);
}

// Array.reduce()
const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur;
console.log(numArr.reduce(reducer));      // acc = starting value = 0
console.log(numArr.reduce(reducer, 100)); // acc = starting value = 100

// Callback (call stack)
function first (callback){
    return callback
}
function callback (callTwo){
    return callTwo
}
function callTwo(){
    return "Hi";
}
console.log(first(callback(callTwo()))); // call stack - the limit is 6000

// bff
function display(str){
    console.log(str);
}
//or
const print = str => console.log(str);

//
function yellow(val, val2){
    const x = 100;
    const y = 200;
    console.log(x / y + val + val2);
}
yellow(2, 3);

const AliPets = ["Dyson", "Sofi"];
const pink = (name, array, age = 10) => {
    console.log(`Hi ${name}, you are very you ${age}, you have nice pets ${array}`);
};
pink("Ali", AliPets, 20);
pink("Olga",["Dyson", "Sofi"]);

const greeting = (nam, add, age, pla) => {
    age += 20;
    nam += "";
    pla += " DE";
    add += ",";
    let result = `Hey ${nam}, it is very nice to live in ${add} you are getting older too fast ${age}, in you old ${pla}`;
    return result;
}
console.log(greeting("Ali", "xx str", 10, "Berlin"));

const add = () => {
    let x = 1120 * 3;
    console.log(x);
};
add(); // function call

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