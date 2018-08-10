import React from "react";

class ToDoItem extends React.Component {
  render() {
    let toDoItemStyle = (toDoItemStyle = this.props.isComplete
      ? { textDecoration: "line-through", display: this.props.visible }
      : { textDecoration: "none", display: this.props.visible });
    return (
      <li
        style={toDoItemStyle}
        onClick={() => {
          this.props.toggleHandler(this.props.id);
        }}
      >
        {this.props.text}
      </li>
    );
  }
}

//Moved to TODOItemContainer as a part of refactor
//const TODOItemContainer = connect(mapStateToProps)(TODOItem);

export default ToDoItem;
