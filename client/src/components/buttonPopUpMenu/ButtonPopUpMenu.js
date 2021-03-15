import React, { useState } from 'react'
import { StyledButtonPopUpMenu } from './ButtonPopUpMenu.styled'
import useClickOutside from '../useClickOutside'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const ButtonPopUpMenu = ({
  title, // String
  links, // [<a href>]
  ...props
}) => {

  const [isHidden, setIsHidden] = useState(true)

  // Toggle isHidden state
  const handleClick = () => {
    setIsHidden(isHidden => !isHidden)
  }

  // Check for click outside of current element
  const domNode = useClickOutside(() => {
    setIsHidden(true)
  })

  const icon = (
    isHidden 
    ? <FaAngleDown size='15px' className='title-icon' /> 
    : <FaAngleUp size='15px' className='title-icon' />
  )

  return (
    <StyledButtonPopUpMenu {...props}>
      <div ref={domNode}>
        <div className='title-container' onClick={handleClick}>
          <span>{title}</span>
          {icon}
        </div>
        <div className={`links-container ${isHidden ? 'hidden' : ""}`}>
          {links}
        </div>
      </div>
    </StyledButtonPopUpMenu>
  )
}

export default ButtonPopUpMenu