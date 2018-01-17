import React from 'react';
import {connect} from "react-redux";

const FilterLink = ({ children, filter, onClickFilter, filterState}) => (
  <li onClick={() => onClickFilter(filter)}
      style={{color: filter === filterState ? 'red' : 'black'}}
  >{children}</li>
);

const mapStateToProps = (state) => {
  return {
    filterState: state.filter
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClickFilter(filter) {
    dispatch({
      type: "CHANGE_FILTER",
      filter: filter
    })
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);