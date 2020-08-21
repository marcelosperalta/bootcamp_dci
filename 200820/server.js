// quote: 📜 When eating an elephant, take one bite at a time 📜

// 🍃MongoDB🍃 with Express

// hints:
// 1. to understand some parts, you can try to remove it and see what is the impact on the application;
// 2. remember to use the "console.log" when you need to see what happens in some part;
// 3. if is too hard to understand some point, see the documentation.


// 🍴😋 to read the ".env" file used by "const PORT" using the "dotenv" module for Node.js.
// dotenv
// https://www.npmjs.com/package/dotenv
// npm i dotenv
require("dotenv").config();

// 🍴😋 to create a simple HTTP server using Node.js built-in module.
// http
// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http
// https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
// Node.js has a built-in module called HTTP, 
// which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require("http");

// 🍴😋 to read the "app.js" file (express, morgan, mongoose, etc)
const app = require("./app");

// 🍴😋 to read the PORT used by the HTTP server with the module "dotenv"
// process.env now has the keys and values you defined in your ".env" file.
// process.env
// https://nodejs.org/api/process.html#process_process_env
const PORT = process.env.PORT;

// 🍴😋 to create a simple HTTP server with the "app.js" file configurations
// http.createServer()
// https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
// Node.js has a built-in module called HTTP, 
// which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const server = http.createServer(app);

// 🍴😋 to start a server listening for connections.
// server.listen()
// https://nodejs.org/api/net.html#net_server_listen
server.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
});
// es6 version (arrow fuction):
// server.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
// });