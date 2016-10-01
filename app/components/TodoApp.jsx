var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return { // Dummy load to work with.
      todos: [
        {
          id: 1,
          text: 'remember to like trains'
        },
        {
          id: 2,
          text: 'do not touch his tralala'
        },
        {
          id: 3,
          text: 'and dont forget the joker'
        },
        {
          id: 4,
          text: 'remember to remember when you cant really remember'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert(text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
    });
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
