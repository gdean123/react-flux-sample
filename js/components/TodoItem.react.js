var React = require('react');

var TodoItem = React.createClass({
    render: function() {
        return (
            <div>{this.props.todoItem.text}</div>
        )
    }
});

module.exports = TodoItem;
