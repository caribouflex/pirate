import React from "react";
import { shallow } from "enzyme";
import Error from "../Error";

describe("<Error />", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should render children element", () => {
    const wrapper = shallow(
      <Error>
        <p>Test</p>
      </Error>
    );
    expect(wrapper.find("p").length).toBe(1);
  });
});
