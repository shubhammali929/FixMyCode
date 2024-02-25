import React from 'react'
import { useFirebase} from '../context/Firebase';

export default function User() {
  const firebase = useFirebase();
  const userName = firebase.user?.displayName || firebase.user?.email;
  const userImage = firebase.user?.photoURL; 

  return (
    <div className='user'>
     {/* <i className="fa-solid fa-user"></i>  */}
     {userImage && <img src={userImage} alt="User" className="user-image" />}
      {!userImage && <i className="fa-solid fa-user"></i>}
     <span>{firebase.user?userName:"TempUser"}</span>
    
    </div>
  )
}
