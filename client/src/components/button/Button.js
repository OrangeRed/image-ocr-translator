import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ({
  Icon, // Icon
  title, // string
  height, // Int
  ...props
}) => {

  const icon = (
    Icon !== undefined 
    ? <Icon size='14px' className='button-icon' /> 
    : '' 
  )

  return (
    <StyledButton 
      height={height} 
      titleHidden={title !== undefined ? false : true} 
      {...props}
    >
      {icon}
      {title}
    </StyledButton>
  )
}

export default Button