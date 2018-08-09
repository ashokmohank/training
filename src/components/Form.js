import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          defaultValue="https://api.github.com/users/ashokmohank"
          ref={node => {
            this.textbox = node;
          }}
        />{" "}
        <input type="button" value="Fetch" />
      </form>
    );
  }
}

export default Form;
