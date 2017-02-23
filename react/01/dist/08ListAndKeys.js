'use strict';

function NumberList(props) {
    var numbers = props.numbers;
    var listItems = numbers.map(function (number) {
        return React.createElement(
            'li',
            { key: number },
            number
        );
    });
    return React.createElement(
        'ul',
        null,
        listItems
    );
}

var numbers = [1, 2, 3, 4, 5];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById('root'));