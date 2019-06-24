export const addTodo = value => {
    return {
        type: "ADD_TODO",
        todoText: value,
        isCheck: false,
        todoId: Date.now(),
        isVisible: true
    };
};

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        todoId: id
    };
};

export const showAll = () => {
    return {
        type: "SHOW_ALL"
    };
};

export const showOngoing = () => {
    return {
        type: "SHOW_ONGOING"
    };
};

export const showCompleted = () => {
    return {
        type: "SHOW_COMPLETED"
    };
};

export const deleteTodo = id => {
    return {
        type: "DELETE_TODO",
        todoId: id
    };
};