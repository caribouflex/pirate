import { put, takeLatest, all, call } from "redux-saga/effects";
import { ACTIONS_COMMENTS } from "../constants";

function* fetchComments({ storyCommentIds, storyId }) {
  console.log("FETCH PARAM", storyCommentIds, storyId);

  let selectCommentsId = storyCommentIds.slice(0, 10);
  const commentObj = {};
  let responses = yield all(
    selectCommentsId.map(commentId => {
      return call(
        fetch,
        `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
      );
    })
  );
  let comments = yield all(
    responses.map(comment => {
      return call([comment, comment.json]);
    })
  );

  //convert to object
  comments.forEach(element => {
    commentObj[element.id] = element;
  });

  const action = { commentObj, storyId };

  yield put({ type: ACTIONS_COMMENTS.addComments, action });
}

function* commentsActionWatcher() {
  yield takeLatest(ACTIONS_COMMENTS.getComments, fetchComments);
}

export default commentsActionWatcher;
