import { ACTIONS_STORIES } from "../constants";

const initState = {
  allIds: [],
  byId: {},
  loading: false,
  selectedStoryId: null,
  errorMessage: null
};

const stories = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_STORIES.addStories:
      return {
        ...state,
        allIds: [...state.allIds, ...action.result.storiesId],
        byId: { ...state.byId, ...action.result.stories },
        loading: false
      };
    case ACTIONS_STORIES.getStories:
      return { ...state, loading: true };
    case ACTIONS_STORIES.setSelectedStory:
      return { ...state, selectedStoryId: action.id };
    case ACTIONS_STORIES.fetchStoriesFailure:
      return {
        ...state,
        errorMessage: action.error.message,
        loading: false
      };
    default:
      return state;
  }
};

export default stories;
