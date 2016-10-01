var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });
  it('should trigger and send data to parent when input text changes', () => {
    var test_text = 'Trains';
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    var input = todosearch.refs.txtSearch;
    input.value = test_text;
    TestUtils.Simulate.change(input);
    expect(spy).toHaveBeenCalledWith(false, test_text);
  });

  it('should trigger and send data to parent when checkbox changes', () => {
    var test_data = true;
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    var input = todosearch.refs.chkCompleted;
    input.checked = test_data;
    TestUtils.Simulate.change(input);
    expect(spy).toHaveBeenCalledWith(test_data, '');
  });
});
