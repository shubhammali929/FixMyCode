import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='Btn'><i class={props.icon}></i><span class="text">{props.text}</span></button>
    </div>
  )
}
