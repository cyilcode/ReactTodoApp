var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {txtTodo} = this.refs;
    if(txtTodo.value.length > 0) {
        this.props.onAddTodo(txtTodo.value);
        txtTodo.value = '';
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="What do you need to do ?" ref="txtTodo" />
        <button className="button">Add Todo</button>
      </form>
    </div>
    );
  }

});

module.exports = AddTodo;
