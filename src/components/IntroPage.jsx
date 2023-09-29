import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function IntroPage() {
  const history = useHistory();
  const onContinue = () => {
    history.push('/dashboard'); // Navigate to /continue route
  };

  return (
    <div className='parentLogin'>
      <div className="mainLoginContainer v-flex">
        <h1>Welcome to FixMyCode</h1>
        <h2>Sign In With</h2>
        <div className="socialSigninContainer h-flex">
          <button className='btn1'><i class="fab fa-facebook-square fa-lg"></i>‎ ‎ ‎ Facebook</button>
          <button className='btn2'><img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>‎ ‎  Google</button>
          
        </div>
        <div className="emailForm v-flex">
          <p className='p1'>Email</p>
          <input type="email"  />
          <p className='h-flex p1'>Password <a href='#'>Forgot?</a></p>
          <input type="password" />
          <button>Login</button>
        </div>
        <p className='p3'>Not a member? <a href="">Sign up now</a></p>
        <div className="nosignin">
        <p className='or'>or</p> <br />
        <p className='p4'><Link to="/dashboard">Continue without signing in</Link></p>
        </div>
      </div>
      
    </div>
  );
}
