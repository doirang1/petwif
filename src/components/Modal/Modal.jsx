import { Button } from '../Button';

import * as S from './Modal.style.jsx';

export default function Modal({ text, close }) {
  return (
    <S.ModalLayout>
      <S.Modal>
        <S.Text>{text}</S.Text>
        <Button onClick={close} padding='10px'>
          확인
        </Button>
      </S.Modal>
    </S.ModalLayout>
  );
}
