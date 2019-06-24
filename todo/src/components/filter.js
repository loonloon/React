import React from "react";
import { connect } from "react-redux";
import { showOngoing, showCompleted, showAll } from "../actions";

class Filter extends React.Component {
    showOngoing = () => {
        this.props.showOngoing();
    }

    showCompleted = () => {
        this.props.showCompleted();
    }

    showAll = () => {
        this.props.showAll();
    }

    render() {
        const todos = this.props.todos;
        return (
            <div className='filter-container'>Filters:
            <input type='radio' name='filter' id='allFilter' className='filter-input' onClick={this.showAll} disabled={todos.length === 0} /><label for='allFilter' className='filter-label'>All</label>
                <input type='radio' name='filter' id='activeFilter' className='filter-input' onClick={this.showOngoing} disabled={todos.length === 0} /><label for='activeFilter' className='filter-label'>Active</label>
                <input type='radio' name='filter' id='completedFilter' className='filter-input' onClick={this.showCompleted} disabled={todos.length === 0} /><label for='completedFilter' className='filter-label'>Completed</label>
            </div>
        );
    }
}

export default connect(null, { showOngoing, showCompleted, showAll })(Filter);