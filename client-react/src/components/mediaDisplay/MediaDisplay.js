import React from 'react';
import { StyledMediaDisplay } from './MediaDisplay.styled';

const MediaDisplay = ({ 
  ...props 
}) => {

  return (
    <StyledMediaDisplay {...props}>
      <h1>Media Display Section</h1>
    </StyledMediaDisplay>
  );
};

export default MediaDisplay;