class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    }

    render() {
        //ref,react遇到ref就会在实例化组件的时候,调用ref上面指定的函数。
        // Use the `ref` callback to store a reference to the text input DOM
        // element in this.textInput.
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => this.textInput = input} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}
ReactDOM.render(
    <CustomTextInput />,
    document.getElementById('root')
);