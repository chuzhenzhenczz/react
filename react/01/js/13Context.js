class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}


//声明一下contextTypes
Button.contextTypes = {
    color: React.PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {color: "purple"};
    }

    render() {
        const children = this.props.messages.map((message) =>
            <Message text={message.text} />
        );
        return <div>{children}</div>;
    }
}

//声明一下childContextTypes
MessageList.childContextTypes = {
    color: React.PropTypes.string
};

ReactDOM.render(
    <MessageList messages={[1,2,3]}/>,
    document.getElementById('root')
);