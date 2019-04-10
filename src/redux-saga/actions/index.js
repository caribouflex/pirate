import { ACTIONS_STORIES, ACTIONS_COMMENTS } from "../constants";

export const getStories = () => ({
  type: ACTIONS_STORIES.getStories
});

export const getComments = (storyCommentIds, storyId, parentId) => ({
  type: ACTIONS_COMMENTS.getComments,
  storyCommentIds,
  storyId,
  parentId
});

export const setSelectedComment = id => ({
  type: ACTIONS_COMMENTS.setSelectedComment,
  id
});

export const setSelectedStory = id => ({
  type: ACTIONS_STORIES.setSelectedStory,
  id
});
