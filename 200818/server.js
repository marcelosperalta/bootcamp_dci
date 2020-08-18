// MongoDB with Express
// But first REST API REpresentational State Transfer aka server can create delete update read requests

require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);