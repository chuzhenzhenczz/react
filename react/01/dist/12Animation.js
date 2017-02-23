'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js


var TodoList = function (_React$Component) {
    _inherits(TodoList, _React$Component);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

        _this.state = { items: ['hello', 'world', 'click', 'me'] };
        _this.handleAdd = _this.handleAdd.bind(_this);
        return _this;
    }

    _createClass(TodoList, [{
        key: 'handleAdd',
        value: function handleAdd() {
            var newItems = this.state.items.concat([prompt('Enter some text')]);
            this.setState({ items: newItems });
        }
    }, {
        key: 'handleRemove',
        value: function handleRemove(i) {
            var newItems = this.state.items.slice();
            newItems.splice(i, 1);
            this.setState({ items: newItems });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var items = this.state.items.map(function (item, i) {
                return React.createElement(
                    'div',
                    { key: item, onClick: function onClick() {
                            return _this2.handleRemove(i);
                        } },
                    item
                );
            });

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleAdd },
                    'Add Item'
                ),
                React.createElement(
                    ReactCSSTransitionGroup,
                    {
                        transitionName: 'example',
                        transitionEnterTimeout: 500,
                        transitionLeaveTimeout: 300 },
                    items
                )
            );
        }
    }]);

    return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(CustomTextInput, null), document.getElementById('root'));