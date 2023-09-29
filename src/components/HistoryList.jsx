import React from 'react'
import History from './History'
import NoHistory from './NoHistory'
export default function HistoryList() {
  return (<>
        <p className='historyLabel'>Your History :</p>
        <NoHistory/>
      
    <div className='historylist'>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
      <History/>
    </div>
    </>
  )
}
