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
  
  .noHover {
    pointer-events: none;
  }

  .div-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    max-height: 1000px;
  }

  .text-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    width: 20em;
  }

  .text-item {
    width: 100%;
    min-height: 45%;
    margin-bottom: 10px;
    background-color: #dfdfdf;
    line-height: 2em;
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;