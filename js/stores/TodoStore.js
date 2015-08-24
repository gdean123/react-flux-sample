var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/Dispatcher');

var CHANGE_EVENT = 'CHANGE';

var _todos = [{
    id: 0,
    complete: true,
    text: 'i am a todo item'
}, {
    id: 1,
    complete: false,
    text: 'i will never be completed'
}];

function create(text) {
    _todos.push({
        id: _todos.length,
        complete: false,
        text: text
    });
}

var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todos;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function(action) {
    var text;

    switch(action.actionType) {
        case TodoConstants.TODO_CREATE:
            text = action.text.trim();
            if (text !== '') {
                create(text);
                TodoStore.emitChange();
            }
            break;
    }
});


module.exports = TodoStore;
