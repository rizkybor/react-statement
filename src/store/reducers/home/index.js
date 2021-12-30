import {
  GET_DATA_HOME,
  GET_DATA_HOME_DETAIL,
  GET_DATA_HOME_LOADING,
  GET_DATA_HOME_ERRORMESSAGE,
} from "../../actions/home/types";

const initialState = {
  loading: false,
  dataHome: [],
  dataDetailHome: {},
  errorMessage: "",
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_HOME:
      return {
        ...state,
        dataHome: action.payload,
      };
    case GET_DATA_HOME_DETAIL:
      return {
        ...state,
        dataDetailHome: action.payload,
      };
    case GET_DATA_HOME_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_DATA_HOME_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
