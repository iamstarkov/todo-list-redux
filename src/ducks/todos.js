import PropTypes from 'prop-types';

export const NAMESPACE = 'todos';

const defaultState = {
  todos: [],
  filters: 'SHOW_ALL',
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

const rootTodos = state => state[NAMESPACE] || defaultState[NAMESPACE];
const rootFilters = state => state.filters || defaultState.filters;

const getFilteredTodos = state => {
  switch (rootFilters(state)) {
    case 'SHOW_ALL':
      return rootTodos(state);
    case 'SHOW_COMPLETED':
      return rootTodos(state).filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return rootTodos(state).filter(
        t => !t.completed
      );
    default: return rootTodos(state);
  }
};

export const selectors = {
    rootTodos,
    rootFilters,
    getFilteredTodos,
};
export function reducerTodos(state = defaultState.todos, { type, payload }) {
  switch (type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [payload, ...rootTodos(state)]
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