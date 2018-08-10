import { connect } from "react-redux";
import Filter from "../components/Filter";
import { filterToDoAction } from "../actions/toDoAction";

function mapStateToProps(state, ownProps) {
  return {
    isActive: !ownProps.isActive
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    filterHandler: filter => {
      dispatch(filterToDoAction(filter));
    }
  };
}
const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
