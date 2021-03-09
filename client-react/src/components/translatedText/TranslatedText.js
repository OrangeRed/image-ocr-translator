import React from 'react';
import { StyledTranslatedText } from './TranslatedText.styled';

const TranslatedText = ({ 
  ...props 
}) => {

  return (
    <StyledTranslatedText {...props}>
      <div class="translate-stage">
        <input type="text" autocomplete="off" name="translate-input" id="translate-input" />
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
    </StyledTranslatedText>
  );
};

export default TranslatedText;