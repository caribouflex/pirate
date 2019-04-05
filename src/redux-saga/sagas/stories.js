import { put, takeLatest } from "redux-saga/effects";
import { ACTIONS_STORIES } from "../constants";

function* fetchStories() {
  const json = yield fetch("https://MYAPIHACKERNEWS").then(response =>
    response.json()
  );
  // TODO : Replace the next line with good values.
  yield put({ type: ACTIONS_STORIES.addStories, json: json.THESTORIES });
}

function* storiesActionWatcher() {
  yield takeLatest(ACTIONS_STORIES.getStories, fetchStories);
}

export default storiesActionWatcher;
