// import React, { useState, useEffect } from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/javascript/javascript';

// function CodeEditor() {
//   const [code, setCode] = useState('// Write your code here...');

//   useEffect(() => {
//     // Initialize CodeMirror
//     const codeMirrorInstance = CodeMirror.fromTextArea(document.getElementById('editor'), {
//       mode: 'javascript',
//       theme: 'default',
//       lineNumbers: true,
//     });

//     // Listen for changes and update the state
//     codeMirrorInstance.on('change', (editor, data, value) => {
//       setCode(value);
//     });

//     return () => {
//       // Clean up the CodeMirror instance
//       codeMirrorInstance.toTextArea();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>React Code Editor</h1>
//       <textarea id="editor" defaultValue={code}></textarea>
//       <h2>Code Output:</h2>
//       <pre>{code}</pre>
//     </div>
//   );
// }

// export default CodeEditor;
