// quote: "When eating an elephant, take one bite at a time."

// MongoDB with Express

// to read the ".env" file
// https://www.npmjs.com/package/dotenv
// npm i dotenv
require("dotenv").config();

// create a HTTP server
// https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);