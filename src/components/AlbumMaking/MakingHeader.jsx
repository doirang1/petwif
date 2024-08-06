import React from 'react';
import { HeaderContainer, LogoSection, NavSection } from './MakingHeader.style';
import { Icon } from '../Icon';

export default function MakingHeader() {
  return (
    <HeaderContainer>
      <LogoSection>
        <Icon id="logo" width="284" height="40"/>
      </LogoSection>
      <NavSection>
      </NavSection>
    </HeaderContainer>
  );
}
