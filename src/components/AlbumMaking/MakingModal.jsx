import React from 'react';
import * as S from './MakingModal.style';

export default function AlbumModal({ close }) {
    return (
      <S.ModalLayout>
        <S.ModalContainer>
          <S.ModalHeader>
            <S.CloseButton onClick={close}>&times;</S.CloseButton>
          </S.ModalHeader>
          <S.ModalBody>
            <div>
              <label>앨범제목</label>
              <S.Input type="text" />
            </div>
            <div>
              <label font-weight="bold">공개범위</label>
              <S.RadioGroup>
                <label>
                  <input type="radio" name="visibility" value="public" />
                  전체공개
                </label>
                <label>
                  <input type="radio" name="visibility" value="friends" />
                  친구만 공개
                </label>
                <label>
                  <input type="radio" name="visibility" value="private" />
                  비공개
                </label>
              </S.RadioGroup>
            </div>
            <div>
              <label>앨범 문구</label>
              <S.TextArea />
            </div>
          </S.ModalBody>
          <S.ModalFooter>
            <S.Button onClick={close}>게시하기</S.Button>
          </S.ModalFooter>
        </S.ModalContainer>
      </S.ModalLayout>
    );
  }