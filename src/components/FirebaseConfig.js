// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5LYNJtBG6iBg8RVzpDWmyO3AO3l39kaI",
  authDomain: "fixmycode1.firebaseapp.com",
  projectId: "fixmycode1",
  storageBucket: "fixmycode1.appspot.com",
  messagingSenderId: "511116035241",
  appId: "1:511116035241:web:d3311e446603ff762f55b8",
  measurementId: "G-RN2WZ3HG06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();