import React from 'react'
import SideBar from './SideBar'
import MainComponent from './MainComponent'

export default function Dashboard() {
  return (
    <div className='h-flex dashboard'>
      <SideBar/>
      <MainComponent/>
    </div>
  )
}
