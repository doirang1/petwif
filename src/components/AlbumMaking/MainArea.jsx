import React from 'react';
import { useStore } from '../../store/store';
import { MainContainer, ImageContainer, Description, CoverEditingSection } from './MainArea.style';

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
          <ImageContainer>
            <img src="path/to/your/image1.jpg" alt="Cat" />
            <Description>01. 고양이 설명...</Description>
          </ImageContainer>
          <ImageContainer>
            <img src="path/to/your/image2.jpg" alt="Cat" />
          </ImageContainer>
        </>
      )}
      
    </MainContainer>
  );
}
