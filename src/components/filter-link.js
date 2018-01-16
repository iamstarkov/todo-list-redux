import React from 'react';
import {connect} from "react-redux";

const FilterLink = (props) => (
  <li onClick={() => props.onClickFilter(props.show)}>{props.children}</li>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
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