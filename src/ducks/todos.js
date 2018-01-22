import PropTypes from 'prop-types';

export const NAMESPACE = 'todos';

const defaultState = [];
const shape = PropTypes.array;

const types = {
    ADD_TODO: `${NAMESPACE}/ADD`,
    TOGGLE_TODO: `${NAMESPACE}/TOGGLE`,
};

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
};

export function reducer(state = defaultState, { type, payload }) {
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
}

const root = state => state[NAMESPACE] || defaultState;

const getFilteredTodos = state => {
  switch (state.filters) {
    case 'SHOW_ALL':
      return state.todos;
    case 'SHOW_COMPLETED':
      return state.todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return state.todos.filter(
        t => !t.completed
      );
    default: return state.todos;
  }
};

export const selectors = {
    root,
    getFilteredTodos,
};

export default {
    actions,
    selectors,
    defaultState,
    shape,
    reducer: { [NAMESPACE]: reducer },
};