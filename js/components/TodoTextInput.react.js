var React = require('react');
var TodoActions = require('../actions/TodoActions');

var TodoTextInput = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value || ''
        };
    },

    render: function() {
        return (
            <input
                onBlur={this._save}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
            />
        )
    },

    _onChange: function(event) {
        this.setState({
            value: event.target.value
        });
    },

    _onKeyDown: function(event) {
        var ENTER_KEY_CODE = 13;

        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    },

    _save: function() {
        TodoActions.create(this.state.value);
        this.setState({ value: '' });
    }
});

module.exports = TodoTextInput;
