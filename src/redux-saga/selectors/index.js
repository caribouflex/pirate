import { createSelector } from "reselect";

export const getStories = state => state.stories.byId;

export const getSelectedStoryId = state => state.stories.selectedStoryId;

export const getSelectedCommentId = state => state.comments.selectedId;

export const isStoryLoading = state => state.stories.loading;

export const getAllCommentsId = state => state.comments.allIds;

export const getComments = state => state.comments.byId;

export const getCommentById = (state, props) =>
  props && state.comments.byId[props.id];

export const selectAllCommentsId = createSelector(
  [getAllCommentsId],
  commentsId => commentsId
);

export const selectCommentParent = createSelector(
  [getSelectedStoryId, getSelectedCommentId, getComments],
  (storyId, commentId, comments) =>
    comments[commentId || storyId]
      ? comments[commentId || storyId].parent
      : null
);

export const selectCommentChildrens = createSelector(
  [getSelectedStoryId, getSelectedCommentId, getComments],
  (storyId, commentId, comments) =>
    comments[commentId || storyId]
      ? comments[commentId || storyId].childrens
      : []
);

export const selectStories = createSelector(
  [getStories],
  stories => stories
);

export const selectSelectedStoryId = createSelector(
  [getSelectedStoryId],
  selectedId => selectedId
);

export const selectStoryLoading = createSelector(
  [isStoryLoading],
  loading => loading
);

export const selectCommentsOpen = createSelector(
  [getSelectedCommentId],
  getSelectedCommentId => getSelectedCommentId !== null
);
