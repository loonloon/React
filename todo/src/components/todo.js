import React from "react";
import { connect } from "react-redux";

import "./todo.css";
import TodoItem from "./todo-item";
import Filter from "./filter";
import { addTodo, toggleTodo } from "../actions";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({ value })
    }

    handleKeyUp = (value, e) => {
        if (e.key === 'Enter') {
            this.state.value.trim().length && this.props.addTodo(value);
            this.setState({ value: '' })
        }
    }

    handleSubmit = value => {
        this.state.value.trim().length && this.props.addTodo(value);
        this.setState({ value: '' })
    }

    handleClearIcon = () => {
        this.setState({ value: '' })
    }

    handleCheckboxClick = id => {
        this.props.toggleTodo(id);
    }

    render() {
        const value = this.state.value;
        const todos = this.props.todos;
        const visibleElements = todos.filter(item => item.isVisible);
        return (
            <React.Fragment>
                <h1>Todo App</h1>
                <div className="todo-container">
                    <div className='inputFields'>
                        <input className='inputs' type='text' value={value} onChange={this.handleChange} onKeyUp={this.handleKeyUp.bind(this, value)} />
                        <span className={`input-clear-icon ${value !== '' ? 'clear-icon--show' : ''} `} onClick={this.handleClearIcon}>X</span>
                    </div>
                    <button className='btn' type='button' onClick={this.handleSubmit.bind(this, value)}>Submit
               </button>
                </div>
                {
                    visibleElements.length > 0 &&
                    <ul className='list'>{todos.map((item, index) => { return (item.isVisible && <TodoItem item={item} />) })}</ul>
                }
                {
                    todos.length === 0 ? <p>TODO list is empty</p> : (visibleElements.length === 0 ? <p>No results found for this filter</p> : '')
                }
                <Filter todos={todos} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return { todos: state.todos }
}

export default connect(mapStateToProps, { addTodo, toggleTodo })(Todo);