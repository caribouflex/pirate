import storiesReducer from "../stories";
import { ACTIONS_STORIES } from "../../constants";

const basicCompleteState = {
  allIds: ["123"],
  byId: { "123": { title: "Hello" } },
  loading: false,
  selectedStoryId: null,
  errorMessage: null
};

describe("Comments reducer", () => {
  it("Should return the initial state", () => {
    expect(storiesReducer(undefined, {})).toEqual({
      allIds: [],
      byId: {},
      loading: false,
      selectedStoryId: null,
      errorMessage: null
    });
  });

  it("Should handle ADD_STORIES", () => {
    let result = {
      storiesId: ["123"],
      stories: { "123": { title: "Hello" } }
    };
    expect(
      storiesReducer(undefined, {
        type: ACTIONS_STORIES.addStories,
        result
      })
    ).toEqual({
      allIds: ["123"],
      byId: { "123": { title: "Hello" } },
      loading: false,
      selectedStoryId: null,
      errorMessage: null
    });

    result = {
      storiesId: ["456"],
      stories: { "456": { title: "Hello" } }
    };

    expect(
      storiesReducer(
        {
          allIds: ["123"],
          byId: { "123": { title: "Hello" } },
          loading: false,
          selectedStoryId: null,
          errorMessage: null
        },
        {
          type: ACTIONS_STORIES.addStories,
          result
        }
      )
    ).toEqual({
      allIds: ["123", "456"],
      byId: { "123": { title: "Hello" }, "456": { title: "Hello" } },
      loading: false,
      selectedStoryId: null,
      errorMessage: null
    });
  });

  it("Should handle GET_STORIES", () => {
    expect(
      storiesReducer(basicCompleteState, {
        type: ACTIONS_STORIES.getStories
      })
    ).toEqual({
      allIds: ["123"],
      byId: { "123": { title: "Hello" } },
      loading: true,
      selectedStoryId: null,
      errorMessage: null
    });
  });

  it("Should handle SET_SELECTED_STORY", () => {
    expect(
      storiesReducer(basicCompleteState, {
        type: ACTIONS_STORIES.setSelectedStory,
        id: "123"
      })
    ).toEqual({
      allIds: ["123"],
      byId: { "123": { title: "Hello" } },
      loading: false,
      selectedStoryId: "123",
      errorMessage: null
    });
  });

  it("Should handle FETCH_STORIES_FAILURE", () => {
    expect(
      storiesReducer(basicCompleteState, {
        type: ACTIONS_STORIES.fetchStoriesFailure,
        error: { message: "Error" }
      })
    ).toEqual({
      allIds: ["123"],
      byId: { "123": { title: "Hello" } },
      loading: false,
      selectedStoryId: null,
      errorMessage: "Error"
    });
  });
});
