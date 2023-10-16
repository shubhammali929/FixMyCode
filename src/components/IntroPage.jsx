import {React, useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth' //for firebase signin
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFirebase, firebaseAuth } from '../context/Firebase';
// import googleIcon from '../../public/googleIcon.png';


export default function IntroPage() {

const [email, setEmail] = useState(""); 
const [password, setPassword] = useState("");
const history = useHistory();
const firebase = useFirebase();
const imageUrl = process.env.PUBLIC_URL + '/googleIcon.png';

useEffect(() => {
  onAuthStateChanged(firebaseAuth, (user) => {
    console.log("UseEffect 1 called")
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
},[history, firebase]);

  return (
    <div className='parentLogin'>
      <div className="mainLoginContainer v-flex">
        <h1>Welcome to FixMyCode</h1>
        <h2>Sign In With</h2>
        <div className="socialSigninContainer h-flex">
          <button className='btn1'onClick={() => {alert("Under Development !! Please use Google or email signin")}}><i className="fab fa-facebook-square fa-lg m-r"></i>Facebook</button>
          <button className='btn2' onClick={() => {firebase.googleSignIn()}}>{<img src={imageUrl} alt="Google Icon" />}‎ ‎  Google</button>
          
        </div>
        <div className="emailForm v-flex">
          <p className='p1'>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p className='h-flex p1'> Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          {firebase.user ? (        
              <button onClick={() => {firebase.logout();}}>Logout</button>           
          ) : ( <>
            <button onClick={() => {firebase.login(email, password);}}>Login</button>
            <button onClick={() => {firebase.signup(email, password);}}>SignUp</button></>
          )}
        </div>
        <div className="nosignin">
        <p className='or'>or</p> <br /> 
        <p className='p4'><Link to="/dashboard" >Continue without signing in</Link></p>
        </div>
      </div>
      
    </div>
  );
}
