import { put, takeLatest } from "redux-saga/effects";
import { ACTIONS_COMMENTS } from "../constants";

function* fetchComments(params) {
  console.log("FETCH PARAM", params);
  const id = 1;
  const commentsId = yield fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  ).then(response => response.json());

  // let selectCommentsId = commentsId.slice(0, 10);
  // let stories = {};
  // selectCommentsId.forEach(id => {
  //   fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  //     .then(response => response.json())
  //     .then(json => {
  //       stories[id] = json;
  //     });
  // });
  // const result = { stories, commentsId };
  yield put({ type: ACTIONS_COMMENTS.addComments, commentsId });
}

function* commentsActionWatcher() {
  yield takeLatest(ACTIONS_COMMENTS.getComments, fetchComments);
}

export default commentsActionWatcher;
