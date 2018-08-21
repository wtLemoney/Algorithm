const fs = require('fs');

//监视文件变化，进行文件本地构建

//watch任何内容，watchFile文件
fs.watch('./', {
    recursive: true // 是否监视递归文件，即子文件那些
}, (eventType, filename) => {
    console.log(eventType, filename);
})