import React from 'react'

export default function Buttons({fixBug, optimise, addComments,changeVar,fixIndentation}) {
  return (
    <div className='ButtonGroup'>
      <button onClick={fixBug} className="button" type="button"><span className="button__text text">Fix Bug</span><span className="button__icon"><i className="fa-solid fa-bug-slash"></i></span></button>
      <button onClick={optimise} className="button" type="button"><span className="button__text text">Optimise</span><span className="button__icon"><i className="fa-solid fa-seedling"></i></span></button>
      <button onClick={addComments} className="button" type="button"><span className="button__text text">Add Comments</span><span className="button__icon"><i className="fa-solid fa-code"></i></span></button>
      <button onClick={changeVar} className="button" type="button"><span className="button__text text">Change Var names</span><span className="button__icon"><i className="fa-solid fa-i"></i></span></button>
      <button onClick={fixIndentation} className="button" type="button"><span className="button__text text">Fix indentation</span><span className="button__icon"><i className="fa-solid fa-toolbox"></i></span></button>
    </div>
  )
}
