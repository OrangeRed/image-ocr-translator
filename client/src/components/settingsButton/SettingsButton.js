import React, { useState } from 'react'
import { StyledSettingsButton } from './SettingsButton.styled'
import useClickOutside from '../useClickOutside'
import { FaAngleDown } from 'react-icons/fa'

const SettingsButton = ({
  Icon, // Icon
  title, // string
  height, // Int
  darkMode,
  setSrcLang,
  setTgtLang,
  ...props
}) => {

  const [isHidden, setIsHidden] = useState(true)
  const [isActive, setIsActive] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [sourceLang, setSourceLang] = useState('ES')
  const [targetLang, setTargetLang] = useState('EN')


  // Toggle isHidden state
  const toggleHidden = () => {
    setIsHidden(isHidden => !isHidden)
  }

  // Check for click outside of current element
  const domNode = useClickOutside(() => {
    setIsActive('')
    setIsHidden(true)
  })

  const handleDarkMode = (bool) => {
    setIsActive('')
    setIsDarkMode(bool)
    darkMode(bool)
  }

  const handleActive = (str) => {
    isActive === str ?
    setIsActive('') :
    setIsActive(str)
  }

  const icon = (
    Icon !== undefined 
    ? <Icon size='14px' className='button-icon' /> 
    : '' 
  )

  const arrowIcon = (
     <FaAngleDown size='15px' className='title-icon' /> 
  )

  const langMap = {
    EN: 'English',
    ZH: 'Chinese',
    HI: 'Hindi',
    ES: 'Spanish',
    FR: 'French',
    AR: 'Arabic',
    RU: 'Russian',
    JA: 'Japanese',
    IT: 'Italian',
  }

  return (
      <StyledSettingsButton 
        titleHidden={title !== '' ? false : true} 
        {...props}
      >
        <div ref={domNode} >
          <div className='content-div' onClick={toggleHidden}>
            {icon}
            {title}
          </div>
          <div className={`settings-container ${isHidden ? 'hidden' : 'flex'}`}>
            <div className='dropdown' onClick={() => handleActive('theme')}>
              <span>Theme: {isDarkMode ? 'Dark' : 'Light'}</span>
              {arrowIcon}
            </div>
            <div className={`${isActive === 'theme' ? '' : 'hidden'}`}>
              <ul>
                <li onClick={() => handleDarkMode(false)}> Light Theme </li>
                <li onClick={() => handleDarkMode(true)}> Dark Theme </li>
              </ul>  
            </div>
            <div className='dropdown' onClick={() => handleActive('source')}>
              <span>Source Text: {sourceLang}</span>
              {arrowIcon}
            </div>
            <div className={`${isActive === 'source' ? '' : 'hidden'}`}>
              <ul>
                {Object.entries(langMap).map(([code, lang]) => {
                  return <li onClick={() => {
                    setIsActive('')
                    setSourceLang(code)
                    setSrcLang(code)
                  }}>{lang}</li>
                })}
              </ul>
            </div>
            <div className='dropdown' onClick={() => handleActive('target')}>
              <span>Translate Result: {targetLang}</span>
              {arrowIcon}
            </div>
            <div className={`${isActive === 'target' ? '' : 'hidden'}`}>
              <ul>
                {Object.entries(langMap).map(([code, lang]) => {
                  return <li onClick={() => {
                    setIsActive('')
                    setTargetLang(code)
                    setTgtLang(code)
                  }}>{lang}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </StyledSettingsButton>
      
  )
}

export default SettingsButton