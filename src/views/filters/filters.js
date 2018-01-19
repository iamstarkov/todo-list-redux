import React from 'react';
import FilterLink from '../filter-link/filter-link';

const Filters = () => (
  <ul>
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
  </ul>
);
export default Filters;