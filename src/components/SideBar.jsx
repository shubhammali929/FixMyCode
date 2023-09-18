import React from 'react'
import HistoryList from './HistoryList'
import User from './User'

export default function SideBar() {
  return (
    <div className='sideBar'>
      <HistoryList/>
      <User/>
    </div>
  )
}
