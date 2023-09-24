import React, {useState} from 'react'
import NavBar from './NavBar'
import InputComponent from './InputComponent'
import CodeEditor from './CodeEditor'
import Buttons from './Buttons'



export default function MainComponent() {

  const [textValue, setTextValue] = useState('');

  const fixBug = () => {
    let initialText = textValue;
    console.log(initialText); 
    getChatResponse("fix the following code : "+initialText, setTextValue);
  };
  const optimise = () => {
    let initialText = textValue;
    console.log(initialText); 
    getChatResponse("Optimise the following code and reduce number of lines : "+initialText, setTextValue);
  };
  const addComments = () => {
    let initialText = textValue;
    console.log(initialText); 
    getChatResponse("add comments in between the code so that any one can read easily code -> : "+initialText, setTextValue);
  };
  const changeVar = () => {
    let initialText = textValue;
    console.log(initialText); 
    getChatResponse("change variable names to meaning ful one and rewrite code again. code -> : "+initialText, setTextValue);
  };
  const fixIndentation = () => {
    let initialText = textValue;
    console.log(initialText); 
    getChatResponse("Fix the Intendation of the code. code -> : "+initialText, setTextValue);
  };
  
  
  return (
    <div className='mainComponent'>
        <NavBar/>
        <CodeEditor textValue={textValue} setTextValue={setTextValue}/>
        <Buttons fixBug={fixBug} optimise={optimise} addComments={addComments} changeVar={changeVar} fixIndentation={fixIndentation}/>
      <InputComponent/>
    </div>
  )
}


//sending prompt to api and receiving response
const getChatResponse = async (text, setTextValue) => {
  const API_KEY = "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";
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
      console.log(responseText);
      setTextValue(responseText);
  } catch (error) { // Add error class to the paragraph element and set error text
    
    console.log(error);
  }
};
