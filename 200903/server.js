// MongoDB with Express
// new version
require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const open = require('open');

const server = http.createServer(app);

// server.listen(PORT);
server.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
    open(`http://localhost:${PORT}`);
});