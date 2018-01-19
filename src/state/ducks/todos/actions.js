import * as types from "./";

const addTodo = todos => ({
  type: types.ADD_TODO,
  payload: todos
});

const toggleTodo = todo => ({
  type: types.TOGGLE_TODO,
  payload: todo
});

export const actions = {
  addTodo,
  toggleTodo
}