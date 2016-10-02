var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');
describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todoitems = [
          {
            id: 1,
            text: 'test1'
          },
          {
            id: 2,
            text: 'test2'
          }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todoitems} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todoitems.length).toBe(todosComponents.length);
    });

    it('should render default message when there is no todos', () => {
        var todoitems = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todoitems} />);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});
