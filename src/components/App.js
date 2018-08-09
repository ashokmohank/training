import React from "react";
import Form from "./Form";
import DisplayContainer from "../containers/DisplayContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
