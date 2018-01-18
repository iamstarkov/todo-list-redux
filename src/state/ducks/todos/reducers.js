import * as types from "./";
import PropTypes from 'prop-types';

export const NAMESPACE = 'todos';

const initialState = [];
const shape = PropTypes.array;


const todoReducer = (state = initialState, action) => {
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

export default {
  initialState,
  shape,
  reducer: { NAMESPACE: todoReducer },
};


