import React from "react";
import { shallow } from "enzyme";
import Comment, { CommentText } from "../Comment";
import UserDetails from "../UserDetails";
import KidNavigation from "../KidNavigation";

describe("<Comment />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Comment id={1} loadResponses={() => {}} text="Test test" />
    );
  });

  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain <UserDetails /> component", () => {
    expect(wrapper.find(UserDetails).length).toBe(1);
  });

  it("Should contain <KidNavigation /> component", () => {
    expect(wrapper.find(KidNavigation).length).toBe(1);
  });

  it("Should contain <CommentText /> component", () => {
    expect(wrapper.find(CommentText).length).toBe(1);
  });
});
