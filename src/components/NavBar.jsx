import React from 'react'
import { useFirebase } from '../context/Firebase';
export default function NavBar() {
const firebase = useFirebase();
  return (
    <div className='navbar'>
      <div className="infoIcon"><i className="fa-solid fa-circle-info"></i></div> 
      <span className='title'>FixMyCode...</span>
      <div className="userIcon" onClick={() => firebase.logout()}><i className="fa-solid fa-user"></i> <i className="fa-solid fa-right-from-bracket" ></i></div> 
    </div>
  )
}
