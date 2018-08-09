import Display from "../components/Display";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.gitapi.isFetching,
    userDetails: state.gitapi.userDetails,
    error: state.gitapi.error
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
