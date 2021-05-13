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
    display: flex;
    flex-direction: column;

    .translation-container-upper {
      padding: 5px 10px 5px 10px;
      height: 40vh;
      
    }

    .translation-container-lower {
      padding: 5px 10px 5px 10px;
      height: 50vh;
    }

    .search-bar {
      display: flex;

      input {
        flex: 90%;
        height: 35px;
        font-size: 20px;
        padding-left: 10px;
        border-radius: 0.25rem
      }

      button {
        font-size: 20px;
        flex: 35px;
        height: 35px;
        padding: 0px;
        padding-left: 5px;
        justify-content: center;
      }
    }
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