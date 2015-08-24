var React = require('react');
var TodoStore = require('../stores/TodoStore');
var TodoItem = require('./TodoItem.react');

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
           return <TodoItem key={todoItem.id} todoItem={todoItem} />;
        });

        return (
            <div>{todoItems}</div>
        )
    }
});

module.exports = TodoApp;