import React from 'react'
import { StyledTranslationMenu } from './TranslationMenu.styled'

const TranslationMenu = ({
  Buttons,
  ...props
}) => {

  return (
    <StyledTranslationMenu {...props}>
      <div className='menu-navbar-container'>
        {Buttons}
      </div>
      
      <div className='translation-container'>
        <h1>TRANSLATION AREA</h1> <br></br>
        <h1>Placeholder text</h1> <br></br>
        <h1>TRANSLATION AREA</h1> <br></br>
        <h1>Placeholder text</h1> <br></br>
        <h1>TRANSLATION AREA</h1> <br></br>
        <h1>Placeholder text</h1> <br></br>
        <h1>TRANSLATION AREA</h1> <br></br>
        <h1>Placeholder text</h1> <br></br>
      </div>
    </StyledTranslationMenu>
  )
}

export default TranslationMenu;