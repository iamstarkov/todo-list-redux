import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import filteringDuck from './filtering';
import itemsDuck from './items';

export const NS = 'todos';

const defaultState = {
  ...filteringDuck.defaultState,
  ...itemsDuck.defaultState,
};

const shape = PropTypes.object;

export const actions = {
  ...filteringDuck.actions,
  ...itemsDuck.actions,
};

const selectorRoot = state => state[NS] || defaultState;

const selectorItems = state => itemsDuck.selectors.root(selectorRoot(state));
const selectorFiltering = state => filteringDuck.selectors.root(selectorRoot(state));

const selectFilteredTodos = state => selectorItems(state).filter(item => {
  switch (selectorFiltering(state)) {
    case 'SHOW_ALL':
      return true;
    case 'SHOW_COMPLETED':
      return item.completed;
    case 'SHOW_ACTIVE':
      return !item.completed;
    default: return true;
  }
});


export const selectors = {
  ...filteringDuck.selectors,
  ...itemsDuck.selectors,
  filteredTodos: selectFilteredTodos,
  filtering: selectorFiltering,
  items: selectorItems,
  root: selectorRoot,
};

export const rootReducer =  combineReducers({
  ...filteringDuck.reducer,
  ...itemsDuck.reducer,
});

export default {
    actions,
    selectors,
    defaultState,
    shape,
    reducer: { [NS]: rootReducer },
};
