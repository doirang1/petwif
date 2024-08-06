import styled from 'styled-components';
import { Icon } from '../Icon';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content;
  background-color: #f5f5f5;
  height: 20%;
`;

export const LogoSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: space-between;
  border: 1px solid black;
`;

export const EditSection = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  background-color: #D9D9D9;
  border: 1px solid black;
  position: relative;
`;

export const NamingSection = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5%;
  margin-left: 3%;
  width: 100%;
  height: 30%;
`;

export const StyledIcon = styled(Icon)`
  margin-top: 5%;
`;

export const Button = styled.button`
  width: 10%;
  height: 30%;
  padding: 10px;
  position: absolute;
  bottom: 10%;
  right: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 10px;
`;

export const ButtonBack = styled.button`
  width: 10%;
  height: 30%;
  padding: 10px;
  position: absolute;
  bottom: 10%;
  left: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 10px;
`;

export const EditContainer = styled.div`
  width: 40%;
  height: 20%;
  position: absolute;
  top: 10%;
  left: 1%;
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