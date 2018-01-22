import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { todosDuck } from '../../ducks';



const FilterLink = props => {
  return (
    <ul>
      <li>
        {props.currentFilter === props.filterValue ? props.children :
          <a href='/'
             onClick={(e) => {
               e.preventDefault();
               props.onFilter(props.filterValue);
             }}>{props.children}</a>
        }
      </li>
    </ul>
  )
};
FilterLink.propTypes = {
  filteredTodos: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filteredTodos: todosDuck.selectors.getFilteredTodos(state),
  currentFilter: todosDuck.selectors.rootFilters(state),
});

const mapDispatchToProps = {
  onFilter: todosDuck.actions.filterTodos,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);