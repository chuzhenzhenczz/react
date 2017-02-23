function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

//jsx里面可以通过{}内嵌表达式
//可以吧jsx语法理解成和js表达式一样的语句


var commentContent = `<a onmouseenter="document.write('钓鱼岛是中国的')">点我,有奖</a>`;
const element = (
    <h1>
        Hello, {commentContent}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);