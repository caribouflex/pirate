import React, { Component } from "react";
import Button from "../components/Button";
import Stories from "./Stories";

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Stories />
      </div>
    );
  }
}

export default App;
