import {React, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { auth, googleProvider } from './FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
export default function IntroPage() {
const history = useHistory();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const onContinue = () => {
  history.push('/dashboard'); // Navigate to /continue route
};

const SignIn = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    }catch(err){
      console.error(err);
    }
}
const signInWithGoogle = async () => {
  try{
    await signInWithPopup(auth,googleProvider);
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
console.log(auth?.currentUser?.email);
  return (
    <div className='parentLogin'>
      <div className="mainLoginContainer v-flex">
        <h1>Welcome to FixMyCode</h1>
        <h2>Sign In With</h2>
        <div className="socialSigninContainer h-flex">
          <button className='btn1'><i className="fab fa-facebook-square fa-lg"></i>‎ ‎ ‎ Facebook</button>
          <button className='btn2' onClick={signInWithGoogle}><img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>‎ ‎  Google</button>
          
        </div>
        <div className="emailForm v-flex">
          <p className='p1'>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p className='h-flex p1'>Password <a href='#'>Forgot?</a></p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={SignIn} >Login</button>
        </div>
        <p className='p3'>Not a member? <a href="">Sign up now</a> <button onClick={logout}>logout</button></p>
        <div className="nosignin">
        <p className='or'>or</p> <br />
        <p className='p4'><Link to="/dashboard" >Continue without signing in</Link></p>
        </div>
      </div>
      
    </div>
  );
}
