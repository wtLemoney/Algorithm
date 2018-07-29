//浅拷贝，只复制指向某个对象的指针，而不复制对象本身，新旧对象共享一块内存； 

// function copy(obj1){
//     var obj2={};
//     for(var i in obj1){
//         obj2[i]=obj1[i];
//     }
//     return obj2;
// }
// var json1 = {"a":"name","arr1":[1,2,3]};
// var json2 = copy(json1);
// json1.arr1.push(4);
// console.log(json1.arr1);//[ 1, 2, 3, 4 ]
// console.log(json2.arr1);//[ 1, 2, 3, 4 ]



//深拷贝，复制并创建一个一摸一样的对象，不共享内存，修改新对象，旧对象保持不变。
//1.Object.assign()是一种可以对非嵌套对象进行深拷贝的方法，如果对象中出现嵌套情况，那么其对被嵌套对象的行为就成了普通的浅拷贝。

// let foo = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 1,
//     }
// }
// let bar = {};
// Object.assign(bar, foo);
// foo.a++;
// foo.a === 2 //true
// bar.a === 1 //true
// foo.c.d++;
// foo.c.d === 2 //true
// bar.c.d === 1 //false
// bar.c.d === 2 //true

//2.用JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象。
// var obj1 = { body: { a: 10 } };
// var obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(JSON.stringify(obj1))

//3.递归
var json1={"name":"shauna","age":18,"arr1":[1,2,3,4,5],"string":'got7',"arr2":[1,2,3,4,5],"arr3":[{"name1":"shauna"},{"job":"web"}]};
var json2={};
function deepcopy(obj1,obj2){
    var obj2=obj2||{};
    for(var i in obj1){
        if(typeof obj1[i] === 'object'){
            obj2[i] = (obj1[i].constructor === Array)?[]:{};
            deepcopy(obj1[i],obj2[i]);
        }else{
            obj2[i] = obj1[i];
        }
    }
    return obj2;
}
json2=deepcopy(json1,json2);
json1.arr1.push(6);
console.log(json1.arr1);//[ 1, 2, 3, 4, 5, 6 ]
console.log(json2.arr1);//[ 1, 2, 3, 4, 5 ]