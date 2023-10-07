import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyD5LYNJtBG6iBg8RVzpDWmyO3AO3l39kaI",
    authDomain: "fixmycode1.firebaseapp.com",
    projectId: "fixmycode1",
    storageBucket: "fixmycode1.appspot.com",
    messagingSenderId: "511116035241",
    appId: "1:511116035241:web:d3311e446603ff762f55b8",
    measurementId: "G-RN2WZ3HG06"
  };

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export const FirebaseProvider = (props) => {

    const signup = async (email, password) => {
        try{await createUserWithEmailAndPassword(firebaseAuth, email, password);
        }catch(err){
            alert(err);
            console.log(err);
        }
    };

    const login = async (email, password) => {
        try{
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        }catch(err){
            alert(err.message);
            console.log(err);
        }
    }
    const googleSignIn = async() => {
        signInWithPopup(firebaseAuth, googleProvider);
    }
    const logout = async () => {
        try{
            await signOut(firebaseAuth);
            console.log("logged out");
          }catch(err){
            console.error(err);
          }
    }
    return (
        <FirebaseContext.Provider value={{signup, login, googleSignIn, logout}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}