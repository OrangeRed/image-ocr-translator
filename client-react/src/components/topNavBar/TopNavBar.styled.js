import styled from 'styled-components';

export const StyledTopNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  background: red;
  padding: 10px 24px 10px 24px;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    height: ${({ height }) => height};

    .nav-logo {
      background: blue;
      height: 100%;
      display: flex;

      img {
        height: 100%;
      }

      p {
        line-height: ${({ height }) => height};
        font-size: 25px;
        margin-left: 15px;
        background: teal;
      }
    }

    .nav-buttons {
      background: green;

      a {
        line-height: ${({ height }) => height};
        font-size: 18px;
      }
    }
  }

  // .navbar-container {
  //   height: 36px;
  //   display: flex;
  //   justify-content: space-between;

  //   .nav-logo {
  //     background: blue;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //       object-fit: cover;
        
  //     }
  //   }
    
  //   .nav-buttons {
  //     background: yellow;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     a {
  //       background: green;
  //       margin: 0 20px;
  //       text-decoration: none;
  //       transition: color 0.1s linear;
  //       color: ${({ theme }) => theme.button};
  //       &:hover {
  //         color: ${({ theme }) => theme.buttonHover};
  //       }
  //     }
  //   }
`;