// MongoDB with Express
// new version

require("dotenv").config(); // to read the ".env" file
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);