import styled from 'styled-components';

export const SideContainer = styled.div`
  width: 30%;
  background-color: #D9D9D9;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Category = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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

export const UploadSection = styled.div`
  width: 90%;
  height: 60%;
  padding: 10px;
  border: 1px dashed #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const SelectContainer2 = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Category2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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

export const Sticker = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  background-color: #fff;
  border: 1px solid #000;
`;

export const Button = styled.button`
  width: 30%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

export const Paragraph2 = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #485BBD;

`;