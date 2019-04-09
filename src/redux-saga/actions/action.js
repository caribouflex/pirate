import { ACTIONS_STORIES, ACTIONS_COMMENTS } from "../constants";

export const getStories = () => ({
  type: ACTIONS_STORIES.getStories
});

export const getComments = (storyCommentIds, storyId) => ({
  type: ACTIONS_COMMENTS.getComments,
  storyCommentIds,
  storyId
});

export const setSelectedId = id => ({
  type: ACTIONS_COMMENTS.setSelectedId,
  id
});

export const setSelected = id => ({
  type: ACTIONS_STORIES.setSelected,
  id
});
