'use strict';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

//jsx里面可以通过{}内嵌表达式
//可以吧jsx语法理解成和js表达式一样的语句


var commentContent = '<a onmouseenter="document.write(\'\u9493\u9C7C\u5C9B\u662F\u4E2D\u56FD\u7684\')">\u70B9\u6211,\u6709\u5956</a>';
var element = React.createElement(
    'h1',
    null,
    'Hello, ',
    commentContent,
    '!'
);

ReactDOM.render(element, document.getElementById('root'));