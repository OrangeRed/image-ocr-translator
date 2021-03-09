import React from 'react';
import { StyledButtons } from './Buttons.styled';

const Buttons = ({ 
  ...props 
}) => {

  return (
    <StyledButtons {...props}>
      <button class="btn" id="upload-btn">Upload</button>
      <button class="btn" id="snip-btn">Snip</button>
    </StyledButtons>
  );
};

export default Buttons;