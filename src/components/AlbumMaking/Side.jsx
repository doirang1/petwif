import React from 'react';
import { SideContainer, UploadSection, Button, SelectContainer, Category, Paragraph } from './Side.style';
import { Icon } from '../Icon';

export default function Side() {
  return (
    <SideContainer>
      <SelectContainer>
        <Category>
          <Icon id="album" width="42" height="42"></Icon>
          <Paragraph>앨범</Paragraph>
        </Category>
        <Category>
          <Icon id="album" width="42" height="42"></Icon>
          <Paragraph>스티커</Paragraph>
        </Category>
      </SelectContainer>
      <UploadSection>
        <p>Drop your files here</p>
      </UploadSection>
      <Button>파일 선택</Button>
    </SideContainer>
  );
}
