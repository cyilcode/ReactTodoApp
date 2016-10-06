var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    it('should dispatch ADD_TODO when valid data', () => {
        const callData = 'i like trains';
        var action = {
          type: 'ADD_TODO',
          text: callData
        };
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));
        addtodo.refs.txtTodo.value = callData;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid data', () => {
        var callData = '';
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));
        addtodo.refs.txtTodo.value = callData;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});
