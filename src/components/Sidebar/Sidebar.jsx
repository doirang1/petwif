import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';

import { Icon } from '../Icon';

import { SIDE_MENUS } from '../../constants';

const SidebarStyle = styled.aside`
  width: 333px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #f3f4f6;
  filter: drop-shadow(3px 3px 9px rgba(0, 0, 0, 0.1));
`;

const Menu = styled.li`
  height: 67px;
  padding: 8px;
  margin: 15px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  background: ${(props) =>
    props.$selected ? 'rgba(216, 214, 213, 0.5)' : 'transparent'};
  box-sizing: border-box;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  &:hover {
    background: rgba(216, 214, 213, 0.5);
  }
`;

export default function Sidebar({ isOpen, close }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', close);
    }

    return () => document.removeEventListener('click', close);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <SidebarStyle onClick={(event) => event.stopPropagation()}>
      <ul>
        {SIDE_MENUS.map(({ id, to, name, icon }) => (
          <Link key={id} to={to}>
            <Menu $selected={pathname.includes(id)}>
              <Icon id={id} width={icon.width} height={icon.height} />
              <span>{name}</span>
            </Menu>
          </Link>
        ))}
      </ul>
    </SidebarStyle>
  );
}
