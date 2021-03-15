import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px;
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.secondaryBackground};;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.button};
  border: ${({ theme }) => theme.border};
  text-align: center;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.secondaryBackground};;
    background-color: ${({ theme }) => theme.button};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  .button-icon {
    margin-right: ${({ titleHidden }) => titleHidden ? 0 : 7}px;
  }
`