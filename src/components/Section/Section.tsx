import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoint';

const SectionContainer = styled.section`
  position: relative;
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 10;
  & > .inner {
    width: 100%;
    padding: 0 5%;
  }

  @media ${device.laptop} {
    align-items: flex-start;
    margin-top: 100px;
    padding: 0;
  }
`;

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <SectionContainer>
      <h2 className="a11yHidden">{title}</h2>
      <div className="inner">{children}</div>
    </SectionContainer>
  );
};

export default Section;
