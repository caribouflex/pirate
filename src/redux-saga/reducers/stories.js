import { ACTIONS_STORIES } from "../constants";

const stories = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS_STORIES.addStories:
      return {
        ...state,
        allIds: action.result.storiesId,
        byId: action.result.stories,
        loading: false
      };
    case ACTIONS_STORIES.getStories:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default stories;
