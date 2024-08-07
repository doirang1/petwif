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
  background: #FFFFFF;
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
  background-color: #FFF0D4;
  border: 1px solid #F87F28;
  border-radius: 10px;
  color: #F87F28;
  font-size: 20px;
  cursor: pointer;
`;