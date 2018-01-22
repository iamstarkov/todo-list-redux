import React from 'react';
import { connect } from 'react-redux';
import { todosDuck } from './../../state/ducks';

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map(t => (
        <li key={t.id}
            onClick={() => props.toggleTodo(t)}
            style={{textDecoration: t.completed ? 'line-through' : 'none'}}>{t.value}</li>
      ))}
    </ul>
  )
};
const mapStateToProps = state => ({
  todos: todosDuck.selectors.root(state),
});
const mapDispatchToProps = {
  toggleTodo: todosDuck.actions.toggleTodo,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);