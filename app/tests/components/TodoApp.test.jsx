const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoApp = require('TodoApp');
const actions = require('actions');
const configureStore = require('configureStore');
import TodoList from 'TodoList';

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

    it('should render TodoList', () => {
      var store = configureStore.configure();
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <TodoApp />
        </Provider>
      );
      var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
      expect(todoList.length).toEqual(1);
    });
});
