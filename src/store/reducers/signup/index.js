import {
  SET_SIGNUP,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_ERRORMESSAGE,
} from "../../actions/signup/types";

const initialState = {
  loading: false,
  currentUser: null,
  errorMessage: "",
};

export default function newUser(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNUP_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_SIGNUP:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_SIGNUP_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
