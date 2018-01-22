import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { todosDuck } from '../../ducks';
import { TodosList, Filters } from  './..';

let currentId = 0;
class App extends Component {
  addTodo() {
    let inputValue = this.input.value;
    if(!inputValue) return;

    let newTodo = {
      value: inputValue,
      id: currentId++,
      completed: false
    };
    this.props.onAddTodo(newTodo);
    this.input.value = '';
  }
  render() {
    return (
      <div className="App">
        <input type="text" ref={input => this.input = input} />
        <button onClick={this.addTodo.bind(this)}>Add todo</button>
        <TodosList />
        <Filters />
      </div>
    );
  }
}
App.propTypes = {
  todos: PropTypes.array.isRequired,
  onAddTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: todosDuck.selectors.getFilteredTodos(state),
});
const mapDispatchToProps = {
  onAddTodo: todosDuck.actions.addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




