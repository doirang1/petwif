import React from 'react';
import { useStore } from '../../store/store';
import { Button, MainContainer, Paragraph1, Paragraph2, CoverEditingSection, EditCategory, EditContainer } from './MainArea.style';

export default function MainArea() {
  const { isCoverEditing, isTextEditing } = useStore();

  return (
    <MainContainer>
      {isCoverEditing ? (
        <CoverEditingSection>
          <p>표지꾸미기</p>
        </CoverEditingSection>
      ) : (
        <>
          <Paragraph1>
            나만의 앨범을 만들어보세요:
          </Paragraph1>
          <Button>파일 선택</Button>
          <Paragraph2>
            혹은 사진을 드래그 앤 드롭
          </Paragraph2>
        </>
      )}

      {isTextEditing && (
        <EditContainer>
          <EditCategory>임</EditCategory>
          <EditCategory>시</EditCategory>
          <EditCategory>용</EditCategory>
          <EditCategory>텍</EditCategory>
          <EditCategory>스</EditCategory>
          <EditCategory>트</EditCategory>
          <EditCategory>편</EditCategory>
          <EditCategory>집</EditCategory>
          <EditCategory>기</EditCategory>
          <EditCategory>임</EditCategory>
        </EditContainer>
      )}
      
    </MainContainer>
  );
}
