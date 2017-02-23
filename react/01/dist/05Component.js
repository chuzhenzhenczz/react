"use strict";

/**
 组件的概念:
 1.可重用
 2.相互隔离

 react的组件:
    react的组件和函数一样,接受固定的输入,返回固定的输出。


 props:
    props是组件的输入,当react运行的时候,react会自动的把组件上面的属性,合并到props对象里面
 传递给组件


 props是不能修改的:
    纯函数:
        1.固定的输入,只返回固定的输出。
        2.不能对输入进行修改
        3.里面不能有副作用的方法(data.now(),里面不能网络请求)


 *
 * */

function Welcome(props) {
   return React.createElement(
      "h1",
      null,
      "Hello, ",
      props.name1
   );
}

var mountNode = document.querySelector('#root');
ReactDOM.render(React.createElement(Welcome, { name1: "\u5E0C\u62C9\u91CC" }), mountNode);