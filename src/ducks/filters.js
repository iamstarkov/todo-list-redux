import PropTypes from 'prop-types';

export const NAMESPACE = 'filters';

const defaultState = 'SHOW_ALL';
const shape = PropTypes.string;

const types = {
  CHANGE_FILTER: `${NAMESPACE}/CHANGE`,
};

const filterTodos = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
});

export const actions = {
  filterTodos,
};

export function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

const root = state => state[NAMESPACE] || defaultState;

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