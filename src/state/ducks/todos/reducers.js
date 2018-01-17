import { combineReducers } from 'redux';
import * as types from "./";

const todoReducer = (state = [], action ) => {
  console.log(types);
  switch( action.type ) {
    case types.ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case types.TOGGLE_TODO :
      return state.map(t => {
        if(action.id === t.id) t.completed = !t.completed;
        return t;
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  todoReducer,

});

export reducer;


