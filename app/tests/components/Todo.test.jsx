var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should call handler when on click event fires up', () => {
      var spy = expect.createSpy();
      var todoItem = {
        id: 1337,
        text: 'l33t',
        completed: false
      };
      var todo = TestUtils.renderIntoDocument(<Todo {...todoItem} onToggle={spy}/>);
      TestUtils.Simulate.click($(ReactDOM.findDOMNode(todo))[0]);
      expect(spy).toHaveBeenCalledWith(todoItem.id);
    });
});
