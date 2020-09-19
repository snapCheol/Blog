import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../ContentLayout/ContentLayout';
import { RiCellphoneFill, RiGithubFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const Contact = styled.ul`
  margin-top: 25px;

  & li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 10px;
    }

    & svg {
      font-size: 30px;
    }
    & span {
      margin-left: 10px;
    }
  }
`;

const AboutContent = () => {
  return (
    <ContentLayout>
      <h3 lang="en">About Me</h3>

      <p>
        4년여동안 웹퍼블리셔로 마크업 개발을 하였으며 리액트와
        모던자바스크립트의 매력에 빠져 조금 더 발전된 프론트엔드 개발자를 꿈꾸고
        있는 김민철이라고 합니다. 보여지는 화면도 중요하지만 시각장애와 저시력
        장애를 가진 사람들 위한 접근성도 중요하게 생각 되어 최근에는 접근성 관련
        WAI-ARIA와 여러가지 인터페이스 접근성에도 관심을 가져 공부중입니다.
      </p>

      <Contact>
        <li>
          <RiCellphoneFill />
          <span>
            <a href="tel:+82-10-5519-1689">010-5519-1689</a>
          </span>
        </li>
        <li>
          <MdEmail />
          <span>
            <a href="mailto:chief1689@naver.com">chief1689@naver.com</a>
          </span>
        </li>
        <li>
          <RiGithubFill />
          <span>
            <a
              href="https://github.com/snapCheol"
              target="_blank"
              rel="noopener noreferrer">
              https://github.com/snapCheol
            </a>
          </span>
        </li>
      </Contact>
    </ContentLayout>
  );
};

export default AboutContent;
