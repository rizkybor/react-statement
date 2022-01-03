import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq3BI0Cg-DLGYJbRCqnqo6K2yZpPTqM90",
  authDomain: "prj-reactjs.firebaseapp.com",
  projectId: "prj-reactjs",
  storageBucket: "prj-reactjs.appspot.com",
  messagingSenderId: "387701250459",
  appId: "1:387701250459:web:9a51a2418822071884a93e",
  measurementId: "G-V0MSSRW3TW",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.firestore();
const firebaseAuth = firebase.auth();

export { firebaseAuth, firebaseDB };
