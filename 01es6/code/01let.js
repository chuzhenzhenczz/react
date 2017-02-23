//babelrc是配置babel转译的方式。presets:设置要转移的格式。
//大括号是一个scope()作用域。
{
    let a = 1;
    let b = 2;
}
/*console.log(a);
console.log(b);*/


var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); //

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

//---------let定义的变量不会提升

console.log(foo); // 输出undefined
//console.log(bar); // 报错ReferenceError

var foo = 2;
let bar = 2;


//---------let 暂时性死区
/*var tmp = 123;

if (true) {
    var tmp = 'abc'; // ReferenceError
    let tmp;
}*/

//---------let不允许在相同作用域内，重复声明同一个变量
/*function a() {
    let a = 10;
    var a = 1;
}

a()*/


//---------const声明一个只读的常量。
const num =1 ;
num = 2;


//---------ES5之中，顶层对象的属性与全局变量是等价的。es6中不等价。

