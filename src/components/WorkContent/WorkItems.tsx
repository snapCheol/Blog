import React from 'react';
import styled from 'styled-components';

export type bgImagePropsType = {
  bgImage?: string;
};

const WorkItemsBackground = styled.div<bgImagePropsType>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: 50% 0;
`;

const WorkItemContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  transition: 0.3s ease;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  & > strong {
    display: block;
    font-size: 1.2em;
  }
  & > p {
    margin-top: 1em;
    font-size: 1em;
  }
`;

const WorkItemsContainer = styled.li`
  position: relative;
  width: 49%;
  padding: 25% 0;
  margin: 0.5%;
  overflow: hidden;
  transition: 0.3s ease;
  border-radius: 10px;

  > a {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  &:hover ${WorkItemContent} {
    transform: translateY(0);
    opacity: 1;
  }
`;

type WorkType = {
  id: number;
  title: string;
  image: string;
  githubLink: string;
};

type WorkItems = {
  work: WorkType | null;
};

const WorkItems = ({ work }: WorkItems) => {
  if (!work) return null;
  return (
    <WorkItemsContainer>
      <a href={work.githubLink} target="_blank" rel="noopener noreferrer">
        <WorkItemsBackground bgImage={work.image} />
        <WorkItemContent>
          <strong>{work.title}</strong>
          <p>Github 바로가기</p>
        </WorkItemContent>
      </a>
    </WorkItemsContainer>
  );
};

export default WorkItems;
