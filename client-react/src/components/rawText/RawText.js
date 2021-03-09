import React from 'react';
import { StyledRawText } from './RawText.styled';

const RawText = ({ 
  ...props 
}) => {

  return (
    <StyledRawText {...props}>
      <h1>Raw Text Section</h1>
    </StyledRawText>
  );
};

export default RawText;