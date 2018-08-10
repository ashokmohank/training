import React from "react";
import FilterLink from "./FilterLink";
class Filter extends React.Component {
  render() {
    return (
      <div>
        <FilterLink
          isActive={true}
          filterValue={"ALL"}
          filterHandler={this.props.filterHandler}
        />
        {"|"}
        <FilterLink
          isActive={false}
          filterValue={"ACTIVE"}
          filterHandler={this.props.filterHandler}
        />
        {"|"}
        <FilterLink
          isActive={false}
          filterValue={"COMPLETED"}
          filterHandler={this.props.filterHandler}
        />
      </div>
    );
  }
}

export default Filter;
