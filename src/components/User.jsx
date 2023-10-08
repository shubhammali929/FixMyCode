import React from 'react'
import { useFirebase} from '../context/Firebase';

export default function User() {
  const firebase = useFirebase();
  const userName = firebase.user?.displayName || firebase.user?.email;
  return (
    <div className='user'>
     <i className="fa-solid fa-user"></i> 
     <span>{firebase.user?userName:"TempUSer"}</span>
    
    </div>
  )
}
