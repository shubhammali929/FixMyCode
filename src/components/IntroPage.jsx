import {React, useState, useEffect} from 'react';
import { auth, googleProvider } from './FirebaseConfig'; //for creating auth instance
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, getAuth, onAuthStateChanged} from 'firebase/auth' //for firebase signin
import reactRouterDom, {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function IntroPage() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState(null);
const history = useHistory();

const SignUp = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully")
    }catch(err){
      console.error(err);
    }
}
const SignIn = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signing in with email and password ...")
    }catch(err){
      console.error(err);
    }
}
const signInWithGoogle = async () => {
  try{
    await signInWithPopup(auth,googleProvider);
    history.push('/dashboard');
  }catch(err){
    console.error(err);
  }
}
const logout = async () => {
  try{
    await signOut(auth);
  }catch(err){
    console.error(err);
  }
}
useEffect(() => {
  onAuthStateChanged(auth, user => {
    if(user){
      history.push('/dashboard');
      if(user.displayName){
        console.log('Hello ',user.displayName);
      }else{
        console.log('HEllo ', user.email);
      }
      setUser(user);
    }else{
      console.log("You are logged out");
      history.push('/intropage');
      setUser(null);
    }
  })
},[]);
  return (
    <div className='parentLogin'>
      <div className="mainLoginContainer v-flex">
        <h1>Welcome to FixMyCode</h1>
        <h2>Sign In With</h2>
        <div className="socialSigninContainer h-flex">
          <button className='btn1'><i className="fab fa-facebook-square fa-lg m-r"></i>Facebook</button>
          <button className='btn2' onClick={signInWithGoogle}><img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>‎ ‎  Google</button>
          
        </div>
        <div className="emailForm v-flex">
          <p className='p1'>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p className='h-flex p1'>Password <a href='#'>Forgot?</a></p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          {user ? (        
              <button onClick={logout}>Logout</button>           
          ) : ( <>
            <button onClick={SignIn}>Login</button>
            <button onClick={SignUp}>SignUp</button></>
          )}
        </div>
        <p className='p3'>Not a member? <a href="">Sign up now</a> </p>
        <div className="nosignin">
        <p className='or'>or</p> <br /> 
        <p className='p4'><Link to="/dashboard" >Continue without signing in</Link></p>
        </div>
      </div>
      
    </div>
  );
}
