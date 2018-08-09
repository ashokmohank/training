import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="button"
          value="Increment"
          onClick={() => {
            this.props.incrementHandle();
          }}
        />{" "}
        <input
          type="button"
          value="Decrement"
          onClick={() => {
            this.props.decrementHandle();
          }}
        />
      </form>
    );
  }
}

const FormContainer = connect()(Form);
export default FormContainer;
