const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const text_to_set = 'action man';
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: text_to_set
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(text_to_set).toEqual(res);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip showCompleted', () => {
      const current_state = false;
      var action = { type: 'TOGGLE_SHOW_COMPLETED' };
      var res = reducers.showCompletedReducer(df(current_state), df(action)); // fl!p fl0p
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const text_to_set = 'h3ll0000';
      var action = { type: 'ADD_TODO', text: text_to_set };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length > 0).toEqual(true);
      expect(res[0].text).toEqual(text_to_set);
    });

    it('should complete a todo', () => {
      const object_id = 1;
      const object_array = [{
        id: 1,
        text: 'wow i am done',
        completed: false,
        createdAt: 12345,
        completedAt: undefined
      }];
      var action = { type: 'TOGGLE_TODO', id: object_id };
      var res = reducers.todosReducer(df(object_array), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should add existing todos', () => {
      const todos = [{
        id: 1234,
        text: 'lel3l3l3l3',
        completed: false,
        completedAt: undefined,
        createdAt: 12345
      }];
      var action = { type: 'ADD_TODOS', todos };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
