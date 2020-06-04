const args = process.argv.slice(2);
var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = "";
var out = "";
if (args[0]) {  // e.g. "node indexExercise ./Node-FindWord/data.txt"
    inp = fs.createReadStream(args.toString());
    out = fs.createWriteStream(`${args.toString()}.gz`);
    out.on("pipe", () => {
        console.log("File Compressed.");
    });
} else {        // e.g. "node indexExercise"
    inp = fs.createReadStream('input.txt');
    out = fs.createWriteStream('input.txt.gz');
    out.on("pipe", () => {
        console.log("File Compressed.");
    });
}
inp.pipe(gzip).pipe(out);


// on terminal:

// node indexExercise.js

// or 

// node indexExercise