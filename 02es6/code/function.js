//-------------1.rest参数..ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数
function add(...values) {
    let sum = 0;

    console.log(values)
    for (var val of values) {
        sum += val;
    }
    console.log(sum)
    return sum;
}

add(2, 5, 3) // 10


    var [x,...y] = [1,2,3,4];


//-------------2.扩展运算符--。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
console.log(...[1, 2, 3])

var arr = [1,2,3];
arr = [...arr,4,5];


//--------------3箭头函数 § ⇧
//1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

var f = v => v;

function foo() {
    setTimeout(()=> {
        console.log('id:', this.id);
}, 100);
}

var id = 21;

foo.call({ id: 42 });

//不可以当作构造函数，也就是说，不可以使用new命令，
var fo = (a)=>{
    this.a = a;
}


//

function fn(n){

    if(n==1) {debugger;return 1};
    return n*fn(n-1);
}