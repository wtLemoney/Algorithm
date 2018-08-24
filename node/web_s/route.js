
const fs = require('fs');
const promisify = require('util').promisify;//改造回调，类似同步
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

module.exports = async function (req, res, filepath) {
    try {
        const stats =await stat(filepath);
        if(stats.isFile()){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            fs.createReadStream(filepath).pipe(res);
        }else if(stats.isDirectory()){
            const files = await readdir(filepath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(files.join(','));
        }
    }catch(ex) {
        console.error(ex);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text.plain');
        res.end(`$(filepath) is not a directory or file\n ${ex.toString()}`);
    }
}