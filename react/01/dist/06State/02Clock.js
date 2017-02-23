"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Hello, world!"
                ),
                React.createElement(
                    "h2",
                    null,
                    "It is ",
                    this.state.date.toLocaleTimeString(),
                    "."
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.timerID == setInterval(function () {

                this.setState({ date: new Date() });
            }.bind(this), 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }]);

    return Clock;
}(React.Component);

var House = function House(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            null,
            props.name
        ),
        React.createElement(Clock, null)
    );
};

var Controller = function (_React$Component2) {
    _inherits(Controller, _React$Component2);

    function Controller(props) {
        _classCallCheck(this, Controller);

        var _this2 = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, props));

        _this2.state = { speed: 0 };
        return _this2;
    }

    _createClass(Controller, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.timerID == setInterval(function () {

                var speed = +this.state.speed + 1;
                console.log(speed);
                this.setState({ speed: speed });
            }.bind(this), 1000);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "span",
                    null,
                    this.props.name
                ),
                React.createElement(Enginner, { speed: this.state.speed })
            );
        }
    }]);

    return Controller;
}(React.Component);

var Enginner = function (_React$Component3) {
    _inherits(Enginner, _React$Component3);

    function Enginner(props) {
        _classCallCheck(this, Enginner);

        var _this3 = _possibleConstructorReturn(this, (Enginner.__proto__ || Object.getPrototypeOf(Enginner)).call(this, props));

        _this3.state = { speed: props.speed };
        return _this3;
    }

    _createClass(Enginner, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "\u5F53\u524D\u901F\u5EA6\u662F:",
                this.props.speed
            );
        }
    }]);

    return Enginner;
}(React.Component);

ReactDOM.render(React.createElement(Controller, { name: "\u8FD9\u662Frose\u7684\u5C0F\u5C4B" }), document.getElementById('root'));