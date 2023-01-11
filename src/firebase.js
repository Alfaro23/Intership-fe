// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4KEf_N1k2EOqr6OoblSBfNQVBpdSVtXY",
  authDomain: "articles-project-54980.firebaseapp.com",
  projectId: "articles-project-54980",
  storageBucket: "articles-project-54980.appspot.com",
  messagingSenderId: "647119770729",
  appId: "1:647119770729:web:e3f96cc8be34542df9fef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);