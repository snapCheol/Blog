import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    background-color: #1E1E1E;
    font: 1rem/1.5 "Spoqa Han Sans",sans-serif;
    color: #fff;
  }
  h1, h2, h3, h4, h5, h6{
    color: #fff;
  }
  body, 
  body *, 
  body::after,
  body::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .tag::before, 
  .tag::after {font-family: 'Source Code Pro', monospace; font-size: 10px; color: #D78650; margin-left: 10px;}
  [lang="en"]{
    font-family: 'Source Code Pro', monospace
  }

  .a11yHidden {
      position: absolute;
      overflow: hidden;
      visibility: hidden;
      clip: rect(0,0,0,0);
      clip-path: polygon(0 0, 0 0, 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      white-space: nowrap; 
    } 
  

    button {
      cursor: pointer; 
      padding: 0; 
      border: 0;
      background: transparent;
    }
    .ant-btn:hover, .ant-btn:focus, .ant-btn:active{
      background: none;
      color: inherit;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
`;

export default GlobalStyle;
