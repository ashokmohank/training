import Display from "../components/Display";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return { val: state.counter.count };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
