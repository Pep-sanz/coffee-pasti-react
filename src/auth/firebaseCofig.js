import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAsqlCrS_1ck-Z9BAUfoIFPuuwcME78qG4",
  authDomain: "coffee-pasti.firebaseapp.com",
  databaseURL: "https://coffee-pasti-default-rtdb.firebaseio.com",
  projectId: "coffee-pasti",
  storageBucket: "coffee-pasti.appspot.com",
  messagingSenderId: "153764516916",
  appId: "1:153764516916:web:11ffeafd7e7d5f1e662661",
  measurementId: "G-KF102ZG5XZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
