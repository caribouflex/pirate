import { put, takeLatest, all, call } from "redux-saga/effects";
import { ACTIONS_COMMENTS, BASE_URL } from "../constants";

let itemQty = 20;

function* fetchComments({ storyCommentIds, storyId, parentId }) {
  let selectCommentsId = storyCommentIds.slice(0, itemQty);
  const commentObj = {};
  try {
    let responses = yield all(
      selectCommentsId.map(commentId => {
        return call(fetch, `${BASE_URL}/item/${commentId}.json`);
      })
    );

    let comments = yield all(
      responses.map(comment => {
        if (comment.status >= 400) {
          const error = {
            message: `An error occured: ${comment.status} ${comment.statusText}`
          };
          throw error;
        }
        return call([comment, comment.json]);
      })
    );

    // convert to object
    comments.forEach(element => {
      commentObj[element.id] = element;
    });

    const action = { commentObj, storyId, parentId };

    yield put({ type: ACTIONS_COMMENTS.addComments, action });
  } catch (err) {
    let error = { message: err.message };
    yield put({ type: ACTIONS_COMMENTS.fetchCommentsFailure, error });
  }
}

function* commentsActionWatcher() {
  yield takeLatest(ACTIONS_COMMENTS.getComments, fetchComments);
}

export default commentsActionWatcher;
