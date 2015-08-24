var TodoConstants = require('../constants/TodoConstants');

var TodoStore = {
    getAll: function() {
        return [{
            id: 1,
            complete: true,
            text: 'i am a todo item'
        }, {
            id: 2,
            complete: false,
            text: 'i will never be completed'
        }];
    }
};

module.exports = TodoStore;