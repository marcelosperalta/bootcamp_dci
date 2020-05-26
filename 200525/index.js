// Node.js
// https://nodejs.org/en/
// What is Node.js?
// Why Node.js?

// commands on Terminal
// node                  > to see the Node.js version
// node index.js         > to run index.js
// node index.js Marcelo > to add "Marcelo" on "argv"

// process object
// console.log(process);
// console.log(process.argv);
// console.log(`Hey ${process.argv[2]}`)
// process.argv.forEach((item, i) => {
//     console.log(`${i} : ${item}`);
// });
const args = process.argv.slice(2);
console.log(args);
console.log(`Hey ${args[0]}`);

// fs (File System) built-in module in Node.js
const fs = require("fs");
// read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
});
// write file
fs.writeFile("new.txt", "This is a file created by Node.js", (err) => {
    if (err) throw err;
    console.log("Done");
});
console.log("Hi this is too fun");

// Exercise:

// Create a program that prints headers to the terminal.
// - This program should accept 2 arguments. 
//      > The first argument should be the number of stars to print before and after the header. 
//      > The second argument should be the word to print inside the header.
// - If no stars or no header are passed to the function, 
//   the function should print out 10 stars and the word "Hi" to the console by default.

// Teacher's solution:
// include "stars.js"
const print = require("./stars");
//const args = process.argv.slice(2);
print(args[0], args[1]);
// on terminal: node index.js 9 Marcelo