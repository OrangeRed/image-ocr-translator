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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 0 24px;
  }

  .filler {
    height: 200vh;
    background: white;
  }
`;