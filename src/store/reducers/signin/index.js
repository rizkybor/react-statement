import {
  SET_SIGNIN,
  SET_SIGNIN_LOADING,
  SET_SIGNIN_ERRORMESSAGE,
} from "../../actions/signin/types";

const initialState = {
  loading: false,
  userActive: null,
  errorMessage: "",
};

export default function userActive(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNIN_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_SIGNIN:
      return {
        ...state,
        userActive: action.payload,
      };
    case SET_SIGNIN_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
