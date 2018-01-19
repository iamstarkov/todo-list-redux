import { combineReducers } from 'redux';

import reducer from './ducks/todos';
console.log(reducer);
export default combineReducers({
  todos: reducer
})