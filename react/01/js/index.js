/*
*
//把js文件夹下面的的文件编译到dist下面,-w监控目录,自动编译
babel js -d dist -w

jsx:js和html混一块写:
*
* **/
class HelloMessage extends React.Component {
    render() {
        return <div>你好 {this.props.name}</div>;
    }
}

var mountNode = document.querySelector('#root');
ReactDOM.render(<HelloMessage name="青云" />, mountNode);