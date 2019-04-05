import { ACTIONS_COMMENTS } from "../constants";

const comments = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS_COMMENTS.addComments:
      return state;
    case ACTIONS_COMMENTS.getComments:
      return state;
    default:
      return state;
  }
};

export default comments;
