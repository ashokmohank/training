import React from "react";
import ToDoItem from "./ToDoItem";

class Display extends React.Component {
  render() {
    let toDoItems = this.props.items;
    let toDoJsx = "";

    if (toDoItems) {
      toDoJsx = toDoItems.map((toDoItem, idx) => {
        let visibleProp = "block";
        if (this.props.filter === "COMPLETE" && toDoItem.isComplete !== true) {
          visibleProp = "none";
        } else if (
          this.props.filter === "ACTIVE" &&
          toDoItem.isComplete !== false
        ) {
          visibleProp = "none";
        }
        return (
          <ToDoItem
            key={toDoItem.id}
            isComplete={toDoItem.isComplete}
            text={toDoItem.text}
            toggleHandler={this.props.toggleHandler}
            filter={visibleProp}
          />
        );
      });
    }
    return (
      <div>
        <ul>{toDoJsx}</ul>
      </div>
    );
  }
}

//Moved to DisplayContainer as a part of refactor
//const DisplayContainer = connect(mapStateToProps)(Display);

export default Display;
