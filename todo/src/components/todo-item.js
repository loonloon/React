import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";

class TodoItem extends React.Component {
    handleCheckboxClick = id => {
        this.props.toggleTodo(id);
    }

    handleDeleteClick = id => {
        this.props.deleteTodo(id);
    }

    render() {
        var todoItem = this.props.item;
        return (
            <li className='list-item' key={todoItem.todoId}>
                <label className={`list-label ${todoItem.isCheck ? 'line-through' : ''}`} >
                    <input defaultChecked={todoItem.isCheck} type='checkbox' onClick={e => this.handleCheckboxClick(todoItem.todoId)} /> {todoItem.todoText}
                </label>
                <span className='delete-btn' role='button' onClick={e => this.handleDeleteClick(todoItem.todoId)}>Delete</span>
            </li>
        );
    }
}

export default connect(null, { toggleTodo, deleteTodo })(TodoItem);