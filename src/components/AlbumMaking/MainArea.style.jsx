import styled from 'styled-components';

export const MainContainer = styled.main`
  flex: 1;
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  background: #ffffff;
  border-radius: 10px;
`;

export const CoverEditingSection = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
`;

export const Paragraph1 = styled.p`
  font-weight: bold;
  font-size: 28px;
`;

export const Paragraph2 = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 30%;
  height: 10%;
  padding: 10px;
  border: 1px solid #f87f28;
  border-radius: 10px;
  color: #f87f28;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#FFDCB6' : '#FFF0D4')};
  &:hover {
    background-color: #ffdcb6;
  }
`;

export const EditContainer = styled.div`
  width: 95%;
  height: 5%;
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #000;
`;

export const EditCategory = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: #e0e0e0;
  }
`;
