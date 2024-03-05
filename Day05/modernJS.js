//Arrow Functions
const greet = (name) => {
    console.log(name);
}

greet("Acacia");

const square = (a) => a*a;
//与直接定义下列函数效果一致
// function square(a){
//     a*a;
//     return a;
// }

//Spread and Rest Operators

//Rest Operator
function restOperator(first, ...restOfArgs){//把第一个放进first，剩下的都放进restOfArgs
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one','two','three','four','five');

//Spread Operator
function sum(x,y,z){
    return x+y+z;
}

const number = [1,2,3];//如果多于三个不会被计入，因为定义的函数只有三个
console.log(sum(...number));
// 效果相同 = console.log(sum(number[0],sum(number[1],sum(number[2]));

//common built-in methods

//Array
//Filter

let nums=[1,2,3,4,5,6,7,8,9,10];
const even=nums.filter((num)=> num % 2 == 0 );
const odd=nums.filter((num)=>num%2 != 0);

console.log(even);
console.log(odd);

//Split
const message = 'Hello, world!';
const words = message.split('l');
console.log(words);

//includes
const sentence="The quick brown fox jumps over the lazy dog.";
const containsWords = sentence.includes('fox');
console.log(containsWords);

//length
const str="welcome to modern JS Features!";
console.log(str.length);//not a method it's a property
//计算字符串长度

//to lowercase and to uppercase
let string = 'Hello';
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//trim - 去除前后的空格，中间的不管
let str2="   I love javascript!   ";
console.log(str2.trim());

//math
//max and min
const maxNumber= Math.max(10,5,20);
const minNumber= Math.min(10,5,20);
console.log(maxNumber);
console.log(minNumber);

//round - 四舍五入
console.log(Math.round(3.2));
//floor - 去掉小数向下取整
console.log(Math.floor(3.7));
//ceil -向上取整
console.log(Math.ceil(3.2));

//random - 生成0到1之间的一个小数
console.log(Math.random());

//other
//to fixed
const price= 40.2567.toFixed(2);
console.log(price);//=40.26 取两位小数四舍五入

//date
const currentDate=new Date();
console.log(currentDate);
const christmas = new Date(2024,11,25);//日期和月份会显示+1，=2024-12-25
console.log(christmas);