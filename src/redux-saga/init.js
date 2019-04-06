import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

/**
 * Create and initialize a new redux store.
 * @returns Redux store including middlewares.
 */
export default function initStore(initialState = undefined) {
  const middleware = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  // Create a redux store with our reducer above and middleware
  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}
