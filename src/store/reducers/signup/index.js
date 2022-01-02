import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../../actions/signup/types";

const initialState = {
  loading: false,
  currentUser: null,
  errorMessage: "",
};

export default function newUser(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
