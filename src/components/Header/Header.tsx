import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux';
import { viewPortMobile, viewPortPc } from '../../redux/common';
import { breakPoint, device } from '../../styles/BreakPoint';
import Logo from '../Logo/Logo';
import MenuButton from '../MenuButton/MenuButton';
import Navigation from '../Navigation/Navigation';
import HeaderFooter from './HeaderFooter';

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #181818;
  z-index: 9999;

  & footer {
    /* margin-top: auto; */
    & a {
      display: block;
      width: 100%;
      height: 50px;
      text-align: center;
      & span + span {
        display: none;
      }
    }
  }

  @media ${device.laptop} {
    position: fixed;
    width: 70px;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const Header = () => {
  const { viewPort } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setActiveMenu((prev) => !prev);
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    if (width > breakPoint.laptop) {
      if (viewPort === 'pc') return;
      dispatch(viewPortPc());
    } else if (width < breakPoint.laptop) {
      if (viewPort === 'mobile') return;
      dispatch(viewPortMobile());
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [dispatch, width, viewPort, handleWindowResize]);

  return (
    <HeaderContainer>
      <Logo />
      {viewPort === 'mobile' && <MenuButton toggleMenu={toggleMenu} />}
      <Navigation activeMenu={activeMenu} toggleMenu={toggleMenu} />
      {viewPort === 'pc' && <HeaderFooter />}
    </HeaderContainer>
  );
};

export default Header;
