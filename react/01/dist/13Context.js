"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { style: { background: this.context.color } },
                this.props.children
            );
        }
    }]);

    return Button;
}(React.Component);

//声明一下contextTypes


Button.contextTypes = {
    color: React.PropTypes.string
};

var Message = function (_React$Component2) {
    _inherits(Message, _React$Component2);

    function Message() {
        _classCallCheck(this, Message);

        return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
    }

    _createClass(Message, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.text,
                " ",
                React.createElement(
                    Button,
                    null,
                    "Delete"
                )
            );
        }
    }]);

    return Message;
}(React.Component);

var MessageList = function (_React$Component3) {
    _inherits(MessageList, _React$Component3);

    function MessageList() {
        _classCallCheck(this, MessageList);

        return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).apply(this, arguments));
    }

    _createClass(MessageList, [{
        key: "getChildContext",
        value: function getChildContext() {
            return { color: "purple" };
        }
    }, {
        key: "render",
        value: function render() {
            var children = this.props.messages.map(function (message) {
                return React.createElement(Message, { text: message.text });
            });
            return React.createElement(
                "div",
                null,
                children
            );
        }
    }]);

    return MessageList;
}(React.Component);

//声明一下childContextTypes


MessageList.childContextTypes = {
    color: React.PropTypes.string
};

ReactDOM.render(React.createElement(MessageList, { messages: [1, 2, 3] }), document.getElementById('root'));