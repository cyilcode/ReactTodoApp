var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

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
});
