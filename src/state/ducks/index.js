import { combineReducers } from 'redux';
import { todos } from './todos/index';
export default combineReducers({
  ...todos.reducer,
})