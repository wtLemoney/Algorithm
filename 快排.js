function quick(arr,l,r) {
    if(l<0 || r>=arr.length || l>=r){
        return ;
    }
    if(l < r){
        var i,j,x;
        i=l;
        j=r;
        x=arr[i];
        while(i<j){
            while(i<j && x<arr[j])
                j--;
            if(i<j)
                arr[i++]=arr[j];
            while(i<j && arr[i]<x)
                i++;
            if(i<j)
                arr[j--]=arr[i];
        }
        arr[i]=x;
    }
    quick(arr,l,i-1);
    quick(arr,i+1,r);
}
var arr=[16,21,40,33,56,7,98,9,10,11,2,44,6];
quick(arr,0,12);
console.log(arr);//[ 2, 6, 7, 9, 10, 11, 16, 21, 33, 40, 44, 56, 98 ]