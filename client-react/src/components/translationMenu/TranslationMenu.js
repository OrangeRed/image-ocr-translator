import React, { useState } from 'react';
import { StyledTranslationMenu } from './TranslationMenu.styled';

const TranslationMenu = ({
  topPadding, 
  ...props 
}) => {

  return (
    <StyledTranslationMenu topPadding={topPadding} {...props}>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
    </StyledTranslationMenu>
  );
};

export default TranslationMenu;