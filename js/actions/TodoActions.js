var Dispatcher = require('../dispatcher/Dispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
    create: function(text) {
        Dispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    }
};

module.exports = TodoActions;