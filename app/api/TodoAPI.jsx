const LIST_KEY = 'todos';
module.exports = {
  setTodos: function (todos) {
    if(Array.isArray(todos)){
      localStorage.setItem(LIST_KEY, JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var raw_todos = localStorage.getItem(LIST_KEY);
    var todos = [];
    try {
      todos = JSON.parse(raw_todos);
    } catch (e) {
      console.log('WTF Man!? u know i dont like non json strings ...');
    }
      return Array.isArray(todos) ? todos : [];
  }
};
