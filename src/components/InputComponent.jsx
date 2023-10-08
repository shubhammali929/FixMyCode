import React, { useState } from 'react';

export default function InputComponent({customCmdText,setCustomCmdText, runCustomCmd}) {
  const [userText, setUserText] = useState('');
  const handleOutgoingChat = () => {
    const trimmedText = userText.trim();
    console.log(trimmedText);
    setCustomCmdText(trimmedText);
    runCustomCmd();
    setUserText('');
  };

  
  return (
    <div className='InputComponent'>
      <div className="inputBox">
        <input
          type="text"
          placeholder='Paste your code above and Enter Your Custom Command here !! for eg. "Convert my code to python"'
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <i className="fa-solid fa-paper-plane fa-bounce" id='sendBtn' onClick={handleOutgoingChat}></i>
      </div>
      <p className="para"> 
        &copy; {new Date().getFullYear()} Fix my code !. All rights reserved. | For inquiries, contact us at shubhammali929@gmail.com
      </p>
    </div>
  );
}
