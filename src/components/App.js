import React from "react";
import FormContainer from "../containers/FormContainer";
import DisplayContainer from "../containers/DisplayContainer";
import FilterContainer from "../containers/FilterContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <FilterContainer />
        <br />
        <FormContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
