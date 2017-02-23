//array.from
//类数组对象,上面有length属性的对象都可以叫类数组对象。
// 常见的类数组对象:arguments、string,NodeList
let lists = document.querySelectorAll('*');
console.log(lists);

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

//({}.toString).call(function(){}) 判定对象类型
let arr2 = Array.from(arrayLike);

//$('<div/>')
//$('div')
//$(function(){})
//$('div',ctx)

/*//array.of
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]*/

let arr3 = Array.of(3, 11, 8) // [3,11,8]

//----------3.copyWithin
var arr = [1, 2, 3, 4, 5]
    //arr.copyWithin(0, 3)


//----------4数组实例的find()和findIndex()
//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
var res  = arr.findIndex(function(e,i){
    return e>3;
})

///----------5数组实例的fill()

arr.fill(7)

/*
for (let index of arr.entities()) {
    console.log(index);
}
*/

//----------6数组实例的includes()

arr.includes(3);



/***
 * array 上面的方法
 *
 * length
 * indexOf()
 * push()
 * pop()
 * shift()
 * unshift()
 * concat()
 * sort()
 * reverse()
 * splice()
 * slice()
 * split()
 * join()
 *
 * some()
 * every()
 * filter()
 * map()
 * reduce()
 * filter()
 * forEach()
 * 
 *
 *
 *
 * of()
 * from()
 * includes()
 * keys()
 * values()
 * entities()
 * fill()
 * find()
 * findIndex()
 * copyWithin()
 *
 *
 *
 *
 *
 * **/



