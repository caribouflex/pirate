import { put, takeLatest } from "redux-saga/effects";
import { ACTIONS_COMMENTS } from "../constants";

function* fetchComments() {
  const json = yield fetch("https://MYAPIHACKERNEWS").then(response =>
    response.json()
  );
  // TODO : Replace the next line with good values.
  yield put({ type: ACTIONS_COMMENTS.addComments, json: json.THECOMMENTS });
}

function* commentsActionWatcher() {
  yield takeLatest(ACTIONS_COMMENTS.getComments, fetchComments);
}

export default commentsActionWatcher;
