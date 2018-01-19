import * as types from "./";
import defaultState from './';

export const NAMESPACE = 'todos';

const todoReducer = (state = defaultState, action) => {
  switch( action.type ) {
    case types.ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case types.TOGGLE_TODO :
      return state.map(t => ({
        ...t,
        completed: action.id === t.id ? !t.completed : t.completed
      });
    default:
      return state;
  }
};
export const reducer: { NAMESPACE: todoReducer }


