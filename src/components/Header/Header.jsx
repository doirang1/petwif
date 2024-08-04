import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Flex } from '../Common';
import { Icon } from '../Icon';
import { Profile } from '../Profile';
import { Sidebar } from '../Sidebar';

import { Profile as Img } from '../../dummy/images';

const HeaderStyle = styled.header`
  width: 100%;
  padding: 15px 17px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`;

const Menu = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderStyle>
        <Icon
          id='hamburger'
          width='44'
          height='34'
          onClick={(event) => {
            event.stopPropagation();
            setIsOpen(true);
          }}
          style={{ cursor: 'pointer' }}
        />
        <Flex $gap='30px'>
          <Menu>
            <Icon id='bell' width='24' height='25' />
            <span>알림 설정</span>
          </Menu>
          <Menu>
            <Icon id='setting' width='20' height='20' />
            <span>사용자 관리</span>
          </Menu>
          <Menu>
            <Profile src={Img} size='37px' />
          </Menu>
        </Flex>
      </HeaderStyle>
      <Sidebar isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
}
