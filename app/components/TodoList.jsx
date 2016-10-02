var React = require('react');
var Todo = require('Todo');
var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) 
        return <p className="container__message">Nothing to do</p>;
      return todos.map((item) => {
        return (
          <Todo key={item.id} {...item} onToggle={this.props.onToggle}/> // spread operator ftw
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
