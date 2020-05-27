// module exports
const fs = require("fs");
const math = require("./math");
console.log(math);
let x = 5, y = 4;
console.log(`x + y = ${math.add(x, y)}`);
console.log(`x - y = ${math.sub(x, y)}`);
console.log(`x * y = ${math.mul(x, y)}`);
// on terminal:
// node index.js
// result:
// x + y = 9 
// x - y = 1 
// x * y = 20

fs.copyFile("original.txt", "copyFromOg.txt", (err) => {
    if (err) throw err;
    console.log("txt copied done (from original.txt to copyFromOg.txt)");
});

const data = fs.readFileSync("longText.txt");
console.log(data.toString());
console.log("Done (longText.txt)");

// File System Flags > "w", "r", ...
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
fs.open("new.txt", "w", (err) => {
    if (err) throw err;
    console.log("Done (new.txt)");
});