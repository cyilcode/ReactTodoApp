var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');
var todoapp = TestUtils.renderIntoDocument(<TodoApp/>); // doesn't take any props. So, no need to redefine for every test.

describe('TodoApp', () => {
    var todoItem = {
        id: 1337,
        text: 'all hail mine turtle',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      };
      
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Testing 123';
        todoapp.setState({todos: []});
        todoapp.handleAddTodo(todoText);
        expect(todoapp.state.todos[0].text).toBe(todoText);
        expect(todoapp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed status of todo elements', () => {
      todoapp.setState({ todos: [todoItem] });
      todoapp.handleToggle(todoItem.id);
      expect(todoapp.state.todos[0].completed).toBe(true);
      expect(todoapp.state.todos[0].completedAt).toBeA('number');
    });

    it('should remove completedAt property when toggled to not completed', () => {
      todoItem.completed = true;
      todoapp.setState({ todos: [todoItem] });
      todoapp.handleToggle(todoItem.id);
      expect(todoapp.state.todos[0].completed).toBe(false);
      expect(todoapp.state.todos[0].completedAt).toBe(undefined);
    });



});
