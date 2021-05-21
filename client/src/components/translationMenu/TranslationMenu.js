import React from 'react'
import { StyledTranslationMenu } from './TranslationMenu.styled'

const TranslationMenu = ({
  media,
  Buttons,
  searchButton,
  trackSearchText,
  responseText,
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

  const displayResponseText = () => {
    if (responseText.length === 0) {
      return
    }

    return(
      <>
        <h1>{responseText[0]}</h1>
        <p>google translate</p><br></br>

        <h1>{responseText[1]}</h1>
        <p>my memory dictionary</p><br></br>
      </>
    )
  }

  return (
    <StyledTranslationMenu {...props}>
      <div className='menu-navbar-container'>
        {Buttons}
      </div>
      <div className='translation-container'>
        <div className='translation-container-upper'>
          <img src={media} alt=''></img><br></br>
          {displayOCR()}
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Look up a word'   
            onChange={(event) => { trackSearchText(event.target.value) }}>
          </input>
          {searchButton}
        </div>
        <div className='translation-container-lower'> 
          {displayResponseText()}
        </div>
      </div>
    </StyledTranslationMenu>
  )
}

export default TranslationMenu;
