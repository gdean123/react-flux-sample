var React = require('react');
var TodoStore = require('../stores/TodoStore');
var TodoItem = require('./TodoItem.react');
var TodoTextInput = require('./TodoTextInput.react');

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    };
}

var TodoApp = React.createClass({
    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    getInitialState: function () {
        return getTodoState();
    },

    render: function () {
        var todoItems = this.state.allTodos.map(function(todoItem) {
           return <TodoItem key={todoItem.id} todoItem={todoItem} />;
        });

        return (
            <div>
                <TodoTextInput />
                <div>{todoItems}</div>
            </div>
        )
    },

    _onChange: function() {
        this.setState(getTodoState());
    }
});

module.exports = TodoApp;
