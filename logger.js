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
    console.log(`${getTimestamp()} INFO: ${message}`);
}

function warn(message){
    console.log(`${getTimestamp()} WARN: ${message}`);
}

function error(message){
    console.log(`${getTimestamp()} ERROR: ${message}`);
}

module.exports = {
    info,
    warn,
    error,
};