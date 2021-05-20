import React from 'react'
import { StyledTranslationMenu } from './TranslationMenu.styled'

const TranslationMenu = ({
  media,
  Buttons,
  searchButton,
  trackSearchText,
  responseText,
  sourceText,
...props
}) => {

  const displayResponseText = () => {
    return(
      <>
        <h1>{responseText[0]}</h1> <br></br>
        <h1>{responseText[1]}</h1> <br></br>
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
          <img src={media}></img><br></br>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Look up a word'   
            onChange={(event) => { trackSearchText(event.target.value) }}>
          </input>
          {searchButton}
        </div>
        <div className='translation-container-lower'> 
            <h1>{sourceText}</h1><br></br>
            {displayResponseText()}
            <h1>TRANSLATION AREA</h1> <br></br>  
        </div>
      </div>
    </StyledTranslationMenu>
  )
}

export default TranslationMenu;
