const http = require("http");

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hey, I am a server")
};
const server = http.createServer(requestListener);
server.listen(8080);
// on terminal:
// npm index.js
// on web browser:
// http://127.0.0.1:8080/