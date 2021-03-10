import React, { useState } from 'react';
import { StyledTranslatedText } from './TranslatedText.styled';

const TranslatedText = ({ 
  ...props 
}) => {

  const [inputText, setInputText] = useState(
    "Enter text here"
  );

  const handleTextChange = event => setInputText(event.target.value);

  const handleUpload = event => {
    event.preventDefault();
    console.log("Test");
    props.handleUploadButton = inputText;
  }

  return (
    <StyledTranslatedText {...props}>
      <div class="translate-stage">
        <input 
          type="text" 
          autocomplete="off" 
          name="translate-input" 
          id="translate-input"
          onChange={ handleTextChange } 
        />
        <select class="lang-options" id="lang-options">
            <option value="ar">AR</option>
            <option value="zh">ZH</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="it">IT</option>
            <option value="pt">PT</option>
            <option value="ru">RU</option>
            <option value="es">ES</option>
        </select>
      </div>
      <ul class="translated-text" id="translated-text"></ul>
      <button class="btn" id="upload-btn">Upload</button>
      <button class="btn" id="snip-btn" onClick={ handleUpload }>Snip</button>
    </StyledTranslatedText>
  );
};

export default TranslatedText;