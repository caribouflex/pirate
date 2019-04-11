import { ACTIONS_COMMENTS } from "../constants";

const initState = {
  byId: {},
  allIds: [],
  loading: false,
  selectedId: -1,
  errorMessage: null
};

const comments = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_COMMENTS.addComments:
      const byId = {};
      const { commentObj, storyId, parentId } = action.action;
      byId[storyId] = { childrens: commentObj, parent: Number(parentId) };
      return {
        ...state,
        byId: { ...state.byId, ...byId },
        allIds: [...state.allIds, Number(storyId)],
        loading: false
      };
    case ACTIONS_COMMENTS.getComments:
      return { ...state, loading: true, errorMessage: null };
    case ACTIONS_COMMENTS.setSelectedComment:
      return {
        ...state,
        selectedId: Number(action.id)
      };
    case ACTIONS_COMMENTS.fetchCommentsFailure:
      return {
        ...state,
        errorMessage: action.error.message,
        loading: false
      };
    default:
      return state;
  }
};

export default comments;
