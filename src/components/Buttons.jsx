import React from 'react'
import Button from './Button'

export default function Buttons() {
  return (
    <div className='ButtonGroup'>
      <Button text="Fix Bug" icon="fa-solid fa-bug-slash"/>
      <Button text="Optimise" icon="fa-solid fa-seedling"/>
      <Button text="Add Comments" icon="fa-solid fa-code "/>
      <Button text="Change Var names" icon="fa-solid fa-i "/>
      <Button text="Fix indentation" icon="fa-solid fa-toolbox "/>
    </div>
  )
}
