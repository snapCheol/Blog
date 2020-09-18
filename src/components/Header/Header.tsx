import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import MenuButton from '../MenuButton/MenuButton';
import Navigation from '../Navigation/Navigation';

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #181818;
  z-index: 9999;
`;

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setActiveMenu((prev) => !prev);
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      <MenuButton toggleMenu={toggleMenu} />
      <Navigation activeMenu={activeMenu} toggleMenu={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header;
