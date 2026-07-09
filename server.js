const http = require('http');
const fs = require('fs');
const path = require('path');

const logger = require('./logger')

const PORT=3000;

const server=http.createServer((req, res) => {
    const httpMethod=req.method;
    const url =req.url;
    console.log("------------");
    logger.info(`Received a ${httpMethod} request for ${url}`);

    let fileName;
 
    const routes = {
        "/": "index.html",
        "/about": "about.html",
        "/contact": "contact.html"
    };

    fileName = routes[url] || url;

    const filePath = path.join(
        __dirname, 'public', fileName
    );

    const extName=path.extname(filePath).toLowerCase();

    logger.info(`File Path : ${filePath}`);
    logger.info(`Extension Name : ${extName}`);

    const mimeType = {
        ".html" : "text/html" ,
        ".css" : "text/css" ,
        ".txt" : "text/plain",
        ".png" : "image/png",
        ".js" : "text/javascript"
    }

    const contentType=mimeType[extName] || "application/octet-stream";
    logger.info(`File Type : ${contentType}`);


    fs.readFile(filePath, (err, content) =>{
        if (err){
            if (err.code === 'ENOENT'){
                const errorPagePath = path.join(__dirname, 'public', '404.html');
                
                fs.readFile(errorPagePath, (error, errorContent) =>{
                    res.writeHead(404, {"Content-Type": "text/html"});
                    logger.warn("404 - Page Not Found");

                    if (error){
                        res.end("404 - Page Not Found");
                    }
                    else{
                        res.end(errorContent);
                    }

                })
            }
            else{
                const errorPagePath = path.join(__dirname, 'public', '500.html');
                
                fs.readFile(errorPagePath, (error, errorContent) =>{
                    res.writeHead(500, {"Content-Type": "text/html"});
                    logger.error("500 - Internal Server Error");

                    if (error){
                        res.end("500 - Internal Server Error");
                    }
                    else{
                        res.end(errorContent);
                    }

                })
            }
        }
        else{
            res.writeHead(200, {"Content-Type": contentType});
            res.end(content);
        } 

    });


});

server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});

