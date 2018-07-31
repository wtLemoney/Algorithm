function pascal(n){//n表示你想输出的行数
    for(var i=0;i<n;i++){
        var inside =[];
        for(var j=0;j<=i;j++){
            inside.push(combination(i,j));
        }
        console.log(inside.join(' '));
    }
}

function combination(a,b){
    if(b==0) 
        return 1;
    else if(a===b) 
        return 1;
    else
        return combination(a-1,b-1)+combination(a-1,b);
}

//运行
pascal(10);