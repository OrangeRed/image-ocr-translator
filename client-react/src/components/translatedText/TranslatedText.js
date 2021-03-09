import React from 'react';
import { StyledTranslatedText } from './TranslatedText.styled';

const TranslatedText = ({ 
  ...props 
}) => {

  return (
    <StyledTranslatedText {...props}>
      <h1>Translated Text Section</h1>
    </StyledTranslatedText>
  );
};

export default TranslatedText;