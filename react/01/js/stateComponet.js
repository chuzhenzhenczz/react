class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0};
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>逝去的是时间: {this.state.secondsElapsed}</div>
        );
    }
}

var mountNode = document.querySelector('#root');
ReactDOM.render(
    <div><Timer /><Timer /><Timer /></div>, mountNode);