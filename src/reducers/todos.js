const todos = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return [
        ...state,
        action.todos
      ];
    case 'TOGGLE_TODO' :
      return state.map(t => {
        if(action.id === t.id) t.completed = !t.completed;
        return t;
      });
    default:
      return state
  }
};
export default todos;