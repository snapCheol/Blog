import { GithubOutlined } from '@ant-design/icons';
import React from 'react';

const HeaderFooter = () => {
  return (
    <footer>
      <a
        href="https://github.com/snapCheol"
        target="_blank"
        rel="noopener noreferrer">
        <GithubOutlined />
        <span>Github</span>
      </a>
    </footer>
  );
};

export default HeaderFooter;
