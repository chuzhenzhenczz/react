/*
 state:
 保持私有的状态
 只能通过setState修改他的值

 componentDidMount:
 组件声明周期钩子。

单向数据流:
    数据只能从父组件通过props往下流动。数据是单向。
    叫做单向数据流。
 *
 * **/
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    componentDidMount() {
        this.timerID == setInterval(function () {

            this.setState({date: new Date()})
        }.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

}

var House = function (props) {
    return (
        <div>
            <span>{props.name}</span>
            <Clock/>
        </div>
    )
}

class Controller extends React.Component {
    constructor(props){
        super(props);
        this.state = {speed:0};
    }

    componentDidMount() {
        this.timerID == setInterval(function () {

            var speed = +this.state.speed+1 ;
            console.log(speed)
            this.setState({speed: speed })
        }.bind(this), 1000)
    }


    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <Enginner speed={this.state.speed}/>
            </div>
        )
    }
}

class Enginner extends React.Component{
    constructor(props){
        super(props);
        this.state = {speed:props.speed};
    }



    render(){
        return <div>当前速度是:{this.props.speed}</div>
    }

}

ReactDOM.render(
    <Controller name="这是rose的小屋"  />,
    document.getElementById('root')
);