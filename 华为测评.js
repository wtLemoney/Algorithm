//1.字符串去重
var line = readline();

function noRepeat(str){
	var newStr="";
	for(var i=0;i<str.length;i++){
		if(newStr.indexOf(str[i]) == -1){
			newStr+=str[i];
		}
	}
	return newStr;
}

print(noRepeat(line));


//2.
var arr = new Array(20).fill(0);
while(line=readline()){
  var lines = line.split(",");
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  if(a == -1 && b == -1){
    break;
  }
  for(var i=a;i<b;i++){
    ++arr[i];
  }
}
for(var j=12;j<20;j++){
  print('['+j+','+eval(j+1)+'):'+arr[j]);
}

//3.
var str = readline();
var len = str.length;
var res = -1;
var i = 1;
if(str[0] == '('){
  res = judge();
}
print(res);

function judge(){
  var ch = str[i++];
 
  if(ch != '*' && ch != '+' && ch != '^'){
    return -1;
  }

  if(str[i++] != ' '){
    return -1;
  }

  var x = 0;

  if(str[i] == '('){
    ++i;
    x = judge();
    if(x == -1){
      return -1;
    }
    ++i;
  }else if(parseInt(str[i]) < 0 || parseInt(str[i]) > 9){
    return -1;
  }else{
    while(parseInt(str[i]) >= 0 && parseInt(str[i]) <= 9){
      x *=10;
      x += str[i] - 0;
      ++i;
    }
  }

  if(ch == '^'){
    if(str[i] != ')') return -1;
    else return x+1;
  }
  if (str[i++] != ' ') return -1;

  var y=0;
  if(str[i] == '('){
    ++i;
    y = judge();
    if(y == -1){
      return -1;
    }
    ++i;
  }else if(parseInt(str[i]) < 0 || parseInt(str[i]) > 9){
    return -1;
  }else{
    while(parseInt(str[i]) >=0 && parseInt(str[i]) <=9){
      y *=10;
      y += str[i] - 0;
      ++i;
    }
  }
  if(str[i] != ')'){
    return -1;
  }
  if(ch == '+'){
    return x + y;
  }else{
    return x * y;
  }
  
}