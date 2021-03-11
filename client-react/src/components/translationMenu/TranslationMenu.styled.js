import styled from 'styled-components';

export const StyledTranslationMenu = styled.div`
  background-color: white;
  width: 30%;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  padding-top: ${({ topPadding }) => topPadding};

  @media (max-width: 1440px){
    background-color: teal;
    width: 100%;
    height: 30vh;
    bottom: 0;
    top: auto;
    right: auto;
    padding-top: 0;
  }
`;