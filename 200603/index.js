const fs = require("fs");

let writer = fs
    .createWriteStream("newBigTest.txt", { flags: "w" })
    .on("error", (er) => {
        console.log(er);
    })
    .on("open", function (fileData) {
        console.log("file is open");
        console.log(`file data : ${fileData}`);
    });
writer.write("Hi this is new file done by Nodejs");

let newWriter = fs.createWriteStream("newText.txt", { flags: "w" });
newWriter.on("pipe", () => {
    console.log("cool something is piped in");
});

let reader = fs.createReadStream("newText.txt").pipe(newWriter);


// on terminal:

// node index.js

// or 

// node index