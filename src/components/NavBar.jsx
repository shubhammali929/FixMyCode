import React from 'react'
import {signOut,getAuth} from 'firebase/auth'
import {app} from "./FirebaseConfig";
export default function NavBar() {
const auth = getAuth(app);

  return (
    <div className='navbar'>
      <div className="infoIcon"><i className="fa-solid fa-circle-info"></i></div> 
      <span className='title'>FixMyCode...</span>
      <div className="userIcon" onClick={() => signOut(auth)}><i className="fa-solid fa-user"></i> <i className="fa-solid fa-right-from-bracket" ></i></div> 
    </div>
  )
}
