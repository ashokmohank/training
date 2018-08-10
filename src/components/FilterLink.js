import React from "react";

class FilterLink extends React.Component {
  render() {
    let filterStyleJsx = this.props.isActive
      ? { textDecoration: "none", color: "green" }
      : { textDecoration: "underline" };
    return (
      <a
        href="#"
        style={filterStyleJsx}
        onClick={() => {
          this.props.filterHandler(this.props.filterValue);
        }}
      >
        {this.props.filterValue}
      </a>
    );
  }
}

//Moved to DisplayContainer as a part of refactor
//const DisplayContainer = connect(mapStateToProps)(Display);

export default FilterLink;
