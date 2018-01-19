import React from 'react';
import { connect } from 'react-redux';
import { todos } from './../../state/ducks/todos';

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
const mapStateToProps = (state) => {
  return {
    todos: todos.selectors.root(state)
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