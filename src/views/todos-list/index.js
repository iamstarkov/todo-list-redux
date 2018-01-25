import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosDuck } from '../../ducks';
const TodosList = (props) => {
  console.log(props.todos);
  return (
    <ul>
      {props.todos.map(t => (
        <li key={t.id}
            onClick={() => props.onToggleTodo(t)}
            style={{textDecoration: t.completed ? 'line-through' : 'none'}}>{t.value}</li>
      ))}
    </ul>
  )
};
TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: todosDuck.selectors.getFilteredTodos(state),
});
const mapDispatchToProps = {
  onToggleTodo: todosDuck.actions.toggleTodo,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);