const http = require('http');

const PORT=3000;
const HOSTNAME="127.0.0.1";

const server=http.createServer();

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on port ${PORT}`);
});
