import styled from 'styled-components';

export const StyledTranslationMenu = styled.div`
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: 25%;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  color: #ccc;
  border-left: ${({ theme }) => theme.border};
  padding-top: ${({ theme }) => theme.constants.navbarHeight + theme.constants.borderSize}px;

  .menu-navbar-container {
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.background};
  }

  .translation-container {
    padding: 5px 10px 5px 10px;
  }

  @media (max-width: ${({ theme }) => theme.constants.mobileWidth}px){
    width: 100%;
    height: 30vh;
    bottom: 0;
    top: auto;
    right: auto;
    padding-top: 0;
    padding-left: 0;

    .menu-navbar-container {
      padding: ${({ theme }) => theme.constants.navbarTopBottomPadding}px;
      border-bottom: ${({ theme }) => theme.border};
      border-top: ${({ theme }) => theme.border};
      border-left: 0;
    }
  }
`