import React from 'react'

export default function Button(props) {
  return (
    <div>
      {/* <button className='Btn'><i className={props.icon}></i><span className="text">{props.text}</span></button> */}
      
      <button className="button" type="button"><span className="button__text text">{props.text}</span><span className="button__icon"><i className={props.icon}></i></span></button>
    </div>
  )
}
