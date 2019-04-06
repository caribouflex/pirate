import { ACTIONS_COMMENTS } from "../constants";

const initialState = { loading: false };

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_COMMENTS.addComments:
      return {
        allIds: action.result.commentsId,
        byId: action.result.comments,
        loading: false
      };
    case ACTIONS_COMMENTS.getComments:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default comments;
