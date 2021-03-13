import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import UserContainer from './userContainer/UserContainer';
import { Snipper, ImageLoader, Settings } from './controls';

function Navbar(props) {
  const navLogo = (
    <a className="nav-logo" href="/">
      <img 
        src={ "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg" } 
        alt="logo"
      />
    </a>
  );

  const topBottomPadding = 10;
  const heightInt = String(props.height.replace('px', ''));
  const innerHeight = heightInt - (topBottomPadding * 2.0);
  const topBottomPaddingPx = `${topBottomPadding}px`
  const innerHeightPx = `${innerHeight}px`

  return (
    <StyledNavbar 
      innerHeight={innerHeightPx} 
      topBottomPadding={topBottomPaddingPx}
    >
      <div className="navbar-container">
        <div className="leftSide">
          {navLogo}
          <UserContainer isGuest={props.isGuest}/>
        </div>
        <div className="rightSide">
          <Snipper /> 
          <ImageLoader />
          <Settings />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;