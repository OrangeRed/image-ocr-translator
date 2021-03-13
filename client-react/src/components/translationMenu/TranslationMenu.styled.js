import styled from 'styled-components';

export const StyledTranslationMenu = styled.div`
  background-color: #272b30;
  width: 25%;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  color: #ccc;
  border-left: 2px solid rgba(128, 128, 128, 0.5);
  border-top: 2px solid rgba(128, 128, 128, 0.5);
  padding-left: 0.5rem;
  padding-top: ${({ topPadding }) => topPadding};

  @media (max-width: 1440px){
    width: 100%;
    height: 30vh;
    bottom: 0;
    top: auto;
    right: auto;
    padding-top: 0;
  }
`;