import React, { useState } from 'react';

export default function InputComponent() {
  const [userText, setUserText] = useState('');
  const API_KEY = "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";
  const handleOutgoingChat = () => {
    const trimmedText = userText.trim();
    console.log(trimmedText);
    getChatResponse();
    
  };
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleOutgoingChat();
    }
  };

  const getChatResponse = async () => {
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
            prompt: userText,
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph element text
    try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        console.log(response.choices[0].text);
    } catch (error) { // Add error class to the paragraph element and set error text
      console.log(error);
    }
  };

  return (
    <div className='InputComponent'>
      <div className="inputBox">
        <input
          type="text"
          placeholder='Enter Your Custom Command here !!'
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <i className="fa-solid fa-paper-plane fa-bounce" id='sendBtn' onClick={handleOutgoingChat}></i>
      </div>
      <p className="para">Fix my code ! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet assumenda accusantium eaque nihil quae! Dignissimos pariatur officiis et vel ut magni repellat animi!</p>
    </div>
  );
}
