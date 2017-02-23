'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scaleNames = {
    c: '摄氏温度',
    f: '华氏温度'
};

//定义温度组件

var TemperatureInput = function (_React$Component) {
    _inherits(TemperatureInput, _React$Component);

    function TemperatureInput(props) {
        _classCallCheck(this, TemperatureInput);

        var _this = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(TemperatureInput, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.props.onChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.props.value;
            var scale = this.props.scale;
            return React.createElement(
                'fieldset',
                null,
                React.createElement(
                    'legend',
                    null,
                    '\u8F93\u5165\u6E29\u5EA6 ',
                    scaleNames[scale],
                    ':'
                ),
                React.createElement('input', { value: value,
                    onChange: this.handleChange })
            );
        }
    }]);

    return TemperatureInput;
}(React.Component);

//定义一个计算器组件


var Calculator = function (_React$Component2) {
    _inherits(Calculator, _React$Component2);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this2.handleCelsiusChange = _this2.handleCelsiusChange.bind(_this2);
        _this2.handleFahrenheitChange = _this2.handleFahrenheitChange.bind(_this2);
        _this2.state = { value: '', scale: 'c' };
        return _this2;
    }

    _createClass(Calculator, [{
        key: 'handleCelsiusChange',
        value: function handleCelsiusChange(value) {
            this.setState({ scale: 'c', value: value });
        }
    }, {
        key: 'handleFahrenheitChange',
        value: function handleFahrenheitChange(value) {
            this.setState({ scale: 'f', value: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var scale = this.state.scale;
            var value = this.state.value;
            var celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
            var fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

            return React.createElement(
                'div',
                null,
                React.createElement(TemperatureInput, {
                    scale: 'c',
                    value: celsius,
                    onChange: this.handleCelsiusChange }),
                React.createElement(TemperatureInput, {
                    scale: 'f',
                    value: fahrenheit,
                    onChange: this.handleFahrenheitChange }),
                React.createElement(BoilingVerdict, {
                    celsius: parseFloat(celsius) })
            );
        }
    }]);

    return Calculator;
}(React.Component);

//水是否沸腾的组件


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return React.createElement(
            'p',
            null,
            'The water would boil.'
        );
    }
    return React.createElement(
        'p',
        null,
        'The water would not boil.'
    );
}

function tryConvert(value, convert) {
    var input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    var output = convert(input);
    var rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));

/**
 state提升
 state要提到父组件上面。
 这样符合react的单向数据流的理念。
 组件之间只能通过props来传递数据
 这样最后。整个组件树是一个从上往下数据流动的情况。

 * **/