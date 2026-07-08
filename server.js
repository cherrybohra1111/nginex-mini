const http = require('http');

const PORT=3000;
const HOSTNAME="127.0.0.1";

const server=http.createServer((req, res) => {
    const httpMethod=req.method;
    const url =req.url;
    console.log(`Received a ${httpMethod} request for ${url}`);

    res.writeHead(200, {
    "Content-Type": "text/plain"
    });
    res.end("Hello from Cherry's Server!")


});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

