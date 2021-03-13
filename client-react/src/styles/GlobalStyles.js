import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  
  .App {
    height: 100vh;
  }

  .filler {
    padding-top: 68px;
    height: 200vh;
    background: pink;
    width: 70%;
  }
`;