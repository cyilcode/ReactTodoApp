var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

export var TodoSearch = React.createClass({
  render: function() {
      var { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="txtSearch" placeholder="Search" value={searchText} onChange={()=> {
              var ref_searchText = this.refs.txtSearch.value;
              dispatch(actions.setSearchText(ref_searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="chkCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
})(TodoSearch);
