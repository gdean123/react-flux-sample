var React = require('react/addons');

module.exports = describe("TodoApp", function () {
    beforeEach(function() {
        var TodoApp = require('../../js/components/TodoApp.react');
        this.TodoApp = React.addons.TestUtils.renderIntoDocument(<TodoApp />).getDOMNode();
    });

    it("renders a todo item", function () {
        expect(this.TodoApp.innerText).toContain("i am a todo item");
    });
});
