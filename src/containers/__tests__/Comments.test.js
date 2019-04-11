import React from "react";
import { shallow } from "enzyme";
import { Comments } from "../Comments";
import Error from "../../components/Error";
import Comment from "../../components/Comment";

describe("<Comments />", () => {
  let wrapper;
  const getCommentsAction = jest.fn();
  const setSelectedCommentAction = jest.fn();
  const setSelectedStoryAction = jest.fn();

  const mockComments = {
    19630105: {
      by: "dmethvin",
      id: 19630105,
      kids: [
        19630188,
        19630645,
        19630399,
        19630134,
        19630111,
        19630131,
        19630233
      ],
      parent: 19629614,
      text:
        "AMP is just a set of conventions and limitations that, when followed, make for a fast site. Anyone can make a fast site if they follow similar rules. Most sites don&#x27;t do that because either the developers want to use something that&#x27;s &quot;nicer&quot; to code but a lot bigger, or because the marketing department insists on loading 12 different tracking and analytics progams--when they probably only use one or two.",
      time: 1554943687,
      type: "comment"
    }
  };

  it("Should renders without crashing", () => {
    const wrapper = shallow(
      <Comments
        comments={mockComments}
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
      <Comments
        comments={mockComments}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should renders 1 Comment", () => {
    wrapper = shallow(
      <Comments
        comments={mockComments}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper.find(Comment).dive().length).toBe(1);
  });

  it("Should be empty with no mock values", () => {
    wrapper = shallow(
      <Comments
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should renders the <Error/> components", () => {
    const wrapperError = shallow(
      <Comments
        errorMessage="An Error Occured"
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    expect(wrapperError.find(Error).length).toBe(1);
  });

  it("Should not call getCommentsAction if id exists", () => {
    const commentsId = [123456];
    const wrapper = shallow(
      <Comments
        allCommentsId={commentsId}
        getCommentsAction={getCommentsAction}
        setSelectedCommentAction={setSelectedCommentAction}
        setSelectedStoryAction={setSelectedStoryAction}
        visible
      />
    );
    const instance = wrapper.instance();
    instance.handleClick([], 123456, 12);
    expect(getCommentsAction).not.toHaveBeenCalled();
  });
});
