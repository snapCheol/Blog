import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../ContentLayout/ContentLayout';

const WorkList = styled.ul``;

const WorkContent = () => {
  return (
    <ContentLayout>
      <h3 lang="en">Works</h3>
      <WorkList></WorkList>
    </ContentLayout>
  );
};

export default WorkContent;
