import React, { Component } from "react";
import Button from "../components/Button";
import Stories from "./Stories";
import Comments from "./Comments";

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Stories />
        <Comments />
      </div>
    );
  }
}

export default App;
