//解决浮点数精度问题
Math.formatFloat = function(f, digit) {
    var m = Math.pow(10, digit);
    return parseInt(f * m, 10) / m;
}

var numA = 0.1;
var numB = 0.2;

var result = Math.formatFloat(numA + numB, 1) === 0.3;

console.log(result);


//四舍五入，保留n为小数
function fn(number,n){
    let result = number.toString();
    const arr = result.split('.');
    const integer = arr[0];
    const decimal = arr[1];
    result = integer + '.' + decimal.substr(0, n);
    const last = decimal.substr(n, 1);
    
    // 四舍五入，转换为整数再处理，避免浮点数精度的损失
    if (parseInt(last, 10) >= 5) {
    const x = Math.pow(10, n);
    result = ((parseFloat(result) * x) + 1) / x;
    result = result.toFixed(n);
    }
    
    return result;
}
console.log(fn(1.335,2));


