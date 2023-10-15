import React from 'react'
import { useFirebase } from '../context/Firebase';
import { useHistory } from 'react-router-dom';
export default function NavBar() {
const firebase = useFirebase();
const history = useHistory();

const handleUserIconClick = () => {
  if (firebase.user) {
    // User is logged in, perform logout
    firebase.logout();
  } else {
    // User is not logged in, redirect to intropage
    history.push('/intropage');
  }
};

  return (
    <div className='navbar'>
      <div className="infoIcon" onClick={() => {alert("Welcome to FixMyCode! Your go-to platform for instant code improvement. Simply enter your code, choose from various optimization options, and let our advanced AI assist you in enhancing your code quality. Experience hassle-free coding with FixMyCode, where innovation meets efficiency")}}><i className="fa-solid fa-circle-info"></i></div> 
      <span className='title'>FixMyCode...</span>
      <div className="userIcon" onClick={handleUserIconClick}><i className="fa-solid fa-user"></i> <i className="fa-solid fa-right-from-bracket" ></i></div> 
    </div>
  )
}
