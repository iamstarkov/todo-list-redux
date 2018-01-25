import PropTypes from 'prop-types';

export const NS = 'filtering';

const defaultState = 'SHOW_ALL';
const shape = PropTypes.string;

const types = {
  CHANGE_FILTER: `${NS}/FILTER`,
};

const filterTodos = filter => ({ type: types.CHANGE_FILTER, payload: filter });

export const actions = {
  filterTodos,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
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
