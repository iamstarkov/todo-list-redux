import defaultState from './defaultState';
const root = state => state.todos || defaultState;
export {root};