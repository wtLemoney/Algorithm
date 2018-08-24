//阶段1,但是此时柯里化的函数只能被调用一次，不能实现addCurry(1)(2)的操作
var curry = function(func){
    var args = [].slice.call(arguments, 1);
    return function(){
        var newArgs = args.concat([].slice.call(arguments));
        return func.apply(this,newArgs);
    }
}
function add(a, b) {
    return a + b;
}

var addCurry = curry(add,1,2);
console.log(addCurry()); //3

//或者
var addCurry = curry(add,1);
console.log(addCurry(2)); //3

//或者
var addCurry = curry(add);
console.log(addCurry(1, 2)); // 3


/*阶段2，改进版*/

var curry1 = function(func, args){
    
    var length = func.length;
    var args = args || [];
    return function(){
        var newArgs = args.concat([].slice.call(arguments));
        if(newArgs.length < length){
            return curry1.call(this,func,newArgs);
        }else{
            return func.apply(this,newArgs);
        }
    }
}
function add(a, b) {
    return a + b;
}
var addCurry = curry1(add);
console.log(addCurry(4,5)); //9
console.log(addCurry(4)(5)); //9

/**阶段3 进阶版 。这样这个函数可以接受任意个数的参数，被调用任意次。 */

function add1(){
    var args = [].slice.call(arguments);
    var fn = function(){
        var newArgs = args.concat([].slice.call(arguments));
        return add1.apply(this,newArgs);
    }
    fn.toString = function(){
        return args.reduce(function(a, b){
            return a+b;
        })
    }
    return fn;
}
console.log(add1(1)(2,3));// { [Function: fn] toString: [Function] }
console.log(add1(1)(2,3).toString());// 6
console.log(add1(1)(2)(3)(4)(5).toString());// 15


//countMoney(1)(2)(3)(4)() -> 10

var countMoney = (()=> {
    let money = 0;
    let args = [];
    const res = function(){
        if(arguments.length === 0){
            for(let i=0;i < args.length;i++){
                money += args[i];
            }
            return money;
        }else{
            args.push(...arguments);
            return res;
        }
    }
    return res;
})();

console.log(countMoney(1)(2)(3)(4)());