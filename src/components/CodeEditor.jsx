import React, { useState } from 'react';

export default function CodeEditor({ textValue, setTextValue, isAnimating }) {
  const handleTextChange = (e) => {
    const newTextValue = e.target.value;
    setTextValue(newTextValue);
  };

  return (
    <div className='CodeEditorMainClass'>
      <p>Enter Your Code Below</p>
     
        <textarea className="box" name="" value={textValue} id="codeeditor" spellCheck="false" onChange={handleTextChange} cols="100" rows="18"></textarea>
        
        {isAnimating && (
        <div className="animation-container box overlay">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
              <p>please wait while we process your request ...</p>
            </div>
      )}
      
    </div>
  );
}
