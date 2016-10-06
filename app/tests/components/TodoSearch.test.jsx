var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT when input text changes', () => {
    const test_text = 'Trains';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: test_text
    };
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    var input = todosearch.refs.txtSearch;
    input.value = test_text;
    TestUtils.Simulate.change(input);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox changes', () => {
    var action = { type: 'TOGGLE_SHOW_COMPLETED' };
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    var input = todosearch.refs.chkCompleted;
    input.checked = true;
    TestUtils.Simulate.change(input);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
