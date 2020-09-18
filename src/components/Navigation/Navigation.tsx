import { CodepenOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav<NavigationProps>`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 50px;
  background-color: #181818;
  transform: ${(props) =>
    props.activeMenu ? 'translateX(0)' : 'translateX(100%)'};
  transition: 0.3s ease;
  & > ul {
    display: flex;
    justify-content: space-between;
  }
  & > ul > li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 1rem;

    > a > .textMenu {
      display: none;
      font-size: 0.7rem;
    }
  }
`;

const Dimm = styled.div<NavigationProps>`
  display: ${(props) => (props.activeMenu ? 'block' : 'none')};
  position: absolute;
  top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: transparent;
`;

type NavigationProps = {
  activeMenu: Boolean;
  toggleMenu?: () => void;
};

const Navigation = ({ activeMenu, toggleMenu }: NavigationProps) => {
  return (
    <>
      <Nav activeMenu={activeMenu}>
        <h2 className="a11yHidden">메인 네비게이션</h2>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <HomeOutlined />
              <span className="textMenu">HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              <UserOutlined />
              <span className="textMenu">ABOUT</span>
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleMenu}>
              <CodepenOutlined />
              <span className="textMenu">SKILLS</span>
            </Link>
          </li>
        </ul>
      </Nav>
      <Dimm activeMenu={activeMenu} onClick={toggleMenu} />
    </>
  );
};

export default Navigation;
