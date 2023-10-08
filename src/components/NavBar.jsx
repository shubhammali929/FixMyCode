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
      <div className="infoIcon"><i className="fa-solid fa-circle-info"></i></div> 
      <span className='title'>FixMyCode...</span>
      <div className="userIcon" onClick={handleUserIconClick}><i className="fa-solid fa-user"></i> <i className="fa-solid fa-right-from-bracket" ></i></div> 
    </div>
  )
}
