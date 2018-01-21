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

const root = state => state.todos || defaultState;

export const selectors = {
    root,
};

export default {
    actions,
    selectors,
    defaultState,
    shape,
    reducer: { [NAMESPACE]: reducer },
};