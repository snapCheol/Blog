import React from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-left: auto;
  color: #fff;
`;

type MenuButtonProps = {
  toggleMenu: () => void;
};

const MenuButton = ({ toggleMenu }: MenuButtonProps) => {
  return (
    <MenuBtn type="button" onClick={toggleMenu}>
      <MenuOutlined />
    </MenuBtn>
  );
};

export default MenuButton;
