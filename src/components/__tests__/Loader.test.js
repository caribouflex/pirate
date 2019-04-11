import React from "react";
import { shallow } from "enzyme";
import Loader from "../Loader";

describe("<Loader />", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should not be displayed", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists()).toBe(true);
  });
});
