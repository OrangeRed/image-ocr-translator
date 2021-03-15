import styled from 'styled-components';

export const StyledMediaDisplay = styled.div`
  padding-top: ${({ theme }) => theme.constants.navbarHeight + theme.constants.borderSize}px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: 75%;

  .media-container {
    padding-bottom: 10px;

    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.constants.mobileWidth}px){
    width: 100%;
    
    .media-container {
      padding-bottom: 30vh;

      img {
        margin-bottom: 10px;
      }
    }
  }
`