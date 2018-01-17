import React, { Component } from 'react';
import './App.css';
import TodosList from './todos-list';
import Filters from './filters';
import { connect } from 'react-redux';

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
        <TodosList/>
        <Filters/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = (dispatch) => ({
  onAddTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      todos: todo
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




