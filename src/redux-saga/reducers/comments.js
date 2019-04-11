import { ACTIONS_COMMENTS } from "../constants";

const initState = {
  byId: {},
  allIds: [],
  loading: false,
  selectedId: null,
  errorMessage: null
};

const comments = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_COMMENTS.addComments:
      const byId = {};
      const { commentObj, storyId, parentId } = action.action;
      byId[storyId] = { childrens: commentObj, parent: parentId };
      return {
        ...state,
        byId: { ...state.byId, ...byId },
        allIds: [...state.allIds, storyId.toString()],
        loading: false
      };
    case ACTIONS_COMMENTS.getComments:
      return { ...state, loading: true, errorMessage: null };
    case ACTIONS_COMMENTS.setSelectedComment:
      return {
        ...state,
        selectedId: action.id
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
