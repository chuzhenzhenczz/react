class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

//定义propTypes的类型
//限制输入的类型。
Greeting.propTypes = {
    name: React.PropTypes.string
};

ReactDOM.render(
    <Greeting name={123}/>,
    document.getElementById('root')
);