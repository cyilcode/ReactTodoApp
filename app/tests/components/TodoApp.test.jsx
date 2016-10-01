var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');
var todoapp = TestUtils.renderIntoDocument(<TodoApp/>); // doesn't take any props. So, no need to redefine for every test.

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Testing 123';
        todoapp.setState({todos: []});
        todoapp.handleAddTodo(todoText);
        expect(todoapp.state.todos[0].text).toBe(todoText);
    });
    it('should toggle completed status of todo elements', () => {
      var todoItem = {
        id: 1337,
        text: 'all hail mine turtle',
        completed: false
      };
      todoapp.setState({ todos: [todoItem] });
      todoapp.handleToggle(todoItem.id);
      expect(todoapp.state.todos[0].completed).toBe(true);
    });
});
