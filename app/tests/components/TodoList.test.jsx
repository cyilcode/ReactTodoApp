var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');
var {Provider} = require('react-redux');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todoitems = [
          {
            id: 1,
            text: 'test1',
            completed: false,
            completedAt: undefined,
            createdAt: 500
          },
          {
            id: 2,
            text: 'test2',
            completed: false,
            completedAt: undefined,
            createdAt: 500
          }
        ];
        var store = configure({todos: todoitems});
        var provider = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ConnectedTodoList />
          </Provider>);

        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
        expect(todoitems.length).toBe(todosComponents.length);
    });

    it('should render default message when there is no todos', () => {
        var todoitems = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todoitems} />);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});
