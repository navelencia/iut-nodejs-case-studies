/**
 * 1. Le logger
 */

const events = require('events');
const fs = require('fs');
const path = require('path');

const logger = new events.EventEmitter();

logger.on('info', (line) => {
    console.log(line);
    fs.appendFileSync(
        path.join(__dirname, 'log.txt'),
        `${Date()} - ${line}\n`
    );
})

/**
 * 2. Le serveur HTTP
 */

const http = require('http');

const server = http.createServer((req, res) => {
    logger.emit('info', 'On nous parle!');
    res.write('Hello World!');
    res.end();
});

server.listen(8080);

