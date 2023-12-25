// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzGVQDxDHnCdjeZCmZWOVeHM3kb8R5kZw",
  authDomain: "golf-c3183.firebaseapp.com",
  databaseURL:
    "https://golf-c3183-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "golf-c3183",
  storageBucket: "golf-c3183.appspot.com",
  messagingSenderId: "294379988116",
  appId: "1:294379988116:web:442dc7352314b75ee1c081",
  measurementId: "G-FWRBZH9RV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
