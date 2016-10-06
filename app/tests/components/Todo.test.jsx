var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var {Todo} = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should dispatch toggleTodo action on click', () => {
      var spy = expect.createSpy();
      var todoItem = {
        id: 1337,
        text: 'l33t',
        completed: false
      };
      var todo = TestUtils.renderIntoDocument(<Todo {...todoItem} dispatch={spy}/>);
      TestUtils.Simulate.click($(ReactDOM.findDOMNode(todo))[0]);
      expect(spy).toHaveBeenCalledWith({
        type: 'TOGGLE_TODO',
        id: todoItem.id
      });
    });
});
