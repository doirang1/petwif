import React from 'react';
import { SideContainer, UploadSection, Button } from './Side.style';

export default function Side() {
  return (
    <SideContainer>
      <UploadSection>
        <p>Drop your files here</p>
        <Button>파일 선택</Button>
      </UploadSection>
    </SideContainer>
  );
}
