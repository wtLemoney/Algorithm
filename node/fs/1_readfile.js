const fs = require('fs');

//异步
fs.readFile('./1_readfile.js','utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});

//同步
const data = fs.readFileSync('../a.js','utf8');
console.log(data);