const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT=3000;
const HOSTNAME="127.0.0.1";

const server=http.createServer((req, res) => {
    const httpMethod=req.method;
    const url =req.url;
    console.log(`Received a ${httpMethod} request for ${url}`);

    let fileName;

    const routes = {
        "/": "index.html",
        "/about": "about.html",
        "/contact": "contact.html"
    };

    fileName = routes[url];

    const filePath = path.join(
        __dirname, 'public', fileName ? fileName : url
    );

    const extName=path.extname(filePath).toLowerCase();

    console.log(`File Path : ${filePath}`);
    console.log(`Extension Name : ${extName}`);

    const mimeType = {
        ".html" : "text/html" ,
        ".css" : "text/css" ,
        ".txt" : "text/plain",
        ".png" : "image/png",
        ".js" : "text/javascript"
    }

    const contentType=mimeType[extName] || "application/octet-stream";
    console.log(`File Type : ${contentType}`);


    fs.readFile(filePath, (err, content) =>{
        if (err){
            if (err.code === 'ENOENT'){
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("File Not Found !!!");
            }
            else{
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("Internal Server Error !!!");
            }
        }
        else{
            res.writeHead(200, {"Content-Type": contentType});
            res.end(content,"utf-8");
        } 

    });


});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

