const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

// var store = configStore.configure({
//   todos: TodoAPI.getTodos()
// });

store.subscribe(() => {
  console.log('New state', store.getState());
  TodoAPI.setTodos(store.getState().todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
