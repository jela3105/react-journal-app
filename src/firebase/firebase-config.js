import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvnfL3L35U_GGOALKlfSh7aLHP6pn9cH8",
  authDomain: "react-journal-app-ea54c.firebaseapp.com",
  projectId: "react-journal-app-ea54c",
  storageBucket: "react-journal-app-ea54c.appspot.com",
  messagingSenderId: "989106801508",
  appId: "1:989106801508:web:a2476ceadbebc7c8b6c871",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
