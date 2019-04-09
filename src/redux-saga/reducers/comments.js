import { ACTIONS_COMMENTS } from "../constants";

const comments = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS_COMMENTS.addComments:
      const byStoryId = {};
      const { commentObj, storyId } = action.action;
      byStoryId[storyId] = commentObj;
      return {
        ...state,
        ...byStoryId,
        loading: false
      };
    case ACTIONS_COMMENTS.getComments:
      return { ...state, loading: true };
    case ACTIONS_COMMENTS.setSelectedId:
      return {
        ...state,
        selectedId: action.id
      };
    default:
      return state;
  }
};

export default comments;
