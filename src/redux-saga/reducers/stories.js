import { ACTIONS_STORIES } from "../constants";

const stories = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS_STORIES.addStories:
      return state;
    case ACTIONS_STORIES.getStories:
      return state;
    default:
      return state;
  }
};

export default stories;
