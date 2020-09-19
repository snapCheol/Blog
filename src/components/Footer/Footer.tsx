import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoint';

const FooterContainer = styled.footer`
  display: flex;
  height: 50px;
  margin-top: 30px;
  text-align: center;
  justify-content: space-around;
  align-items: center;

  background: #181818;
  font-size: 10px;

  & address {
    font-style: normal;
  }
  & .github {
    line-height: 1.2;

    & strong {
      margin-left: 4px;
      font-weight: 300px;
      font-size: 7px;
    }
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <address>copyright&copy; Kim Min Cheol </address>
      <div className="github">
        <a
          href="https://github.com/snapCheol"
          target="_blank"
          rel="noopener noreferrer">
          <GithubOutlined />
          <strong>Github</strong>
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
