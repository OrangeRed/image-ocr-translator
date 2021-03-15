import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: stretch;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-bottom: ${({ theme }) => theme.border};
  padding-top: ${({ theme }) => theme.constants.navbarTopBottomPadding}px;
  padding-bottom: ${({ theme }) => theme.constants.navbarTopBottomPadding}px;
  z-index: 100;

  .navbar-container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  img {
    height: ${({ theme }) => theme.constants.navbarHeight - (theme.constants.navbarTopBottomPadding * 2)}px;
    width: ${({ theme }) => theme.constants.navbarHeight - (theme.constants.navbarTopBottomPadding * 2)}px;
  }

  .left-container {
    flex: 75%;
    display: flex;
    justify-content: flex-start;
    height: ${({ theme }) => theme.constants.navbarHeight - (theme.constants.navbarTopBottomPadding * 2)}px;
    padding-left: 1rem;
  }

  .button-popup-menu {
    margin-left: 10px;
  }

  .right-container {
    flex: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 1rem;

    > button {
      margin-left: 10px;
    }
    
    @media (max-width: ${({ theme }) => theme.constants.mobileWidth}px) {
      justify-content: flex-end;
    }
  }
`

