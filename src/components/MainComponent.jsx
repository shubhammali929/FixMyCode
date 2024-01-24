import React, {useState} from 'react'
import InputComponent from './InputComponent'
import CodeEditor from './CodeEditor'
import Buttons from './Buttons'
import { useFirebase} from '../context/Firebase';
export default function MainComponent() {
  
  const firebase = useFirebase();
  const [customCmdText, setCustomCmdText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const fixBug = () => {
    let initialText = firebase.textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("fix the following code make corrections if any and rewrite the new corrected code with comments where the changes were made. also add the title for the code at first line in 20 characters.  code-> : "+initialText);
  };
  const optimise = () => {
    let initialText = firebase.textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("Optimise the following code, use short hand operators and reduce number of lines  : "+initialText);
  };
  const addComments = () => {
    let initialText = firebase.textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("add comments in between the code so that any one can read easily code -> : "+initialText);
  };
  const changeVar = () => {
    let initialText = firebase.textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("change variable names to meaning ful one and rewrite code again. code -> : "+initialText);
  };
  const fixIndentation = () => {
    let initialText = firebase.textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("Fix the Intendation of the code. code -> : "+initialText);
  };
  const runCustomCmd = () => {
    let initialText = firebase.textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse(customCmdText+" and rewrite the new code. code -> : "+initialText);
  };
  
  //sending prompt to api and receiving response
  const getChatResponse = async (text) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://api.openai.com/v1/chat/completions"; // Update the API URL
  
    // Define the properties and data for the API request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Change the model name to gpt-3.5-turbo
        messages: [
          {
            role: "system",
            // content: "Explain things like you're talking to a software professional with 2 years of experience."
            // content: "Just replace the code by doing the modifications as said"
            content: "Generate a corrected version of the code with improvements. Focus on providing code changes only and avoid unnecessary titles and descriptions or explanations."
          },
          {
            role: "user",
            content: text
          }
        ]
      })
    };
  
    // Send POST request to API, get response
    try {
      const response = await (await fetch(API_URL, requestOptions)).json();
      let responseText = response.choices[0].message.content.trim();
      console.log(response);
      firebase.setTextValue(responseText);
      firebase.setApiResponseReceived(true);
  
      // Check if the user is logged in before adding to history
      if (firebase.user) {
        const userName = firebase.user?.displayName || firebase.user?.email;
        console.log('HEY ! ' + userName);
        console.log(firebase.user);
        firebase.addToHistory(firebase.user.uid, userName, responseText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsAnimating(false); // Stop animation when the response is received
    }
  
  };

  
  return (
    <div className='mainComponent'>
        <CodeEditor  isAnimating={isAnimating}/> <br />
        {/* <CodeEditor2 isAnimating={isAnimating} /> <br/> */}
        <Buttons fixBug={fixBug} optimise={optimise} addComments={addComments} changeVar={changeVar} fixIndentation={fixIndentation}/>
      <InputComponent customCmdText={customCmdText} setCustomCmdText={setCustomCmdText} runCustomCmd={runCustomCmd}/>
    </div>
  )
}


