import styled from 'styled-components';

export const StyledMediaDisplay = styled.div`
  padding-top: ${({ topPadding }) => topPadding};
  background: pink;
  width: 70%;

  .media-container {
    padding: 0 20px 10px 20px;

    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }

  @media (max-width: 1440px){
    background-color: purple;
    width: 100%;
    padding-bottom: 30vh;
  }
`;