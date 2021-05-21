import React from 'react'
import { StyledTranslationMenu } from './TranslationMenu.styled'

const TranslationMenu = ({
  media,
  Buttons,
  searchButton,
  trackSearchText,
  sourceText,
  ocrResult,
  ...props
}) => {

  const displayOCR = () => {
    if(ocrResult === ''){
      return <h3>No words were able to be parsed from this image</h3>
    }
    return <h3>{ocrResult}</h3>
  }

  return (
    <StyledTranslationMenu {...props}>
      <div className='menu-navbar-container'>
        {Buttons}
      </div>
      <div className='translation-container'>
        <div className='translation-container-upper'>
          <img src={media}></img><br></br>
          {displayOCR()}
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Look up a word'   
            onChange={(event) => { trackSearchText(event.target.value) }}>
          </input>
          {searchButton}
        </div>
        <div className='translation-container-lower'> 
            <h1>{sourceText}</h1><br></br>
            <h1>Placeholder text</h1> <br></br>
            <h1>TRANSLATION AREA</h1> <br></br>  
        </div>
      </div>
    </StyledTranslationMenu>
  )
}

export default TranslationMenu;