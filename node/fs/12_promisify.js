const fs = require('fs');


//解决回调地狱
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

// read('./12_promisify.js').then(data => {
//     console.log(data.toString());
// }).catch(ex => {
//     console.log(ex);
// });

async function test() {
   try {
    const content = await read('./12_promisify.js');

    console.log(content.toString());
   }catch (ex) {
    console.log(ex);
   }
}
test();