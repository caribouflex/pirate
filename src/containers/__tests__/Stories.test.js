import React from "react";
import { shallow } from "enzyme";
import { Stories } from "../Stories";
import Error from "../../components/Error";
import Story from "../../components/Story";

describe("<Stories />", () => {
  let wrapper;
  const getCommentsAction = jest.fn();
  const getStoriesAction = jest.fn();
  const setSelectedCommentAction = jest.fn();
  const setSelectedStoryAction = jest.fn();

  const mockStory = {
    "19626247": {
      by: "laurex",
      descendants: 1,
      id: 19626247,
      kids: [19629601],
      score: 55,
      time: 1554913569,
      title: "“Hyperscans” Show How Brains Sync as People Interact",
      type: "story",
      url:
        "https://www.scientificamerican.com/article/hyperscans-show-how-brains-sync-as-people-interact/"
    }
  };

  it("Should renders without crashing", () => {
    const wrapper = shallow(
      <Stories
        stories={mockStory}
        getStoriesAction={getStoriesAction}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("Should renders with mock data", () => {
    wrapper = shallow(
      <Stories
        stories={mockStory}
        getStoriesAction={getStoriesAction}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should renders 1 Story", () => {
    wrapper = shallow(
      <Stories
        stories={mockStory}
        getStoriesAction={getStoriesAction}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper.find(Story).dive().length).toBe(1);
  });

  it("Should be empty with no mock values", () => {
    wrapper = shallow(
      <Stories
        getCommentsAction={getCommentsAction}
        getStoriesAction={getStoriesAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should renders the <Error/> components", () => {
    const wrapperError = shallow(
      <Stories
        errorMessage="An Error Occured"
        getCommentsAction={getCommentsAction}
        getStoriesAction={getStoriesAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapperError.find(Error).length).toBe(1);
  });

  it("Should not call getCommentsAction if id exists", () => {
    const commentsId = ["123456"];
    const wrapper = shallow(
      <Stories
        allCommentsId={commentsId}
        getStoriesAction={getStoriesAction}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    const instance = wrapper.instance();
    instance.handleClick([], "123456");
    expect(getCommentsAction).not.toHaveBeenCalled();
  });
});
