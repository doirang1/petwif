import styled from 'styled-components';

export const ModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 40%;
  padding: 23px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
  background: white;
  border-radius: 8px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  word-break: keep-all;
  color: ${(props) => props.theme.color.black};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
  background: #D9D9D9;
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5%;
  margin-top: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
  background: #ABA2A2;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: #D9D9D9;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background: #F87F28;
  }
  border-radius: 5px;
`;
