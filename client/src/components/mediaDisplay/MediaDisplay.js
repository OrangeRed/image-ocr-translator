import React from 'react'
import { StyledMediaDisplay } from './MediaDisplay.styled'

const MediaDisplay = ({
  media, 
  ...props 
}) => {

  return (
    <StyledMediaDisplay {...props}>
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
  )
}

export default MediaDisplay