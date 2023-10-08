import {React, useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth' //for firebase signin
import {BrowserRouter as Router, Link} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFirebase, firebaseAuth, user, setUser } from '../context/Firebase';


export default function IntroPage() {

const [email, setEmail] = useState(""); 
const [password, setPassword] = useState("");
const history = useHistory();
const firebase = useFirebase();

useEffect(() => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if(user){
      history.push('/dashboard');
      if(user.displayName){
        console.log('Hello ', user.displayName);
      }else{
        console.log('HEllo ', user.email);
      }
      firebase.setUser(user);
    }else{
      console.log("You are logged out");
      history.push('/intropage');
      firebase.setUser(null);
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
          <button className='btn2' onClick={() => {firebase.googleSignIn()}}><img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>‎ ‎  Google</button>
          
        </div>
        <div className="emailForm v-flex">
          <p className='p1'>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p className='h-flex p1'>Password <a href='#'>Forgot?</a></p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          {firebase.user ? (        
              <button onClick={() => {firebase.logout();}}>Logout</button>           
          ) : ( <>
            <button onClick={() => {firebase.login(email, password);}}>Login</button>
            <button onClick={() => {firebase.signup(email, password);}}>SignUp</button></>
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
