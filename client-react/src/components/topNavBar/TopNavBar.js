import React from 'react';
import { StyledTopNavBar } from './TopNavBar.styled';

const TopNavBar = ({
  isGuest = true,
  height = "48px",
  ...props 
}) => {

  const navLogo = (
    <div className="nav-logo">
      <img 
        src={ "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg" } 
        alt="logo"
      />
      <p>Title</p>
    </div>
  );

  const loginButton = (
    <a href="/temp">Login</a>
  )

  const signOutButton = (
    <a href="/temp">Sign Out</a>
  )

  return (
    <StyledTopNavBar height={height} {...props}>
      <div className="navbar-container">
        { navLogo }
        <div className="nav-buttons">
        { isGuest ? loginButton : signOutButton }
        </div>
      </div>
    </StyledTopNavBar>
  );
};

export default TopNavBar;