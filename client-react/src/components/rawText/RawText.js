import React from 'react';
import { StyledRawText } from './RawText.styled';

const RawText = ({ 
  ...props 
}) => {

  return (
    <StyledRawText {...props}>
      {`
        This is an example sentence
        これは例文です
        Это пример предложения
        Esta es una frase de ejemplo
        Questa è una frase di esempio
        这是一个例句
      `}
    </StyledRawText>
  );
};

export default RawText;