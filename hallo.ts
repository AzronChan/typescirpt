let isDone: boolean = false;

//已定义了type类型的变量，不能再更改
// isDone = {} //Type '{}' is not assignable to type 'boolean'.

let decLiteral: number = 6;

let myName: string = 'Tom';

//空值
function fn(): void{
    console.log(111);
    //空值下不能写return + 值；
    //return false;   //Type 'false' is not assignable to type 'void'.
    // 但是return 可以
    return;   
}
let fnVal = fn();
// console.log(fn.aa);

//可以指定 方法的返回类型
function returnNum(num):number{
    //return false;   //Type 'false' is not assignable to type 'number'
    return num;
}
returnNum(11)

//Null 和 Undefined 是其他类型的子集，所以说 设置的类型的变量，可以设置undefined;
let num: number;
num = undefined;
num = null;

//void 不是其他类型的子集，所以报错
let voidVal:void;
//let num = voidVal;  //Cannot redeclare block-scoped variable 'num'.

//任意值 可以被赋予成任意值
let anyVal:any;
anyVal = 3333;

//当定义变量不设值时,变量默认的类型就是any;
let anyVal2;
anyVal2 = 22;


//类型推论
//当一个变量不设置类型，但是有赋值的时候，typescript就会按照赋值来推论变量的类型
let obj2 = 1111;
//obj2 = '22222'; //Type '"22222"' is not assignable to type 'number'


//联合类型 
//可以定义变量可以接受多个类型赋值，用 | 表示
let unionVal: string | number = 111;
unionVal = 'string';
//unionVal = false;   //Type 'false' is not assignable to type 'string | number'


//接口 
//类似构造函数、或者理解为类的东西，通过接口可以使变量拥有固定格式
//如果少了字段，则认为是错误
//设置接口不用逗号分隔...........
interface person {
    name : string
    age : number
    hasCar? : boolean   //可选类型 
    [propName: string]: any    //定义接口上的所有属性都按照这个格式
}

let tom: person = {
    name : 'chen',
    age : 26
}

let chen: person = {
    name : 'chen',
    age : 26,
    hasCar : true,
    "haha" : {},
    strong : false
}


// let john: person = {    //Property 'age' is missing in type '{ name: string; }' but required in type 'person'.
//     name : 'li'
// }


//数组设置类型
// (类型)[] 表示法

let arr: (string|number)[] = ['1','2',3,4]; 
arr[5] = 1;