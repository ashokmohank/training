import React from "react";

class Display extends React.Component {
  render() {
    return <h1>{this.props.val}</h1>;
  }
}

//Moved to DisplayContainer as a part of refactor
//const DisplayContainer = connect(mapStateToProps)(Display);

export default Display;
