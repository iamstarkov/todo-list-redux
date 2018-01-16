const filters = (state=[], action) => {
  console.log(action);
  switch(action.type) {
    case 'SHOW_ALL' :
      return state;
    case 'SHOW_ACTIVE' :
      return action.todos.filter(
        todo => !todo.completed
      );
    case 'SHOW_COMPLETED' :
      return action.todos.filter(
        todo => todo.completed
      );
    default:
      return state
  }
};
export default filters;