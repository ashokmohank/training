import { incrementAction, decrementAction } from "../actions/counterActions";
import { connect } from "react-redux";
import Form from "../components/Form";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    incrementHandle: () => {
      dispatch(incrementAction());
    },
    decrementHandle: () => {
      dispatch(decrementAction());
    }
  };
}
function mapStateToProps(state, ownProps) {
  return {};
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
