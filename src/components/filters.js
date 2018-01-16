import React from 'react';
import FilterLink from './filter-link';

const Filters = () => (
  <ul>
    <FilterLink show='SHOW_ALL'>All</FilterLink>
    <FilterLink show='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink show='SHOW_COMPLETED'>Completed</FilterLink>
  </ul>
);
export default Filters;