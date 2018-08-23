// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
const anagrams = str => {
    if(str.length <= 2) return str.length === 2 ? [str, str[1]+str[0]] : str;
    return str.split('').reduce((acc, letter,i) => 
         acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
}
console.log(anagrams('abc'));

//数组平均数 // average([1,2,3]) -> 2
const average = arr => arr.reduce((acc,val) => acc+val,0)/arr.length;
console.log(average([1,2,3]));

//大写每个单词的首字母 // cap('hello world!') -> 'Hello World!'
const cap = str=> str.replace(/\b[a-z]/g, char => char.toUpperCase());
console.log(cap('hello world!'));

//首字母大写  // capitalize('myName', true) -> 'Myname'
const capitalize = (str, lowerRest=false) =>
    str.slice(0,1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase():str.slice(1));
console.log(capitalize('myName', false));//'MyName'

//检查回文  // palindrome('taco cat') -> true
const palindrome = str=> {
    const s = str.toLowerCase().replace(/[\W_]/g,'');
    return s === s.split('').reverse().join('');
}
console.log(palindrome('taco cat'));

//计数数组中值的出现次数 // count([1,1,2,1,2,3], 1) -> 3
const count = (arr, value) => arr.reduce((a, v) => v === value ? a+1 : a+0, 0);
console.log(count([1,1,2,1,2,3], 1));