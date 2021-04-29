import React from 'react'
import { StyledNavbar } from './Navbar.styled'
import ButtonPopUpMenu from '../buttonPopUpMenu/ButtonPopUpMenu'

const Navbar = ({
  loggedIn, // Bool
  Buttons, // [Button]
  ...props
}) => {
  
  const navLogoUrl = 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg';

  const navLogo = (
    <span className='nav-logo'>
      <img 
          id='myImg'
          src={ navLogoUrl } 
          alt='logo'
      />
    </span>
  )

  const guestLinks = (
    <>
      <a href='/api/user/login'>Log in</a>
      <a href='/api/user/register'>Sign up</a>
    </>
  )

  const userLinks = (
    <>
      <a href='/api/user/logout'>Log out</a>
      <a href='/api/user/history'>History</a>
    </>
  )

  const buttonPopUpMenu = (
    <ButtonPopUpMenu
      title={loggedIn ? 'User' : 'Guest'}
      links={loggedIn ? userLinks : guestLinks}
      className='button-popup-menu'
    />
  )

  return (
    <StyledNavbar {...props}>
      <div className='navbar-container'>
        <div className='left-container'>
          {navLogo}
          {buttonPopUpMenu}
        </div>
        <div className='right-container'>
          {Buttons}
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar