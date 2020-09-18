import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  & > a {
    color: #fff;

    > span {
      font-size: 3px;
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">MC</Link>
    </LogoContainer>
  );
};

export default Logo;
