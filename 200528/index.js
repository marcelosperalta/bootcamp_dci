// const { add, sub, mul } = require(`./script`);

const { prepareString } = require("./script");
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);

// let x = parseFloat(args[0]);
// let y = parseFloat(args[1]);
// console.log(`x + y = ${add(x, y)}`);
// console.log(`x - y = ${sub(x, y)}`);
// console.log(`x * y = ${mul(x, y)}`);
// on terminal:
// node index.js 2 4
// result:
// x + y = 6
// x - y = -2
// x * y = 8

if (args.includes("--help")) {
    showHelp();
}
// on terminal:
// node index.js --help
// result:
// How to use this program:
// 1. When you input a new string with more than 1 space
//    the program will remove it for you;
// 2. If you typed the name of a city without capitalization
//    the program will capitalize it for you;
// 3. If you included a capitalized letter in the wrong place of your string
//    the program will correct it for you.
prepareString(args);
// on terminal:
// node index.js marcelo peralta
// result:
// Marcelo Peralta
// on terminal:
// node index.js sAo   pAulo
// result:
// Sao Paulo