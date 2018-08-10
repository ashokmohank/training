import { userDetailsAction } from "../actions/userDetailsAction";
import { connect } from "react-redux";
import Form from "../components/Form";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchHandler: url => {
      dispatch(userDetailsAction(url));
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
