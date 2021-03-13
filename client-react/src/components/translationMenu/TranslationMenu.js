import React, { useState } from 'react';
import { StyledTranslationMenu } from './TranslationMenu.styled';

const TranslationMenu = ({
  topPadding, 
  ...props 
}) => {

  return (
    <StyledTranslationMenu topPadding={topPadding} {...props}>
      <h1>TRANSLATION AREA</h1> <br></br>
      <h1>Placeholder text</h1> <br></br>
      <h1>TRANSLATION AREA</h1> <br></br>
      <h1>Placeholder text</h1> <br></br>
      <h1>TRANSLATION AREA</h1> <br></br>
      <h1>Placeholder text</h1> <br></br>
      <h1>TRANSLATION AREA</h1> <br></br>
      <h1>Placeholder text</h1> <br></br>
    </StyledTranslationMenu>
  );
};

export default TranslationMenu;