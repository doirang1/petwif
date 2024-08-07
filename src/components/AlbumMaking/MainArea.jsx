import React from 'react';
import { useStore } from '../../store/store';
import { Button, MainContainer, Paragraph1, Paragraph2 } from './MainArea.style';

export default function MainArea() {
  const { isCoverEditing } = useStore();

  return (
    <MainContainer>
      {isCoverEditing ? (
        <CoverEditingSection>
          <p>표지 만들기 페이지</p>
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
      
    </MainContainer>
  );
}
