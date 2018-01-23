import PropTypes from 'prop-types';
import { combineReducers } from 'redux';

export const NS_ROOT = 'todos';
export const NS_ITEMS = 'items';
export const NS_FILTERING = 'filtering';

const defaultState = {
  [NS_ITEMS]: [],
  [NS_FILTERING]: 'SHOW_ALL',
};
const shape = PropTypes.object;

const types = {
  ADD_TODO: `${NS_ROOT}/ADD`,
  TOGGLE_TODO: `${NS_ROOT}/TOGGLE`,
  CHANGE_FILTER: `${NS_ROOT}/FILTER`,
};

const addTodo = todos => ({
  type: types.ADD_TODO,
  payload: todos
});
const toggleTodo = todo => ({
  type: types.TOGGLE_TODO,
  payload: todo
});
const filterTodos = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
});

export const actions = {
  addTodo,
  toggleTodo,
  filterTodos
};

const selectorRoot = state => state[NS_ROOT] || defaultState;
const selectorItems = state => selectorRoot(state)[NS_ITEMS] || defaultState[NS_ITEMS];
const selectorFiltering = state => selectorRoot(state)[NS_FILTERING] || defaultState[NS_FILTERING];

const getFilteredTodos = state => {
  switch (selectorFiltering(state)) {
    case 'SHOW_ALL':
      return selectorItems(state);
    case 'SHOW_COMPLETED':
      return selectorItems(state).filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return selectorItems(state).filter(
        t => !t.completed
      );
    default: return selectorItems(state);
  }
};

export const selectors = {
  root: selectorRoot,
  items: selectorItems,
  filtering: selectorFiltering,
  getFilteredTodos,
};
const reducerItems = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO:
      return [payload, ...state];
    case types.TOGGLE_TODO:
      return state.map(t => ({
        ...t,
        completed: payload.id === t.id ? !t.completed : t.completed
      }));
    default:
      return selectorItems(state);
  }
};
const reducerFiltering = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return selectorFiltering(state);
  }
};
export const rootReducer =  combineReducers({
  [NS_ITEMS]: reducerItems,
  [NS_FILTERING]: reducerFiltering,
});
export default {
    actions,
    selectors,
    defaultState,
    shape,
    reducer: { [NS_ROOT]: rootReducer }
};