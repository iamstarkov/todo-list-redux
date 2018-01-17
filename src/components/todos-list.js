import React from 'react';
import { connect } from 'react-redux';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE' :
      return todos.filter(
        t => !t.completed
      );
    default: return todos;
  }
}

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map(t => (
        <li key={t.id}
            onClick={() => props.onToggleTodo(t.id)}
            style={{textDecoration: t.completed ? 'line-through' : 'none'}}>{t.value}</li>
      ))}
    </ul>
  )
}
  ;
const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.filter)
  };
};
const mapDispatchToProps = (dispatch) => ({
  onToggleTodo(id) {
    dispatch({
      type: "TOGGLE_TODO",
      id: id
    })
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);