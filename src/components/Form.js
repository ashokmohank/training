import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="to do item"
          ref={node => {
            this.textBox = node;
          }}
        />{" "}
        <input
          type="button"
          value="Add To Do"
          onClick={() => {
            this.props.addHandler(this.textBox.value);
          }}
        />
      </form>
    );
  }
}

export default Form;
