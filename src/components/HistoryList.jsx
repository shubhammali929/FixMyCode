import React, { useEffect, useState } from "react";
import History from "./History";
import NoHistory from "./NoHistory";
import { useFirebase } from "../context/Firebase";

export default function HistoryList() {
  const firebase = useFirebase();
  const [history, setHistory] = useState([]);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const fetchHistory = async () => {
      if (firebase.user) {
        const userId = firebase.user.uid;
        const userHistory = await firebase.getHistory(userId);
        setHistory(userHistory.docs);
        // Inside useEffect in HistoryList
        firebase.setApiResponseReceived(false);
      }
    };

    fetchHistory();
  }, [firebase.user, firebase.setApiResponseReceived]);
/* eslint-enable react-hooks/exhaustive-deps */
  return (
    <>
      <p className="historyLabel">Your History :</p>

      {firebase.user ? (
        <div className="historylist">
          {history.map((hist) => (
            <History
              key={hist.id}
              id={hist.id}
              text={hist.data().code.substring(0, 30) + " ... " + hist.id}
            />
          ))}
        </div>
      ) : (
        <NoHistory />
      )}
    </>
  );
}
