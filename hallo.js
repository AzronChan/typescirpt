var isDone = false;
//已定义了type类型的变量，不能再更改
// isDone = {} //Type '{}' is not assignable to type 'boolean'.
var decLiteral = 6;
var myName = 'Tom';
//空值
function fn() {
    console.log(111);
    //空值下不能写return + 值；
    //return false;   //Type 'false' is not assignable to type 'void'.
    // 但是return 可以
    return;
}
var fnVal = fn();
// console.log(fn.aa);
//可以指定 方法的返回类型
function returnNum(num) {
    //return false;   //Type 'false' is not assignable to type 'number'
    return num;
}
returnNum(11);
//Null 和 Undefined 是其他类型的子集，所以说 设置的类型的变量，可以设置undefined;
var num;
num = undefined;
num = null;
//void 不是其他类型的子集，所以报错
var voidVal;
//let num = voidVal;  //Cannot redeclare block-scoped variable 'num'.
//任意值 可以被赋予成任意值
var anyVal;
anyVal = 3333;
//当定义变量不设值时,变量默认的类型就是any;
var anyVal2;
anyVal2 = 22;
//类型推论
//当一个变量不设置类型，但是有赋值的时候，typescript就会按照赋值来推论变量的类型
var obj2 = 1111;
//obj2 = '22222'; //Type '"22222"' is not assignable to type 'number'
//联合类型 
//可以定义变量可以接受多个类型赋值，用 | 表示
var unionVal = 111;
unionVal = 'string';
var tom = {
    name: 'chen',
    age: 26
};
var chen = {
    name: 'chen',
    age: 26,
    hasCar: true,
    "haha": {},
    strong: false
};
// let john: person = {    //Property 'age' is missing in type '{ name: string; }' but required in type 'person'.
//     name : 'li'
// }
//数组设置类型
// 类型[] 表示法
var arr = ['1', '2', 3, 4];
arr[5] = 1;
