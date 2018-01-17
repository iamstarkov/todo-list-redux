import * as types from "./";

const addTodo = todos => ({
  type: types.ADD_TODO,
  payload: todos
});

const toggleTodo = todos => ({
  type: types.ADD_TODO,
  payload: todos
});

export {
  addTodo,
  toggleTodo
}