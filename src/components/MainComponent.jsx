import React from 'react'
import NavBar from './NavBar'
import InputComponent from './InputComponent'
import CodeEditor from './CodeEditor'
import Buttons from './Buttons'

export default function MainComponent() {
  return (
    <div className='mainComponent'>
        <NavBar/>
        <CodeEditor/>
        <Buttons/>
      <InputComponent/>
    </div>
  )
}
