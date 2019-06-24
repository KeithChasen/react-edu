import React, { Component } from 'react'
import TodoList from "./TodoList";

class TodoApp extends Component {
    state = {
        todos: [
            {id:1, title:'Test todo'}
        ]
    }

    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default TodoApp