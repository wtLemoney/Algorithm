const fs = require('fs');

const content = Buffer.from('TTThis is  a test！！');//可以不用写编码

//fs.writeFile('./text','this is a test', {
fs.writeFile('./text',content, {
    encoding : 'utf8'
},err=>{
    if(err) throw err;
    console.log('done!');
})