import React from 'react';
import { FilterLink } from './..';

const Filters = () => (
  <ul>
    <FilterLink filterValue='SHOW_ALL'>All</FilterLink>
    <FilterLink filterValue='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink filterValue='SHOW_COMPLETED'>Completed</FilterLink>
  </ul>
);
export default Filters;