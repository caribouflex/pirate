import React from "react";
import { shallow } from "enzyme";
import Score from "../Score";
import Icon from "../../style/icons";

describe("<Score />", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Score />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain an Icon and a div", () => {
    const wrapper = shallow(<Score />);
    expect(wrapper.find(Icon).length).toBe(1);
    expect(wrapper.find("div").length).toBe(1);
  });

  it("Should show the score passed", () => {
    const wrapper = shallow(<Score score={10} />);
    expect(wrapper.find("div").contains(10)).toBe(true);
  });
});
