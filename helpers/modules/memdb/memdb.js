const fs = require('fs');
const path = require('path');
let cachedb = {};

function write(filename, data) {
    const jsonString = JSON.stringify(data, null, 2);
    try {
        fs.appendFileSync(`./store/${filename}.json`, jsonString);
        cachedb[filename] = JSON.parse(jsonString);
    } catch (error) {
        console.error('Error commiting JSON to File:', error);
    }
}

function read(filename) {
    const resolveFilePath = path.resolve(__dirname, `store/${filename}.json`);
    if (fs.existsSync(resolveFilePath)) {
        try {
            const jsonString = fs.readFileSync(resolveFilePath, 'utf8');
            cachedb[filename] = JSON.parse(jsonString);

            return cachedb[filename];
        } catch (error) {
            console.error('Error parsing memdb from File:', error);
        }
    }
}

module.exports = {
    memdb: {
        write: write,
        read: read,
        cache: cachedb
    }
};