import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 17px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.white};
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
