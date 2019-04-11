import React from "react";
import { shallow } from "enzyme";
import Link from "../Link";

describe("<Link />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Link>Hello</Link>);
  });

  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain the passed children", () => {
    expect(wrapper.contains("Hello")).toBe(true);
  });
});
