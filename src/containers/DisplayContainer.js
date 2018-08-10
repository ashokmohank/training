import Display from "../components/Display";
import { connect } from "react-redux";
import { toggleToDoAction } from "../actions/toDoAction";

function mapStateToProps(state, ownProps) {
  return {
    items: state.items,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleHandler: id => {
      dispatch(toggleToDoAction(id));
    }
  };
}

const DisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

export default DisplayContainer;
