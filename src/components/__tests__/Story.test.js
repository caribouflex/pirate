import React from "react";
import { shallow } from "enzyme";
import Story from "../Story";
import { Link } from "@material-ui/core";
import StoryMeta from "../StoryMeta";
import Score from "../Score";

describe("<Story />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Story
        id="1"
        author="Kevin"
        title="Test Enzyme"
        link="http://google.ca"
        date={1554946104}
        score={152}
        commentsCount={152}
        selected
        showComments={() => {}}
      />
    );
  });

  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain <StoryMeta /> component", () => {
    expect(wrapper.find(StoryMeta).length).toBe(1);
  });

  it("Should contain <Score /> component", () => {
    expect(wrapper.find(Score).length).toBe(1);
  });
});
