export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const allItems = [
        ...state, {
          todoText: action.todoText,
          isCheck: action.isCheck,
          todoId: action.todoId,
          isVisible: action.isVisible
        }
      ];
      return allItems.map(item => { return { ...item, isVisible: true } });
    case "TOGGLE_TODO":
      return (state.map((item) => { return ((item.todoId === action.todoId) ? { ...item, isCheck: !item.isCheck } : item) }));
    case "SHOW_ONGOING":
      return state.map((item) => { return ((item.isCheck) ? { ...item, isVisible: false } : { ...item, isVisible: true }) });
    case "SHOW_COMPLETED":
      return state.map((item) => { return ((!item.isCheck) ? { ...item, isVisible: false } : { ...item, isVisible: true }) });
    case "SHOW_ALL":
      return state.map((item) => { return ({ ...item, isVisible: true }) });
    case "DELETE_TODO":
      return state.filter(item => item.todoId !== action.todoId);
    default:
      return state;
  }
}
