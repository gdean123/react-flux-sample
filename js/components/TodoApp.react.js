var React = require('react');
var TodoStore = require('../stores/TodoStore');

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    };
}

var TodoApp = React.createClass({
    getInitialState: function () {
        return getTodoState();
    },

    render: function () {
        var todoItems = this.state.allTodos.map(function(todoItem) {
           return <div key={todoItem.id}>{todoItem.text}</div>
        });
        return (
            <div>{todoItems}</div>
        )
    }
});

module.exports = TodoApp;