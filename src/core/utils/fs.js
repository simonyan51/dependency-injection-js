const fs = require('fs');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, file) => {
            if (error) {
                reject(error);
            } else {
                resolve(file);
            }
        });
    });
}

const readdir = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, file) => {
            if (error) {
                reject(error);
            } else {
                resolve(file);
            }
        });
    });
}

const readdirSync = path => fs.readdirSync(path);

module.exports = {
    readFile,
    readdir,
    readdirSync
};