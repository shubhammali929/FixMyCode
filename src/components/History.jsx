import React from "react";
import { useFirebase } from '../context/Firebase';

export default function History(props) {
  const firebase = useFirebase();

  const restoreHistory = () => {
     // Set textValue in MainComponent when History tab is clicked
     firebase.getHistoryById(props.id).then((doc) => {
      if (doc.exists()) {
        const code = doc.data().code;
        firebase.setTextValue(code);
      }
    });
  }
  return (
    <div className='historyTab v-flex' onClick={restoreHistory}>
      <div className="h-flex" >
          <i className="fa-solid fa-clock-rotate-left"></i>
          <p>{props.text}</p>
      </div>
    </div>
  );
}
