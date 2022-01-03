import {
  SET_SIGNUP,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_ERRORMESSAGE,
} from "./types";

import { firebaseAuth } from "../../../firebase";

export const signUpLoading = (state) => (dispatch) => {
  dispatch({ type: SET_SIGNUP_LOADING, payload: state });
};

export const signUpUser = (state, navigate) => async (dispatch) => {
  dispatch(signUpLoading(true));
  firebaseAuth
    .createUserWithEmailAndPassword(state.email, state.password)
    .then(
      (data) => {
        data.user.getIdToken(true).then((data) => {
          let user = {
            ...state,
            token: data,
          };
          dispatch({ type: SET_SIGNUP, payload: user });

          dispatch(signUpLoading(false));
          navigate("/login");
        });
      },
      (err) => {
        return Promise.reject(err);
      }
    )
    .catch((err) => {
      dispatch(signUpLoading(false));
      if (err.code === "auth/email-already-in-use") {
        dispatch(signUpError("Email already in use"));
      } else {
        dispatch(signUpError("Wrong Credential"));
      }
    });
};

export const signUpError = (error) => (dispatch) => {
  dispatch({ type: SET_SIGNUP_ERRORMESSAGE, payload: error });
};
