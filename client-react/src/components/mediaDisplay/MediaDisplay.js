import React from 'react';
import { StyledMediaDisplay } from './MediaDisplay.styled';

const MediaDisplay = ({
  topPadding,
  media, 
  ...props 
}) => {

  return (
    <StyledMediaDisplay topPadding={topPadding} {...props}>
      <div className="media-container">
        {media.map((asset, index) =>
          <img 
            src={asset} 
            key={index} 
            alt={`media-${index}`}
          />
        )}
      </div>
    </StyledMediaDisplay>
  );
};

export default MediaDisplay;