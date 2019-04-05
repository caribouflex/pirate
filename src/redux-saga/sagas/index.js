import { all } from "redux-saga/effects";
import storiesActionWatcher from "./stories";
import commentsActionWatcher from "./comments";

export default function* rootSaga() {
  yield all([storiesActionWatcher(), commentsActionWatcher()]);
}
