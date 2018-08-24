const http = require('http');
const path = require('path');

const conf = require('./config.js');
const route = require('./route.js');

const server = http.createServer((req, res) => {
    const filepath = path.join(conf.root, req.url);
    route(req, res, filepath);
    
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end(filepath);
    
})

server.listen(conf.port, conf.hostnmae, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${addr}`);
})
