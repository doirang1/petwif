import styled from 'styled-components';

import { Layout } from '../../../components/Common';

export const Container = styled(Layout)`
  padding: 33px 0 16px 33px;
  margin: 24px;
  box-sizing: border-box;
`;

export const MenuList = styled.div`
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  & > span {
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
  }
`;

export const AlbumBox = styled.div`
  margin-top: 120px;
`;

export const DropDownBox = styled.div`
  margin: 9px 7px;
`;

export const AlbumList = styled.ul`
  display: flex;
  gap: 6px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const AlbumAmount = styled.div`
  padding-right: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:first-child {
    font-family: 'Petit Formal Script';

    font-weight: 400;
    font-size: 108px;
    line-height: 135px;
  }

  & > span:last-child {
    font-family: 'Petrona';

    font-weight: 400;
    font-size: 65px;
    line-height: 73px;
  }
`;
