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
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filterTodos = todos;
    // filter by showCompleted
    // .filter will keep the 'todo' item in the array if you return true in that callback
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filterTodos = filterTodos.filter((todo) => {
      var lc_search_text = searchText.toLowerCase();
      var lc_todo = todo.text.toLowerCase();
      return lc_search_text.length === 0 || lc_todo.indexOf(lc_search_text) > -1;
    });

    // Sort todos with non-completed first
    filterTodos.sort((a, b) => {
      if(!a.completed && b.completed)
        return -1;
      else if(a.completed && !b.completed)
        return 1;
      else 
        return 0;
    });
    return filterTodos;
  }
};
