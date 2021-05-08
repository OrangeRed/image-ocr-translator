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
    color: ${({ theme }) => theme.body};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.body};
  }
  
  .overlay {
    z-index: 200;
    pointer-events: none;
  }

  .App {
    height: 100vh;
    overflow: hidden;
  }
`