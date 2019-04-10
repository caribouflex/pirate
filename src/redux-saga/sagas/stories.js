import { put, takeLatest, call, all } from "redux-saga/effects";
import { ACTIONS_STORIES } from "../constants";

let offset = 0;
let itemQty = 10;

function* getStories(storiesId) {
  let selectStoriesId = storiesId.slice(offset, offset + itemQty);
  const storiesObj = {};
  let responses = yield all(
    selectStoriesId.map(storyId => {
      return call(
        fetch,
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
    })
  );
  let stories = yield all(
    responses.map(story => {
      return call([story, story.json]);
    })
  );

  // convert to object
  stories.forEach(element => {
    storiesObj[element.id] = element;
  });

  // set loading position
  offset += 10;

  return storiesObj;
}

function* fetchStories() {
  const response = yield call(
    fetch,
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const storiesId = yield call([response, response.json]);
  const stories = yield getStories(storiesId);
  const result = { stories, storiesId };

  yield put({ type: ACTIONS_STORIES.addStories, result });
}

function* storiesActionWatcher() {
  yield takeLatest(ACTIONS_STORIES.getStories, fetchStories);
}

export default storiesActionWatcher;
