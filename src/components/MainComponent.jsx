import React from 'react'
import NavBar from './NavBar'
import InputComponent from './InputComponent'
import CodeEditor from './CodeEditor'
import Buttons from './Buttons'
import CodeEditor2 from './CodeEditor2'

export default function MainComponent() {
  return (
    <div className='mainComponent'>
        <NavBar/>
        <CodeEditor/>
        {/* <CodeEditor2/> */}
        <Buttons/>
      <InputComponent/>
    </div>
  )
}
