function info(message){
    console.log(`INFO: ${message}`);
}

function warn(message){
    console.log(`WARN: ${message}`);
}

function error(message){
    console.log(`ERROR: ${message}`);
}

module.exports = {
    info,
    warn,
    error,
};