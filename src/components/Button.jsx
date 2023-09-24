import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='Btn'><i className={props.icon}></i><span className="text">{props.text}</span></button>
      {/* <button class="button" type="button">
  <span class="button__text text">{props.text}</span>
  
  <span class="button__icon"><i class={props.icon}></i></span>
</button> */}
    </div>
  )
}
