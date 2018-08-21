const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();

ce.on('error',(err,time)=>{
    console.log(err);
    console.log(time);
});

ce.emit('error',new Error('oops!'),Date.now());//第二个第三个为事件传递的参数