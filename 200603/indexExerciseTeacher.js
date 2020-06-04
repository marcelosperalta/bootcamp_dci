const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

console.log(__dirname);
// on terminal:
// node indexExerciseTeacher.js
// result:
// C:\github\dci\200603

// const [filePath,...rest] = process.argv.slice(2); // ["index.txt", "Hi", "cool"]
const [filePath = path.join(__dirname, "input.txt")] = process.argv.slice(2); // ["index.txt", "Hi", "cool"]
//              ^ -------- default value --------- ^

const stream = fs
    .createReadStream(filePath)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(filePath + ".gz"));

stream.on("close", () => console.log("Done"));