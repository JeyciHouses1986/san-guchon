import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfiQ6xuEDoeVO_sqRCuvPllKN_c2hjFaQ",
  authDomain: "coder-jeyci-sanguchon.firebaseapp.com",
  projectId: "coder-jeyci-sanguchon",
  storageBucket: "coder-jeyci-sanguchon.appspot.com",
  messagingSenderId: "594662218461",
  appId: "1:594662218461:web:372c6a693eb87a2cda1934"
};

const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app)