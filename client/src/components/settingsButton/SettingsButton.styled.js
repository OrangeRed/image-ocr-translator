import styled from 'styled-components';

export const StyledSettingsButton = styled.div`
  font-size: 16px;
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.secondaryBackground};;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.button};
  border: ${({ theme }) => theme.border};
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-family: Tahoma;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  .button-icon {
    margin-right: ${({ titleHidden }) => titleHidden ? 0 : 7}px;
  }

  .hidden {
    display: none;
  }
  
  .flex {
    display: flex;
    flex-direction: column;
  }

  .content-div {
    padding: 10px;

    &:hover {
      color: ${({ theme }) => theme.secondaryBackground};
      background-color: ${({ theme }) => theme.button};
    
    }
    
    @media (max-width: ${({ theme }) => theme.constants.mobileWidth}px) {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 7.5px;
      padding-bottom: 7.5px;
    }
  }

  .settings-container {
    position: absolute;
    top: 85%;
    left: 75%;
    background: ${({ theme }) => theme.secondaryBackground};
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    border: ${({ theme }) => theme.border};
    border-radius: 0.25rem;
    text-align: left;
    
    .dropdown {
      padding: 5px;
      font-size: 24px;

      &:hover {
        color: ${({ theme }) => theme.buttonActive};
      }
    }

    ul {
      list-style: none;

      li {
        padding: 10px;
        padding-left: 20px;
        
      }

      li:hover {
        color: ${({ theme }) => theme.secondaryBackground};
        background-color: ${({ theme }) => theme.button};
      }
    }
    

    .selected-theme {
      &:hover {
        color: ${({ theme }) => theme.secondaryBackground};
        background-color: ${({ theme }) => theme.button};
      }
      
    }

    
  }
`