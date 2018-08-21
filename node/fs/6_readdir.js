const fs = require('fs');

fs.readdir('./', (err, files) => { //读本级文件目录
    if(err) throw err;

    console.log(files);
})