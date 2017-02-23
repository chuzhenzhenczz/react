//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return console.log( '(' + this.x + ', ' + this.y + ')');
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        //super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toLocalString() {

        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }

    getName(){

    }

    static classMethod() {
        return 'hello';
    }
}

//----------实例方法和静态方法。
function Man(){

}

Man.prototype = {
    say:function(w){
        console.log(w);
    }
}

Man.fly = function(){
    console.log('fly...')
}
