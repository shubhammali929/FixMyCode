import React from "react";

export default function History(props) {
  return (
    <div className='historyTab v-flex'>
      <div className="h-flex">
      <i className="fa-solid fa-clock-rotate-left"></i>
      <p>{props.text}</p>
      </div>
    </div>
  );
}
