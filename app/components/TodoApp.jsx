var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function() {
        return { // Dummy load to work with.
            todos: [
                {
                    id: uuid(),
                    text: 'remember to like trains',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'do not touch his tralala',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'and dont forget the joker',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'remember to remember when you cant really remember',
                    completed: true
                }
            ],
            showCompleted: false,
            searchText: ''
        };
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
          if(todo.id === id)
            todo.completed = !todo.completed;
          return todo;
        });
        this.setState({todos: updatedTodos});
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
