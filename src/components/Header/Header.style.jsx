import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 17px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
