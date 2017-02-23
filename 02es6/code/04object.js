//01--------属性的简洁表示法
var foo = 'bar';
var baz = {foo,
    method() {
        return "Hello!";
    }
};


// 等同于
//var baz = {foo: foo};

let propKey = 'foo';

let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

//02----------Object.assign
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);


//03-------------
//对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。




//04-------------
//__proto__属性，Object.setPrototypeOf()
//Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替


let z = { a: 3, b: 4 };
let n = { ...z };