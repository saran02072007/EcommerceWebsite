const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("E-Commerce Backend Server Running");
});

server.listen(5000, () => {
    console.log("Backend server running on port 5000");
});