import { ACTIONS_STORIES, ACTIONS_COMMENTS } from "../constants";

export const getStories = () => ({
  type: ACTIONS_STORIES.getStories
});

export const getComments = commentsId => ({
  type: ACTIONS_COMMENTS.getComments,
  commentsId
});
