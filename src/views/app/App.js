import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import todos from './../../state/ducks/todos';


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

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: todos.selectors.root(state)
  };
};
const mapDispatchToProps = {
  onAddTodo: todos.actions.addTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




