import PropTypes from 'prop-types';

export const NS_ROOT = 'todos';
export const NS_ITEMS = 'items';
export const NS_FILTERING = 'filtering';

const defaultState = {
  [NS_ROOT]: [],
  [NS_FILTERING]: 'SHOW_ALL',
};
const shape = PropTypes.object;

const types = {
    ADD_TODO: `${NAMESPACE}/ADD`,
    TOGGLE_TODO: `${NAMESPACE}/TOGGLE`,
    CHANGE_FILTER: `${NAMESPACE}/FILTER`,
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
  switch (selectorRoot(state)) {
    case 'SHOW_ALL':
      return selectorRoot(state);
    case 'SHOW_COMPLETED':
      return selectorRoot(state).filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return selectorRoot(state).filter(
        t => !t.completed
      );
    default: return selectorRoot(state);
  }
};

export const selectors = {
  root: selectorsRoot,
  items: selectorItems,
  filtering: selectorsFiltering,
};
export function reducerTodos(state = defaultState.todos, { type, payload }) {
  switch (type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [payload, ...root(state)]
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(t => ({
          ...t,
          completed: payload.id === t.id ? !t.completed : t.completed
        })),
      };
    default:
      return state.todos;
  }
}
export function reducerFilters(state = defaultState.filters, { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return {
        ...state,
        filters: payload,
      };
    default:
      return state.filters;
  }
}

export default {
    actions,
    selectors,
    defaultState,
    shape,
    reducer: {
      [NAMESPACE]: reducerTodos,
      filters: reducerFilters
    },
};