import styled from 'styled-components';

export const StyledButtonPopUpMenu = styled.div`
  font-size: 25px; 
  color: ${({ theme }) => theme.button};
  display: flex;
  align-items: center;

  .hidden {
    display: none;
  }  

  .title-container {
    cursor: pointer;
    user-select: none;
    line-height: 1.6;
    display: flex;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.buttonActive};
    }

    .title-icon {
      margin-left: 3px;
    }
  }

  .links-container {
    position: absolute;
    top: 75%;
    background: ${({ theme }) => theme.secondaryBackground};
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    border: ${({ theme }) => theme.border};
    border-radius: 0.25rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.button};
      display: flex;
      flex-direction: column;
      padding: 0.25rem 1.5rem;
      box-sizing: border-box;

      &:hover {
        color: ${({ theme }) => theme.secondaryBackground};
        background-color: ${({ theme }) => theme.button};
      }
    }
  }
`