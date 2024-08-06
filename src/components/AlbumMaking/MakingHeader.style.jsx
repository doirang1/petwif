import styled from 'styled-components';
import { Icon } from '../Icon';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content;
  background-color: #f5f5f5;
  height: 20%;
  border: 2px solid red;
`;

export const LogoSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: space-between;
`;

export const NavSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #D9D9D9;
  border: 2px solid red;
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