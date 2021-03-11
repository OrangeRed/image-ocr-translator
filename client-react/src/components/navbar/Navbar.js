import React from 'react';
import { StyledNavbar } from './Navbar.styled';

const Navbar = ({
  isGuest,
  height,
  ...props 
}) => {

  const navLogo = (
    <div className="nav-logo">
      <img 
        src={ "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg" } 
        alt="logo"
      />
      <p>Name</p>
    </div>
  );

  const loginButton = (
    <a href="/temp">Login</a>
  );

  const signOutButton = (
    <a href="/temp">Sign Out</a>
  );

  const topBottomPadding = 10;
  const heightInt = String(height.replace('px', ''));
  const innerHeight = heightInt - (topBottomPadding * 2.0);
  const topBottomPaddingPx = `${topBottomPadding}px`
  const innerHeightPx = `${innerHeight}px`

  return (
    <StyledNavbar 
      innerHeight={innerHeightPx} 
      topBottomPadding={topBottomPaddingPx} 
      {...props}
    >
      <div className="navbar-container">
        {navLogo}
        <div className="nav-buttons">
          {isGuest ? loginButton : signOutButton}
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;