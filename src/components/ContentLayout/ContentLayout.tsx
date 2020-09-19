import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoint';

const ContentContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: keep-all;

  & h3 {
    margin-bottom: 25px;
    font-size: 24px;
    font-weight: 900;
    color: #9980fa;
  }
  & p {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    & h3 {
      font-size: 5vw;
    }
    & p {
      font-size: 2.3vw;
    }
  }
  @media ${device.laptop} {
    width: 50%;
    padding: 0 5%;
    & h3 {
      font-size: 2.5rem;
    }
    & p {
      font-size: 1.2rem;
    }
  }
`;

const ContentLayout: React.FC = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default ContentLayout;
