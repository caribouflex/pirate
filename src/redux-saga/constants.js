const ACTIONS_STORIES = {
  getStories: "GET_STORIES",
  addStories: "ADD_STORIES",
  setSelectedStory: "SET_SELECTED_STORY",
  fetchStoriesFailure: "FETCH_STORIES_FAILURE"
};

const ACTIONS_COMMENTS = {
  getComments: "GET_COMMENTS",
  addComments: "ADD_COMMENTS",
  setSelectedComment: "SET_SELECTED_COMMENT",
  fetchCommentsFailure: "FETCH_COMMENTS_FAILURE"
};

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export { ACTIONS_STORIES, ACTIONS_COMMENTS, BASE_URL };
