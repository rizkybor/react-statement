import { combineReducers } from "redux";
import homeReducer from "./home/index";
import newsReducer from "./news/index";

export default combineReducers({
  home: homeReducer,
  news: newsReducer,
});
