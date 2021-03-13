import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: stretch;
  align-items: center;
  background: #2e3439;
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
  padding: 0.5rem 1rem;
  z-index: 100;

  .navbar-container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .nav-logo {
    cursor: pointer;
  }

  img {
    height: 40px;
    width: 40px;
  }

  .leftSide {
    flex: 75%;
    display: flex;
    justify-content: flex-start;
    height: 40px;
  }

  .rightSide {
    flex: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    @media (max-width: 1440px) {
      justify-content: flex-end;
    }
  }

  .rightSide button {
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 56px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    background: #272b30;
    border-radius: 0.25rem;
    color: #ccc;
    border: 2px solid rgba(128, 128, 128, 0.5);
    text-align: center;
  }

  .rightSide button:hover {
    color: black;
    background-color: #ccc;
  }
`;

