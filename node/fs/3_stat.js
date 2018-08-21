const fs = require('fs');

fs.stat('./3_stat.js', (err, stats) => {
    // if(err) throw err;
    if(err) {
        console.log('文件不存在');//判断文件是否存在，可以用stat
        return;
    }

    console.log(stats.isFile());//true
    console.log(stats.isDirectory());//false

    console.log(stats);
})