var React = require('react');

var TodoSearch = React.createClass({
  handleChange: function () {
    var showCompleted = this.refs.chkCompleted.checked;
    var searchText = this.refs.txtSearch.value;
    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="txtSearch" placeholder="Search" onChange={this.handleChange}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="chkCompleted" onChange={this.handleChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

module.exports = TodoSearch;
