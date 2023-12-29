import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-monokai';
import { useFirebase } from '../context/Firebase';

export default function CodeEditor({ isAnimating }) {
  const firebase = useFirebase();

  const handleTextChange = (newTextValue) => {
    firebase.setTextValue(newTextValue);
  };

  return (
    <div className='CodeEditorMainClass'>
      <p>Enter Your Code Below</p>
      <AceEditor
        mode="javascript"
        theme="twilight"
        value={firebase.textValue}
        onChange={handleTextChange}
        name="editor"
        width='100%'
        height='95%'
        fontSize={'1.2rem'}
        editorProps={{ $blockScrolling: true }}
      />

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
