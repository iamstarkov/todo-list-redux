import PropTypes from 'prop-types';

export const NS = 'items';

const defaultState = [];
const shape = PropTypes.array;

const types = {
 ADD_TODO: `${NS}/ADD`,
 TOGGLE_TODO: `${NS}/TOGGLE`,
};

const addTodo = todos => ({ type: types.ADD_TODO, payload: todos });
const toggleTodo = todo => ({ type: types.TOGGLE_TODO, payload: todo });

export const actions = {
 addTodo,
 toggleTodo,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
 root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
 switch (type) {
   case types.ADD_TODO:
     return [payload, ...state];
   case types.TOGGLE_TODO:
     return state.map(t => ({
       ...t,
       completed: payload.id === t.id ? !t.completed : t.completed
     }));
   default:
     return state;
 }
};

export default {
   actions,
   selectors,
   defaultState,
   shape,
   reducer: { [NS]: reducer },
};
