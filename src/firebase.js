import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9TyQqcrVLpo3CU31JNbPtNBEqYApzsHY",
  authDomain: "fir-form-53852.firebaseapp.com",
  projectId: "fir-form-53852",
  storageBucket: "fir-form-53852.appspot.com",
  messagingSenderId: "905880878489",
  appId: "1:905880878489:web:ccdacebbe710e1546ba708",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export { db };
