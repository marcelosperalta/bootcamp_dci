
// ...continue exercise from 18.02.2020

// Exercise

// --------------------------------------------------------------------------------
// 18.02.2020 - 01
// Number three:
// Find 3 exercises that you have did in 3 ways,
// or do 3 exercises in 3 ways if you haven’t did that yet
// Create 3 repository’s (each exercise get one repo).
// Add 3 branches in every repo (each branch has a different solution).

// Upload 3 photos (one photo to each branch) to your README.md showing your code
// and the console part, explain your steps and links to your resources (mdn or so).

// e.g.: https://github.com/duxianwei520/react

// GitHub: "18.02.2020 - One exercise in 3 ways with 3 branches"
// GitHub branches: master, dev1, dev2

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
ver. "master":`);

let first = {firstName: "John"};
let last = {lastName: "Smith"};
let fullName = Object.assign(first, last);
console.log(fullName);    // expected output: { firstName: 'John', lastName: 'Smith' }

console.log(`
ver. "dev1":`);

const fun = (x, o) => {
    return Object.assign(x,o);
};
const o1 = {firstName: "John"};
const o2 = {lastName: "Smith"};
console.log(fun(o1, o2)); // expected output: { firstName: 'John', lastName: 'Smith' }

console.log(`
ver. "dev2":`);

const fun2 = (x, o) => {
    return { ...x, ...o};;
};
console.log(fun2({ firstName: "John"}, { lastName: "Smith"},));