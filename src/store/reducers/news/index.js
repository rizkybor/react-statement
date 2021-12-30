import {
  GET_DATA_NEWS,
  GET_DATA_NEWS_DETAIL,
  GET_DATA_NEWS_LOADING,
  GET_DATA_NEWS_ERRORMESSAGE,
} from "../../actions/news/types";

const initialState = {
  loading: false,
  dataNews: [],
  dataDetailNews: {},
  errorMessage: "",
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_NEWS:
      return {
        ...state,
        dataNews: action.payload,
      };
    case GET_DATA_NEWS_DETAIL:
      return {
        ...state,
        dataDetailNews: action.payload,
      };
    case GET_DATA_NEWS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_DATA_NEWS_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
