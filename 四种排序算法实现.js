// function bubble(arr){
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble([4,54,65,23,67,89,4,12,9,100]));


// function choose(arr){
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 [arr[j],arr[i]]=[arr[i],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(choose([4,54,65,23,67,89,4,12,9,100]));

// function insert(arr){
//     for(var i=1;i<arr.length;i++){
//         var current=arr[i];
//         var pre=i-1;
//         while(pre>=0&&arr[pre]>current){
//             arr[pre+1]=arr[pre];
//             pre--;
//         }
//         arr[pre+1]=current;
//     }
//     return arr;
// }
// console.log(insert([4,54,65,23,67,89,4,12,9,100]));


function quick(arr){
    if(arr.length<=1){
        return arr;
    }
    var left=[];
    var right=[];
    var index=Math.floor((arr.length-1)/2);
    var privot=arr.splice(index,1);
    for(var i=0;i<arr.length;i++){
        if(arr[i]<privot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quick(left).concat(privot,quick(right));
}
console.log(quick([4,54,65,23,67,89,4,12,9,100]));