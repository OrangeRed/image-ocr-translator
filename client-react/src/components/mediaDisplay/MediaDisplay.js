import React from 'react';
import { StyledMediaDisplay } from './MediaDisplay.styled';

const MediaDisplay = ({ 
  ...props 
}) => {

  return (
    <StyledMediaDisplay {...props}>
      <img 
        class="div-item media-space" 
        id="mediaSpace" 
        src="/test-img.jpg"
        alt="Media Display" 
      />
    </StyledMediaDisplay>
  );
};

export default MediaDisplay;