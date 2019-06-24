import React, { Component } from 'react'
import TodoList from "./TodoList";

class TodoApp extends Component {
    state = {
        todos: [
            {id:1, title:'Test todo'}
        ],
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.text.length) {
            return
        }

        const newItem = {
            id: Date.now(),
            title: this.state.text
        }

        this.setState({
            todos: this.state.todos.concat(newItem),
            text: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <TodoList todos={this.state.todos}/>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo-title">Title</label>
                    <input
                        type="text"
                        id="todo-title"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoApp