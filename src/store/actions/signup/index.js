import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registerStart = () => (dispatch) => {
  let data = true;
  dispatch({ type: REGISTER_START, payload: data });
};

export const registerSuccess = (user, password) => (dispatch) => {
  const auth = getAuth();
  console.log(auth, "<<<<");
  //   createUserWithEmailAndPassword(auth, user, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(`${errorCode} : >> ${errorMessage}`);
  //       // ..
  //     });

  //     console.log(user, password, "register success reducer");

  //   dispatch({ type: REGISTER_SUCCESS, payload: user });
};

export const registerFail = (error) => (dispatch) => {
  let data = true;
  dispatch({ type: REGISTER_FAIL, payload: error });
};
