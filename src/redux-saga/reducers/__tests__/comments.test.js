import commentsReducer from "../comments";
import { ACTIONS_COMMENTS } from "../../constants";

const basicCompleteState = {
  allIds: ["1"],
  byId: {
    "1": { childrens: { "123": { title: "Hello" } }, parent: 987 }
  },
  errorMessage: null,
  loading: false,
  selectedId: null
};

describe("Comments reducer", () => {
  it("Should return the initial state", () => {
    expect(commentsReducer(undefined, {})).toEqual({
      byId: {},
      allIds: [],
      loading: false,
      selectedId: null,
      errorMessage: null
    });
  });

  it("Should handle ADD_COMMENTS", () => {
    const action1 = {
      commentObj: { 123: { title: "Hello" } },
      storyId: "1",
      parentId: 987
    };
    expect(
      commentsReducer(undefined, {
        type: ACTIONS_COMMENTS.addComments,
        action: action1
      })
    ).toEqual({
      allIds: ["1"],
      byId: { "1": { childrens: { "123": { title: "Hello" } }, parent: 987 } },
      errorMessage: null,
      loading: false,
      selectedId: null
    });

    const action2 = {
      commentObj: { 456: { title: "Hello" } },
      storyId: "2",
      parentId: null
    };

    expect(
      commentsReducer(
        {
          allIds: ["1"],
          byId: {
            "1": { childrens: { "123": { title: "Hello" } }, parent: 987 }
          },
          errorMessage: null,
          loading: false,
          selectedId: null
        },
        {
          type: ACTIONS_COMMENTS.addComments,
          action: action2
        }
      )
    ).toEqual({
      allIds: ["1", "2"],
      byId: {
        "1": { childrens: { "123": { title: "Hello" } }, parent: 987 },
        "2": { childrens: { "456": { title: "Hello" } }, parent: null }
      },
      errorMessage: null,
      loading: false,
      selectedId: null
    });
  });

  it("Should handle GET_COMMENTS", () => {
    expect(
      commentsReducer(basicCompleteState, {
        type: ACTIONS_COMMENTS.getComments
      })
    ).toEqual({
      allIds: ["1"],
      byId: {
        "1": { childrens: { "123": { title: "Hello" } }, parent: 987 }
      },
      errorMessage: null,
      loading: true,
      selectedId: null
    });
  });

  it("Should handle SET_SELECTED_COMMENT", () => {
    expect(
      commentsReducer(basicCompleteState, {
        type: ACTIONS_COMMENTS.setSelectedComment,
        id: "123"
      })
    ).toEqual({
      allIds: ["1"],
      byId: {
        "1": { childrens: { "123": { title: "Hello" } }, parent: 987 }
      },
      errorMessage: null,
      loading: false,
      selectedId: "123"
    });
  });

  it("Should handle FETCH_COMMENTS_FAILURE", () => {
    expect(
      commentsReducer(basicCompleteState, {
        type: ACTIONS_COMMENTS.fetchCommentsFailure,
        error: { message: "Error" }
      })
    ).toEqual({
      allIds: ["1"],
      byId: {
        "1": { childrens: { "123": { title: "Hello" } }, parent: 987 }
      },
      errorMessage: "Error",
      loading: false,
      selectedId: null
    });
  });
});
