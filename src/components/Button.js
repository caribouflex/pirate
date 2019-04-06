import React from "react";
import { connect } from "react-redux";
import { getStories } from "../redux-saga/actions/action";
let Button = ({ getStories, getComments }) => {
  return (
    <div>
      <button onClick={getStories}>Press to see the stories</button>
    </div>
  );
};

const mapDispatchToProps = {
  getStories: getStories
};
Button = connect(
  null,
  mapDispatchToProps
)(Button);

export default Button;
