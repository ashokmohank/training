import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          defaultValue="https://api.github.com/users/ashokmohank"
          ref={node => {
            this.textBox = node;
          }}
        />{" "}
        <input
          type="button"
          value="Fetch"
          onClick={() => {
            this.props.fetchHandler(this.textBox.value);
          }}
        />
      </form>
    );
  }
}

export default Form;
