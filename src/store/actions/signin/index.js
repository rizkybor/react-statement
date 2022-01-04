import {
  SET_SIGNIN,
  SET_SIGNIN_LOADING,
  SET_SIGNIN_ERRORMESSAGE,
} from "./types";
import { firebaseAuth } from "../../../firebase";

export const signInLoading = (state) => (dispatch) => {
  dispatch({ type: SET_SIGNIN_LOADING, payload: state });
};

export const signInUser = (state, navigate) => async (dispatch) => {
  firebaseAuth
    .signInWithEmailAndPassword(state.email, state.password)
    .then(
      (data) => {
        data.user.getIdToken(true).then((data) => {
          let user = {
            ...state,
            token: data,
          };
          dispatch({ type: SET_SIGNIN, payload: user });

          dispatch(signInLoading(false));
          localStorage.setItem("access_token", user.token);
          navigate("/");
        });
      },
      (err) => {
        return Promise.reject(err);
      }
    )
    .catch((err) => {
      dispatch(signInLoading(false));
      if (err.code === "auth/wrong-password") {
        dispatch(
          signInError(
            "The password is invalid or the user does not have a password."
          )
        );
      } else if (err.code === "auth/too-many-requests") {
        dispatch(
          signInError(
            "The password is invalid or the user does not have a password."
          )
        );
      } else {
        dispatch(signInError("Wrong Credential"));
      }
    });
};

export const signInError = (error) => (dispatch) => {
  dispatch({ type: SET_SIGNIN_ERRORMESSAGE, payload: error });
};
