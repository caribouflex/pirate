import React from "react";
import { shallow } from "enzyme";
import StoryMeta from "../StoryMeta";
import UserDetails from "../UserDetails";
import KidNavigation from "../KidNavigation";
import Link from "../Link";

describe("<StoryMeta />", () => {
  let wrapper;
  const loadComments = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <StoryMeta
        author="Kevin"
        date={1554946104}
        commentsCount={152}
        loadComments={loadComments}
      />
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

  it("Should call loadComment", () => {
    wrapper
      .find(KidNavigation)
      .dive()
      .find(Link)
      .simulate("click");
    expect(loadComments).toHaveBeenCalled();
  });
});
