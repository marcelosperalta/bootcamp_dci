const fs = require("fs");
const args = process.argv.slice(2);

// create file
// writeFile will create or overwrite
fs.writeFile("new.txt", "This is text done by Node.js and some new add", (err) => {
    if (err) throw err;
    console.log("Done (new.txt)");
});

// appendFile will create file
fs.appendFile("new2.txt", "Second file done by Node.js", (err) => {
    if (err) throw err;
    console.log("Done (new2.txt)");
});

// readFile will read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
});

// rename file
// fs.rename("./hi.txt", "./hello.txt", (err) => {
//     if (err) throw err;
//     console.log("Done (rename)");
// });

// delete file
fs.unlink("./hi.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

// on terminal: 
// node index2.js