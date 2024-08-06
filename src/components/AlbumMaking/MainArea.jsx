import React from 'react';
import { MainContainer, ImageContainer, Description } from './MainArea.style';

export default function MainArea() {
  return (
    <MainContainer>
      <ImageContainer>
        <img src="path/to/your/image1.jpg" alt="Cat" />
        <Description>01. 고양이 설명...</Description>
      </ImageContainer>
      <ImageContainer>
        <img src="path/to/your/image2.jpg" alt="Cat" />
      </ImageContainer>
    </MainContainer>
  );
}
