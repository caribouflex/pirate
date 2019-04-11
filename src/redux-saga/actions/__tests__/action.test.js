import * as actions from "..";
import { ACTIONS_STORIES, ACTIONS_COMMENTS } from "../../constants";

describe("Redux actions", () => {
  it("Should create an action to get the stories", () => {
    const expectedAction = {
      type: ACTIONS_STORIES.getStories
    };
    expect(actions.getStories()).toEqual(expectedAction);
  });

  it("Should create an action to get the comments", () => {
    const storyCommentIds = [1, 2, 3];
    const storyId = 1;
    const parentId = 2;
    const expectedAction = {
      type: ACTIONS_COMMENTS.getComments,
      storyCommentIds: storyCommentIds,
      storyId: storyId,
      parentId: parentId
    };
    expect(actions.getComments(storyCommentIds, storyId, parentId)).toEqual(
      expectedAction
    );
  });

  it("Should create an action to set the selected Comment Id", () => {
    const id = 1;
    const expectedAction = {
      type: ACTIONS_COMMENTS.setSelectedComment,
      id: id
    };
    expect(actions.setSelectedComment(id)).toEqual(expectedAction);
  });

  it("Should create an action to set the selected Story Id", () => {
    const id = 1;
    const expectedAction = {
      type: ACTIONS_STORIES.setSelectedStory,
      id: id
    };
    expect(actions.setSelectedStory(id)).toEqual(expectedAction);
  });
});
