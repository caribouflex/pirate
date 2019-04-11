import { put, takeLatest, call, all } from "redux-saga/effects";
import { ACTIONS_STORIES, BASE_URL } from "../constants";

let offset = 0;
let itemQty = 10;

function* getStories(storiesId) {
  let selectStoriesId = storiesId.slice(offset, offset + itemQty);
  const storiesObj = {};
  let responses = yield all(
    selectStoriesId.map(storyId => {
      return call(fetch, `${BASE_URL}/item/${storyId}.json`);
    })
  );
  let stories = yield all(
    responses.map(response => {
      validResponseStatus(response);
      return call([response, response.json]);
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
  try {
    const response = yield call(fetch, `${BASE_URL}/topstories.json`);
    validResponseStatus(response);
    const storiesId = yield call([response, response.json]);
    const stories = yield getStories(storiesId);
    const result = { stories, storiesId };

    yield put({ type: ACTIONS_STORIES.addStories, result });
  } catch (err) {
    let error = { message: err.message };
    yield put({ type: ACTIONS_STORIES.fetchStoriesFailure, error });
  }
}

function* storiesActionWatcher() {
  yield takeLatest(ACTIONS_STORIES.getStories, fetchStories);
}

function validResponseStatus(response) {
  if (response.status >= 400) {
    const error = {
      message: `An error occured: ${response.status} ${response.statusText}`
    };
    throw error;
  }
}

export default storiesActionWatcher;
