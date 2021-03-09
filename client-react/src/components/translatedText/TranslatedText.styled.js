import styled from 'styled-components';

export const StyledTranslatedText = styled.div`
  .translate-stage {
    display: flex;
  }

  input[name=translate-input] {
    width: 85%;
    padding: 12px 20px;
    box-sizing: border-box;
    border-color: #dfdfdf;
  }

  .lang-options {
    width: 15%;
    height: stretch;
    border-color: #dfdfdf;
  }

  .translated-text {
    padding: 0px 20px;
    line-height: 1.5em;
  }

  .translated-text li {
    padding: 0px 20px;
    list-style-position: inside;
    word-wrap: break-word;
  }
`;