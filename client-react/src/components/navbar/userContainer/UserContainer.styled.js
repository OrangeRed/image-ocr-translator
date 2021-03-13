import styled from 'styled-components';

export const StyledUserContainer = styled.div`
  font-size: 25px; 
  color: #ccc;
  padding-left: 10px;

  .isHidden {
    display: none;
  }  

  .userName {
    max-height: 40px;
    cursor: pointer;
    user-select: none;
    line-height: 1.6;
  }

  .userName:hover {
    color: #999;
  }

  .userLinks {
    position: absolute;
    top: 75%;
    background: #212529;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    border: 2px solid rgba(128, 128, 128, 0.5);
    border-radius: 0.25rem;
  }
  
  .userLinks a {
    text-decoration: none;
    color: #ccc;
    display: flex;
    flex-direction: column;
    padding: 0.25rem 1.5rem;
    box-sizing: border-box;
  }

  .userLinks a:hover {
    color: #212529;
    background-color: #ccc;
  }
`;