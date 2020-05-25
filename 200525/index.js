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