import React from 'react'

export default function Buttons({fixBug, optimise, addComments,changeVar,fixIndentation}) {
  return (
    <div className='ButtonGroup'>
      <button onClick={fixBug} class="button" type="button"><span class="button__text text">Fix Bug</span><span class="button__icon"><i class="fa-solid fa-bug-slash"></i></span></button>
      <button onClick={optimise} class="button" type="button"><span class="button__text text">Optimise</span><span class="button__icon"><i class="fa-solid fa-seedling"></i></span></button>
      <button onClick={addComments} class="button" type="button"><span class="button__text text">Add Comments</span><span class="button__icon"><i class="fa-solid fa-code"></i></span></button>
      <button onClick={changeVar} class="button" type="button"><span class="button__text text">Change Var names</span><span class="button__icon"><i class="fa-solid fa-i"></i></span></button>
      <button onClick={fixIndentation} class="button" type="button"><span class="button__text text">Fix indentation</span><span class="button__icon"><i class="fa-solid fa-toolbox"></i></span></button>
    </div>
  )
}
