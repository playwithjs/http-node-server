const http = require("http");

const host = 'localhost';
const port = 8000;

const reqListener = (req, res) => {
    res.writeHead(200);
    res.end("Welcome to PlayWithJS!")
}

const server = http.createServer(reqListener);

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})