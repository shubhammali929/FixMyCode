import React from 'react'
export default function CodeEditor({textValue, setTextValue}) {
  const handleTextChange = (e) => {
    const newTextValue = e.target.value;
    setTextValue(newTextValue); 
  };

  return (
    <div className='CodeEditorMainClass'>
      <p >Enter Your Code Below</p>
        <textarea name="" value={textValue} id="codeeditor"  spellCheck="false" onChange={handleTextChange} cols="100" rows="20"></textarea>
    </div>
  )
}
