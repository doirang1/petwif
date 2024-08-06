import styled from 'styled-components';

export const MainContainer = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

export const Description = styled.div`
  text-align: right;
  font-size: 14px;
  color: #555;
`;

export const CoverEditingSection = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
`;