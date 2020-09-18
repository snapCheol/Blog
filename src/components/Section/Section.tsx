import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
  height: 100%;

  & > .inner {
    padding: 5%;
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
