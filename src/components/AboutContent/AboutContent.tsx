import React from 'react';
import ContentLayout from '../ContentLayout/ContentLayout';

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
    </ContentLayout>
  );
};

export default AboutContent;
