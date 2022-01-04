import { combineReducers } from "redux";
import homeReducer from "./home/index";
import newsReducer from "./news/index";
import userActive from "./signin/index";
import userReducer from "./signup/index";

export default combineReducers({
  home: homeReducer,
  news: newsReducer,
  user: userReducer,
  userActive: userActive,
});
