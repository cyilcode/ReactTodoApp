const expect = require('expect');
const TodoAPI = require('TodoAPI'); // gonna use const from now on. makes more sense to me.
const VALID_DATA = [{
  id: 1,
  text: 'h3ll0',
  completed: false
}];
const BAD_DATA = 'L0RD V0LDEM0RT';
const LS_KEY = 'todos';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem(LS_KEY);
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      TodoAPI.setTodos(VALID_DATA);
      var actualTodos = JSON.parse(localStorage.getItem(LS_KEY));
      expect(actualTodos).toEqual(VALID_DATA);
    });

    it('should not set localStorage when invalid data', () => {
      TodoAPI.setTodos(BAD_DATA);
      expect(localStorage.getItem(LS_KEY)).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return todos array when valid data', () => {
      localStorage.setItem(LS_KEY, JSON.stringify(VALID_DATA));
      expect(TodoAPI.getTodos()).toEqual(VALID_DATA);
    });

    it('should return empty array when invalid data', () => { expect(TodoAPI.getTodos()).toEqual([]); });
  });

});
