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
  currentFilter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentFilter: todosDuck.selectors.filtering(state),
});

const mapDispatchToProps = {
  onFilter: todosDuck.actions.filterTodos,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);