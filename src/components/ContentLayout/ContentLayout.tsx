import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: keep-all;

  & h3 {
    margin-bottom: 25px;
    font-size: 20px;
    font-weight: 900;
    color: #9980fa;
  }
  & p {
    font-size: 13px;
  }
`;

const ContentLayout: React.FC = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default ContentLayout;
