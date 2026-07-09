const fs=require('fs');
const path = require("path");

const logFile=path.join(__dirname,"logs","app.log");

const logToFile = (logMessage) => {;
    fs.appendFileSync(logFile, logMessage);
};

function pad(number){
    return String(number).padStart(2,"0");
}

function getTimestamp(){
    const now = new Date();
    const year= now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();

    return `[${pad(year)}-${pad(month)}-${pad(date)} ${pad(hrs)}:${pad(mins)}:${pad(sec)}]`;
}

function info(message){
    const logMessage =`${getTimestamp()} INFO: ${message}`;
    console.log(logMessage);
    logToFile(logMessage+"\n");
}

function warn(message){
    const logMessage =`${getTimestamp()} WARN: ${message}`;
    console.log(logMessage);
    logToFile(logMessage+"\n");
}

function error(message){
    const logMessage =`${getTimestamp()} ERROR: ${message}`;
    console.log(logMessage);
    logToFile(logMessage+"\n");
}

module.exports = {
    info,
    warn,
    error,
};
