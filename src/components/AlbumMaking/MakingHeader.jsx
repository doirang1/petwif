import React from 'react';
import { HeaderContainer, LogoSection, NavSection, NamingSection, StyledIcon } from './MakingHeader.style';

export default function MakingHeader() {
  return (
    <HeaderContainer>
      <LogoSection>
        <StyledIcon id="logo" width="284" height="40"/>
        <NamingSection>
          OOO님의 앨범 제작소
        </NamingSection>
      </LogoSection>
      <NavSection>
      </NavSection>
    </HeaderContainer>
  );
}
