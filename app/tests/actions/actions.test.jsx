var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    const text_to_set = 'i li3k tr4!nz';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: text_to_set
    };
    var res = actions.setSearchText(text_to_set);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const text_to_set = 'lelelelelele';
    var action = {
      type: 'ADD_TODO',
      text: text_to_set
    };
    var res = actions.addTodo(text_to_set);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = { type: 'TOGGLE_SHOW_COMPLETED' };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    const id_to_set = '1337';
    var action = { type: 'TOGGLE_TODO', id: id_to_set };
    var res = actions.toggleTodo(id_to_set);
    expect(res).toEqual(action);
  });

});
