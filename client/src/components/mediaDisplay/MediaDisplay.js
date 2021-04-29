import React, { useState } from 'react'
import { StyledMediaDisplay } from './MediaDisplay.styled'
import { useScrollPosition } from 'use-scroll-position'
import { ScreenCapture } from 'react-screen-capture';


const MediaDisplay = ({
  media, 
  ...props 
}) => {

  // const positionsStore = PositionStore()
  // const viewportRef = useRef()
  // const redBoxRef = useRef()

  // // Viewport scroll position
  // useScrollPosition(
  //   ({ currPos }) => {
  //     positionsStore.setViewportPosition(currPos)
  //     const { style } = viewportRef.current
  //     style.top = `${150 + currPos.y}px`
  //     style.left = `${10 + currPos.x}px`
  //   },
  //   [positionsStore],
  //   null,
  //   true
  // )

  // // Element scroll position
  // useScrollPosition(
  //   ({ currPos }) => positionsStore.setElementPosition(currPos),
  //   [],
  //   redBoxRef,
  //   false,
  //   300
  // )

  const [onStartCapture, setOnStartCapture] = useState(true);
  const [capturedImg, setCapturedImg] = useState(null);

  const handleScreenCapture = screenCapture => {
    setCapturedImg( screenCapture );
  };

  return (
    <ScreenCapture onStartCapture={onStartCapture} onEndCapture={handleScreenCapture}>
    {({ onStartCapture }) => (
      <StyledMediaDisplay {...props}>
        <div className="media-container">
          {media.map((asset, index) =>
            <img 
              src={asset} 
              key={index} 
              alt={`media-${index}`}
              inFrame={''}
            />
          )}
          {/* <button onClick={onStartCapture}>Capture</button>
          <img src={capturedImg} /> */}
        </div>
        
      </StyledMediaDisplay>
    )}
    </ScreenCapture>
  )
}

export default MediaDisplay