import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJquery,
  SiJavascript,
  SiSass,
  SiReact,
  SiRedux,
  SiTypescript,
  SiGit,
} from 'react-icons/si';
import styled from 'styled-components';
import ContentLayout from '../ContentLayout/ContentLayout';

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > li {
    flex-grow: 1;
    width: 33.3333%;
    text-align: center;
    padding: 5%;
    & * {
      display: block;
    }
    & .skill-icon {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      font-size: 40px;
    }
    & strong {
      font-weight: 300;
    }
  }
`;

const SkillContent = () => {
  return (
    <ContentLayout>
      <h3 lang="en">Skills</h3>

      <SkillList>
        <li>
          <span className="skill-icon">
            <SiHtml5 />
          </span>
          <strong>HTML5</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiCss3 />
          </span>
          <strong>CSS3</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiJquery />
          </span>
          <strong>jQuery</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiJavascript />
          </span>
          <strong>Javascript</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiSass />
          </span>
          <strong>SCSS</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiReact />
          </span>
          <strong>REACT</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiRedux />
          </span>
          <strong>Redux</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiTypescript />
          </span>
          <strong>Typescript</strong>
        </li>
        <li>
          <span className="skill-icon">
            <SiGit />
          </span>
          <strong>Git</strong>
        </li>
      </SkillList>
    </ContentLayout>
  );
};

export default SkillContent;
