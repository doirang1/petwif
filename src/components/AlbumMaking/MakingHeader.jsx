import React from 'react';
import { useStore } from '../../store/store';
import { HeaderContainer, LogoSection, EditSection, NamingSection, StyledIcon, Button, EditContainer, EditCategory, ButtonBack } from './MakingHeader.style';

export default function MakingHeader() {
  const { isCoverEditing, startCoverEditing, stopCoverEditing } = useStore();
  
  return (
    <HeaderContainer>
      <LogoSection>
        <StyledIcon id="logo" width="284" height="40"/>
        <NamingSection>
          OOO님의 앨범 제작소
        </NamingSection>
      </LogoSection>
      <EditSection>
        <EditContainer>
          <EditCategory>임</EditCategory>
          <EditCategory>시</EditCategory>
          <EditCategory>편</EditCategory>
          <EditCategory>집</EditCategory>
          <EditCategory>에</EditCategory>
          <EditCategory>디</EditCategory>
          <EditCategory>터</EditCategory>
          <EditCategory>입</EditCategory>
          <EditCategory>니</EditCategory>
          <EditCategory>다</EditCategory>
        </EditContainer>
        {isCoverEditing ? (
          <>
            <ButtonBack onClick={stopCoverEditing}>뒤로 가기</ButtonBack>
            <Button active>앨범 만들기</Button>
          </>
        ) : (
          <Button onClick={startCoverEditing}>표지 만들기</Button>
        )}
      </EditSection>
    </HeaderContainer>
  );
}
