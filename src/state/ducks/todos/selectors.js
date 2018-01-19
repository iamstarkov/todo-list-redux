import defaultState from './';
const root = state => state.todos || defaultState;


export const selectors = {
  root,
};