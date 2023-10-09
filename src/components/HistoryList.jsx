import React, {useEffect, useState} from 'react';
import History from './History';
import NoHistory from './NoHistory';
import { useFirebase } from '../context/Firebase';

export default function HistoryList() {

  const firebase = useFirebase();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    console.log("UseEffece 2 called");
    firebase.getHistory().then((history) => setHistory(history.docs));
  },[]);
  return (
    <>
      <p className='historyLabel'>Your History :</p>
     
      {firebase.user ? (
        <div className='historylist'>
                {history.map((hist) => (
                  <History key={hist.id} id={hist.id} text={hist.data().code.substring(0,30)+" ... "+hist.id}/>
                ))}
        </div>
      ) : (
        <NoHistory />
      )}
    </>
  );
}
