import React from "react";
import { shallow } from "enzyme";
import KidNavigation from "../KidNavigation";
import Link from "../Link";

describe("<KidNavigation />", () => {
  let wrapper;
  const loadKids = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <KidNavigation kidsCount={2} loadKids={loadKids} text="Test" />
    );
  });

  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain <Link /> component", () => {
    expect(wrapper.find(Link).length).toBe(1);
  });

  it("Should call loadKids callback", () => {
    wrapper.find(Link).simulate("click");
    expect(loadKids).toBeCalled();
  });
});
