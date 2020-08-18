// quote: "When eating an elephant, take one bite at a time."

// MongoDB with Express

// to read the ".env" file
// https://www.npmjs.com/package/dotenv
// npm i dotenv
require("dotenv").config();

// create a HTTP server
// https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
// Node.js has a built-in module called HTTP, 
// which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require("http");

// to read the "app.js" file
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);