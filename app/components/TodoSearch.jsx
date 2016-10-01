var React = require('react');

var TodoSearch = React.createClass({
  handleChange: function () {
    var showCompleted = this.refs.chkCompleted.checked;
    var searchText = this.refs.txtSearch.value;
    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input type="text" refs="txtSearch" placeholder="Search" onChange={this.handleChange}/>
        </div>
        <div>
          <label>
            <input type="checkbox" refs="chkCompleted" onChange={this.handleChange}/>
            Show completed todos 
          </label>
        </div>
      </div>
    );
  }

});

module.exports = TodoSearch;
