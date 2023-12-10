// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZlaJFJymhN8--37g6MLPMtdBHvDZTUGM",
  authDomain: "moviegpt-61df1.firebaseapp.com",
  projectId: "moviegpt-61df1",
  storageBucket: "moviegpt-61df1.appspot.com",
  messagingSenderId: "1088078371623",
  appId: "1:1088078371623:web:214ebbbaf804e33dc96702",
  measurementId: "G-9LSNQJCP15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 