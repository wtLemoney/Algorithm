var fs = require("fs");
var data = fs.readFileSync("input.txt", "utf-8");
// console.log(data.length)
var index = 0;
function readline() {//读取一行
  index++;
  return data.split("\r\n")[index - 1];
}
function print(e) {//打印
  console.log(e);
}


var r1=readline();
var m=r1.split(' ')[0];
var n=r1.split(' ')[1];

var r2=readline();
var arr=r2.split(";");

var obj = {
  init : function(){
    if(!(/^[0-9]+\s[0-9]+$/).test(r1) || !(/^([0-9]+\,[0-9]+\s[0-9]+\,[0-9]+\;)+$/).test(r2+';')){//格式错误
      print("Incorrect command format.");
      return 0;
    }
    if(isNaN(parseInt(m)) || isNaN(parseInt(n))){//m,n不能正确转换为数字
      print("Invalid number format.");
      return 0;
    }
    if(parseInt(m)<0 || parseInt(n)<0){//m,n小于0
      print("Number out of range.");
      return 0;
    }

    //1.全[W]二阶矩阵
    var output=[];
    var inside=[];

    for(var i=0;i<=2*m;i++){
    for(var j=0;j<=2*n;j++){
      inside.push('[W]');
    }
    output.push(inside);
      inside=[];
    }
    // print(output);

    //2.联通之前
    for(var i=0;i<m;i++){
      for(var j=0;j<n;j++){
        output[2*i+1][2*j+1] = '[R]';
      }
    }
    // print(output);

    //3.进行联通
    for(var i=0;i<arr.length;i++){
      var a1=arr[i].split(" ")[0].split(',')[0];
      var a2=arr[i].split(" ")[0].split(',')[1];
      var b1=arr[i].split(" ")[1].split(',')[0];
      var b2=arr[i].split(" ")[1].split(',')[1];
      //无效的数字
      if(isNaN(parseInt(a1)) || isNaN(parseInt(a2)) || isNaN(parseInt(b1)) || isNaN(parseInt(b2)) ){
        print("Invalid number format.");
        return 0;
      }
      //数字超出预定范围
      if(parseInt(a1)<0||parseInt(a1)>parseInt(m)-1 || parseInt(b1)<0||parseInt(b1)>parseInt(m)-1 
      || parseInt(a2)<0||parseInt(a2)>parseInt(n)-1 || parseInt(b2)<0||parseInt(b2)>parseInt(n)-1){
        print("Number out of range.");
        return 0;
      }

      if(a1 === b1 && Math.abs(a2-b2) === 1){
        output[2*a1+1][2*Math.min(a2,b2)+2] = '[R]';
      }else if(a2 === b2 && Math.abs(a1-b1) === 1){
        output[2*Math.min(a1,b1)+2][2*a2+1] = '[R]';
      }else{
        //连通性错误
        print("Maze format error.");
        return 0;
      }
    }
    // print(output);

    //4.输出字符串
    for(var i=0;i<output.length;i++){
      print(output[i].join('  '));
    }

  }
}

obj.init();










