import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../ContentLayout/ContentLayout';
import WorkItems from './WorkItems';
import WorkData from './../../workData.json';

const WorkList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const WorkContent = () => {
  const works = WorkData.works;

  return (
    <ContentLayout>
      <h3 lang="en">Works</h3>
      <WorkList>
        {works.map((work) => (
          <WorkItems key={work.id} work={work} />
        ))}
      </WorkList>
    </ContentLayout>
  );
};

export default WorkContent;
