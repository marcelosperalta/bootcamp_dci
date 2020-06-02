//console.log("Hi");
const weather = require("./lib/weather");
const args = process.argv.slice(2);
weather(args[0], args[1]).then(console.log).catch(console.error);
// on terminal:
// npm start Berlin Germany
// or
// npm start Berlin
// result:
// It is now 26.44°C in Berlin, DE
// Today's weather has a clear sky
// Feels like 22.74