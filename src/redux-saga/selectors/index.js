export const getCommentIds = state => {
  return (
    state.stories.allIds && state.stories[Object.keys(state.stories)[0]].kids
  );
};
