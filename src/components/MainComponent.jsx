import React, {useState} from 'react'
import InputComponent from './InputComponent'
import CodeEditor from './CodeEditor'
import Buttons from './Buttons'
import { useFirebase} from '../context/Firebase';
export default function MainComponent() {
  
  const firebase = useFirebase();
  const [textValue, setTextValue] = useState('');
  const [customCmdText, setCustomCmdText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const fixBug = () => {
    let initialText = textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("fix the following code make corrections if any and rewrite the original code followed with new corrected code with comments where the changes were made. also add the title for the code at first line in 20 characters.  code-> : "+initialText, setTextValue);
  };
  const optimise = () => {
    let initialText = textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("Optimise the following code, use short hand operators and reduce number of lines  : "+initialText, setTextValue);
  };
  const addComments = () => {
    let initialText = textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("add comments in between the code so that any one can read easily code -> : "+initialText, setTextValue);
  };
  const changeVar = () => {
    let initialText = textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("change variable names to meaning ful one and rewrite code again. code -> : "+initialText, setTextValue);
  };
  const fixIndentation = () => {
    let initialText = textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse("Fix the Intendation of the code. code -> : "+initialText, setTextValue);
  };
  const runCustomCmd = () => {
    let initialText = textValue;
    console.log(initialText); 
    setIsAnimating(true);
    getChatResponse(customCmdText+" and rewrite the new code. code -> : "+initialText, setTextValue);
  };
  
  //sending prompt to api and receiving response
  const getChatResponse = async (text, setTextValue) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://api.openai.com/v1/completions";

    // Define the properties and data for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: text,
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
    }

    // Send POST request to API, get response 
    try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        let responseText = response.choices[0].text.trim();
        console.log(response);
        setTextValue(responseText);
        
        
        // Check if the user is logged in before adding to history
      if (firebase.user) {
        const userName = firebase.user?.displayName || firebase.user?.email;
        console.log('HEY ! ' + userName);
        console.log(firebase.user);
        firebase.addToHistory(firebase.user.uid, userName, responseText);
      }



    } catch (error) { // Add error class to the paragraph element and set error text
      
      console.log(error);
    } finally {
      setIsAnimating(false); // Stop animation when response is received
    }
  };

  
  return (
    <div className='mainComponent'>
        <CodeEditor textValue={textValue} setTextValue={setTextValue} isAnimating={isAnimating}/> <br />
        <Buttons fixBug={fixBug} optimise={optimise} addComments={addComments} changeVar={changeVar} fixIndentation={fixIndentation}/>
      <InputComponent customCmdText={customCmdText} setCustomCmdText={setCustomCmdText} runCustomCmd={runCustomCmd}/>
    </div>
  )
}


