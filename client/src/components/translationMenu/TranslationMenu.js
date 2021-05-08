import React from 'react'
import { StyledTranslationMenu } from './TranslationMenu.styled'

const TranslationMenu = ({
  absMouseX,
  absMouseY,
  relMouseX,
  relMouseY,
  media,
  Buttons,
  ...props
}) => {

  const absMousePos = `Screen: (${absMouseX}, ${absMouseY})`;
  const relMousePos = `Client: (${relMouseX}, ${relMouseY})`;

  return (
    <StyledTranslationMenu {...props}>
      <div className='menu-navbar-container'>
        {Buttons}
      </div>
      
      <div className='translation-container'>
        <img src={media}></img><br></br>
        <h1>{absMousePos}</h1> <br></br>
        <h1>{relMousePos}</h1> <br></br>
        {/* <h1>Placeholder text</h1> <br></br>
        <h1>TRANSLATION AREA</h1> <br></br> */}
        
      </div>
    </StyledTranslationMenu>
  )
}

export default TranslationMenu;