const http = require("http");

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`
    <style>
        body{
          background-color: lightcyan;
        }
    </style>
    <h1>
        Hey, I am a server
    </h1>
    `)
};
const server = http.createServer(requestListener);
server.listen(8080);

// on terminal:

// npm index.js

// on browser:

// http://127.0.0.1:8080/