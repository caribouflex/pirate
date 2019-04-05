import { combineReducers } from "redux";
import stories from "./stories";
import comments from "./comments";
import app from "./app";

export default combineReducers({
  app,
  stories,
  comments
});
