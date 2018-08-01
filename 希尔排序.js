//希尔排序
function shellSort(arr){
    // var len=arr.length;
    // var temp;
    // var gap=1;
    // while(gap < len/3){
    //     gap = gap*3+1
    // }
    // for(gap;gap>0;gap=Math.floor(gap/3)){
    //     for(var i=gap;i<len;i++){
    //         temp = arr[i];
    //         for(var j=i-gap;j>0&&arr[j]>temp;j-=gap){
    //             arr[j+gap]=arr[j];
    //         }
    //         arr[j+gap]=temp;
    //     }
    // }
    // return arr;
    var len =arr.length;
    gap = Math.floor(len/2);
    while(gap!==0){
        for(var i = gap;i<len;i++){
            var temp = arr[i];
            var j;
            for(j=i-gap;j>=0&&temp<arr[j];j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
        gap=Math.floor(gap/2);
    }
  return arr;
}

console.log(shellSort([1,34,54,3,5,60,45,4,95,4,21,45,6,44,32,90]));