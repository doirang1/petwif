import React from 'react';
import { useStore } from '../../store/store';
import { SideContainer, UploadSection, Button, SelectContainer, Category, Paragraph, Paragraph2, SelectContainer2, Category2, Sticker } from './Side.style';
import { Icon } from '../Icon';

export default function Side() {
  const { isPhotoSelected, isStickerSelected, isMineSelected, isMarketSelected, selectPhoto, selectSticker, selectMine, selectMarket } = useStore();

  return (
    <SideContainer>
      <SelectContainer>
        <Category onClick={selectPhoto}>
          <Icon id="album" width="42" height="42"></Icon>
          <Paragraph>앨범</Paragraph>
        </Category>
        <Category onClick={selectSticker}>
          <Icon id="album" width="42" height="42"></Icon>
          <Paragraph>스티커</Paragraph>
        </Category>
      </SelectContainer>

      {isPhotoSelected && (
        <>
          <UploadSection>
            <Icon id="cloud" width="145" height="129"></Icon>
            <Paragraph2>Drop your files here</Paragraph2>
          </UploadSection>
          <Button>파일 선택</Button>
        </>
      )}

      {isStickerSelected && (
        <>
          <SelectContainer2>
            <Category2 onClick={selectMine}>
              <Paragraph>내 스티커</Paragraph>
            </Category2>
            <Category2 onClick={selectMarket}>
              <Paragraph>스티커 마켓</Paragraph>
            </Category2>
          </SelectContainer2>

          {isMineSelected && (
            <Sticker>내 스티커</Sticker>
          )}

          {isMarketSelected && (
            <Sticker>스티커 마켓</Sticker>
          )}
        </>
      )}
    </SideContainer>
  );
}
