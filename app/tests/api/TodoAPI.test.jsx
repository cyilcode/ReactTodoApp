const expect = require('expect');
const TodoAPI = require('TodoAPI'); // gonna use const from now on. makes more sense to me.
const VALID_DATA = [{
  id: 1,
  text: 'h3ll0',
  completed: true
}, {
  id: 2,
  text: 'i liek trainz',
  completed: true
}, {
  id: 3,
  text: 'wow i am so extended',
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

  describe('filterTodos', () => {
    it('should return all items when showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(VALID_DATA, true, '');
      expect(filteredTodos.length).toBe(VALID_DATA.length);
    });

    it('should not return all items when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(VALID_DATA, false, '');
      expect(filteredTodos.length).toNotBe(VALID_DATA.length);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(VALID_DATA, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all items when there is no searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(VALID_DATA, true, '');
      expect(filteredTodos.length).toBe(VALID_DATA.length);
    });

    it('should return all the items that includes searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(VALID_DATA, true, 'trainz'); // VALID_DATA index 1
      expect(filteredTodos.length).toBe(1);
      expect(filteredTodos[0].text).toBe(VALID_DATA[1].text);
    }); 

  });
});
