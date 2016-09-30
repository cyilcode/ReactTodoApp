var React = require('react');
var TodoList = require('TodoList');
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
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
