import React from "react";

class Display extends React.Component {
  render() {
    let isFetchingJsx = "";
    let userDetailsJsx = "";
    let errorJsx = "";

    if (this.props.isFetching) {
      isFetchingJsx = (
        <h1 style={{ color: "blue" }}>Please wait until details are fetched</h1>
      );
    }

    if (this.props.error) {
      errorJsx = <h1 style={{ color: "red" }}>{this.props.error}</h1>;
    }

    if (this.props.userDetails.name) {
      userDetailsJsx = (
        <ul>
          <li>Name: {this.props.userDetails.name}</li>
          <li>Company: {this.props.userDetails.company}</li>
          <li>Location: {this.props.userDetails.location}</li>
        </ul>
      );
    }
    return (
      <div>
        {isFetchingJsx}
        {userDetailsJsx}
        {errorJsx}
      </div>
    );
  }
}

//Moved to DisplayContainer as a part of refactor
//const DisplayContainer = connect(mapStateToProps)(Display);

export default Display;
