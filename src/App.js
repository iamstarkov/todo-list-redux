import React, { Component } from 'react';
import './App.css';
import TodosList from './components/todos-list';
import Filters from './components/filters';
import { connect } from 'react-redux';

let currentId = 0;

class App extends Component {
  addTodo() {
    let inputValue = this.input.value;
    if(!inputValue) return;

    this.props.onAddTodo({
        value: inputValue,
        id: currentId++,
        completed: false
      });
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
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => ({
  onAddTodo(data) {
    dispatch({
      type: "ADD_TODO",
      data: data
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




