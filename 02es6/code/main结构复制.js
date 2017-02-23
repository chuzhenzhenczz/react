/*var a = 1;
var b = 2;
var c = 3;*/


var arr =  [a, b, c] = [1, 2, 3];

let arr2= [foo, [[bar], baz]] = [1, [[2], 3]];

let arr3 = [head, ...tail] = [1, 2, 3, 4];


//2.默认值
[x, y = 'b'] = ['a'];

//3.对象的解构赋值
var obj= { foo1: "aaa", bar1: "bbb" };
/*
var foo = obj.foo;
var bar = obj.bar;*/

let { foo1, bar1 } = obj;


//字符串的解构赋值
const [a1, b1, c1, d1, e1] = 'hello';


//函数参数的解构赋值
function add([x, y]){

    return x + y;
}

function addObj({x,y}){

    return x + y;
}

/*
add([1, 2]); // 3

$.ajax({
    url:"",
    dataType:"",
    success:function(){
    },
    error:function(){},
    complete:function(){},
    method:'get',
    headers:'',
    beforeSend:function(){},
    dataFilter:function(){},
    processData:true,
})

function ajax(options){
    let {url,dataTyep,...} = options;

}*/

//.用途 
[x, y] = [y, x];
