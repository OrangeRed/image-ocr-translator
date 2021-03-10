import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  background: red;
  padding: 10px 24px 10px 24px;
  z-index: 100;

  .navbar-container {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    height: ${({ innerHeight }) => innerHeight};

    .nav-logo {
      background: blue;
      height: 100%;
      display: flex;

      img {
        height: 100%;
      }

      p {
        line-height: ${({ innerHeight }) => innerHeight};
        font-size: 25px;
        margin-left: 15px;
        background: teal;
      }
    }

    .nav-buttons {
      background: green;

      a {
        line-height: ${({ innerHeight }) => innerHeight};
        font-size: 18px;
        text-decoration: none;
      }
    }
  }
`;