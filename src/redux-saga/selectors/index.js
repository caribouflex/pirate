export const getCommentIds = state => {
  console.log(state.stories.byIds[Object.keys(state.stories)[0]]);
  return (
    state.stories.allIds && state.stories[Object.keys(state.stories)[0]].kids
  );
};
