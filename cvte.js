//1题
// function proxy(x,y){
//     Object.defineProperty(y,"name",{
//         get:function (){
//             //当获取值的时候触发的函数
//             return x.name;    
//         },
//         // set:function (value){
//         //     //当设置值的时候触发的函数,设置的新值通过参数value拿到
//         //     x.name = value;
//         // }
//     })
// }

// var Animal={};
// var Cat={
//     name: 'Hoe'
// };

// proxy(Animal,Cat);
// Animal.name="wt";

// console.log(Cat.name);//'wt'



//2题
var data = [
    {
        parentId: 0,
        id: 1,
        value: '1'
    },
    {
        parentId: 3,
        id: 2,
        value: '2'
    },
    {
        parentId: 0,
        id: 3,
        value: '3'
    },
    {
        parentId: 1,
        id: 4,
        value: '4'
    },
    {
        parentId: 1,
        id: 5,
        value: '5'
    }
];


var result={};
result.children=[];
result.id=0;
result.value=undefined;
//按parentId排序
function sortId(propertyName){  
    return function(object1,object2){  
        var value1 = object1[propertyName];  
        var value2 = object2[propertyName];  
          
        if(value1 < value2){  
            return -1;  
        }else if(value1 > value2){  
            return 1;  
        }else{  
            return 0;  
        }  
    }  
}  

console.log(data.sort(sortId("parentId")));

for(var i=0;i<data.length;i++){
    if(data[i].parentId===0){
        result.children.push({
            id: data[i].id,
            value: data[i].value
        })
    }
    else{   
       for(var j=0;j<result.children.length;j++){
           if(result.children[j].id===data[i].parentId){
            result.children[j].children = result.children[j].children || [];
            // console.log(data[i].id)
            result.children[j].children.push({
                children:[],
                id: data[i].id,
                value: data[i].value
            })
           }

       }
    }

}

console.log(result);
console.log(result.children[0].children);
console.log(result.children[1].children)

//题目要求的输出
var node = {
   children:[
      {
          children:[
            {
                children:[],
                id: 2,
                value: '2'
            }
          ],
          id: 3,
          value: '3'
      },
      {
          children:[
            {
                children:[],
                id: 4,
                value: '4'
            },
            {
                children:[],
                id: 5,
                value: '5'
            }
          ],
          id: 1,
          value: '1'
      }
    ],
    id: 0,
    value: undefined
}




//3题

/**
请手动实现一个compose函数，满足以下功能：
 
例：
 
var arr = [func1, func2, func3];
function func1 (ctx, next) {
  ctx.index++
  next();
}
function func2 (ctx, next) {
  setTimeout(function() {
    ctx.index++
    next();
  });
}
function func3 (ctx, next) {
  console.log(ctx.index);
}
 
compose(arr)({index: 0}); 
 
// out: 2
 
**/

var arr = [func1, func2, func3];
function func1 (ctx, next) {
  ctx.index++
  next();
}
function func2 (ctx, next) {
  setTimeout(function() {
    ctx.index++
    next();
  });
}
function func3 (ctx, next) {
  console.log(ctx.index);
}
 
//compose(arr)({index: 0}); // out: 2


// function compose(arr){
//     return function(obj){
//         arr.reverse().reduce((func,item)=>{
//             return function(obj){
//                 item(obj,function(){
//                     func(obj);
//                 })
//             }
//         },()=>{})(obj)
//     }
// }

const compose = (arr) => (ctx) => {
    const promise = new Promise((resolve,reject)=>{
        func1(ctx,resolve)
    });
    promise.then(()=>{
        return new Promise((resolve,reject)=>{
            func2(ctx,resolve)
        });
    }).then(()=>{
        return new Promise((resolve,reject)=>{
            func3(ctx)
        });
    }).catch(e=>console.log(e));
};

compose(arr)({index: 0})