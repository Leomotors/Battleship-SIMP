// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: "battleship-simp.firebaseapp.com",
  databaseURL:
    "https://battleship-simp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "battleship-simp",
  storageBucket: "battleship-simp.appspot.com",
  messagingSenderId: "419686360168",
  appId: "1:419686360168:web:e2ba1be140e896372f87dd",
  measurementId: "G-32PHSZS5CD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
