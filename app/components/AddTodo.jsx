var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var {txtTodo} = this.refs;
    if(txtTodo.value.length > 0) {
        dispatch(actions.addTodo(txtTodo.value));
        txtTodo.value = '';
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="What do you need to do ?" ref="txtTodo" />
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
    );
  }

});

export default connect()(AddTodo);
