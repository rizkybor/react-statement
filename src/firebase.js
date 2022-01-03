import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq3BI0Cg-DLGYJbRCqnqo6K2yZpPTqM90",
  authDomain: "prj-reactjs.firebaseapp.com",
  projectId: "prj-reactjs",
  storageBucket: "prj-reactjs.appspot.com",
  messagingSenderId: "387701250459",
  appId: "1:387701250459:web:9a51a2418822071884a93e",
  measurementId: "G-V0MSSRW3TW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
