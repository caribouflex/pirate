import React from "react";
import { shallow } from "enzyme";
import UserDetails, {
  Avatar,
  MetaData,
  MetaDataDate,
  getStringDate
} from "../UserDetails";

describe("<UserDetails />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserDetails author="Kevin" date={1554946104} />);
  });

  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain <Avatar /> component", () => {
    expect(wrapper.find(Avatar).length).toBe(1);
  });

  it("Should contain <MetaData /> component", () => {
    expect(wrapper.find(MetaData).length).toBe(1);
  });

  it("Should contain <MetaDataDate /> component", () => {
    expect(wrapper.find(MetaDataDate).length).toBe(1);
  });

  it("Should render the good date", () => {
    const date = getStringDate(1554946104);
    expect(date).toBe("Wed Apr 10 2019");
  });
});
