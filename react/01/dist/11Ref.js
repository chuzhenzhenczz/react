"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTextInput = function (_React$Component) {
    _inherits(CustomTextInput, _React$Component);

    function CustomTextInput(props) {
        _classCallCheck(this, CustomTextInput);

        var _this = _possibleConstructorReturn(this, (CustomTextInput.__proto__ || Object.getPrototypeOf(CustomTextInput)).call(this, props));

        _this.focus = _this.focus.bind(_this);
        return _this;
    }

    _createClass(CustomTextInput, [{
        key: "focus",
        value: function focus() {
            // Explicitly focus the text input using the raw DOM API
            this.textInput.focus();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            //ref,react遇到ref就会在实例化组件的时候,调用ref上面指定的函数。
            // Use the `ref` callback to store a reference to the text input DOM
            // element in this.textInput.
            return React.createElement(
                "div",
                null,
                React.createElement("input", {
                    type: "text",
                    ref: function ref(input) {
                        return _this2.textInput = input;
                    } }),
                React.createElement("input", {
                    type: "button",
                    value: "Focus the text input",
                    onClick: this.focus
                })
            );
        }
    }]);

    return CustomTextInput;
}(React.Component);

ReactDOM.render(React.createElement(CustomTextInput, null), document.getElementById('root'));