import { addToDoAction } from "../actions/toDoAction";
import { connect } from "react-redux";
import Form from "../components/Form";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addHandler: task => {
      dispatch(addToDoAction(task));
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
