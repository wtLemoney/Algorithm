const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();

ce.once('test',()=>{ // once对于特定事件最多被调用一次的监听器。
    console.log('test event!');
});

setInterval(()=>{
    ce.emit('test');
},500);