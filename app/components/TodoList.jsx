var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');
const TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function() {
    var { todos, searchText, showCompleted } = this.props;
    var renderTodos = () => {
      if(todos.length === 0)
        return <p className="container__message">Nothing to do</p>;
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((item) => {
        return (
          <Todo key={item.id} {...item} /> // spread operator ftw
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

export default connect((state) => { return state; })(TodoList);
