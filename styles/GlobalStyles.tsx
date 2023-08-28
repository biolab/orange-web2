import { createGlobalStyle } from "styled-components";
import { LightGallery } from "./libs/LightGalery.style";

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
      height: 100%;
      margin: 0;
  }

  html {
    font-family: ${({ theme }) => theme.baseFont};
    font-weight: 400;
    color: ${({ theme }) => theme.black};
  }

  body {
    background: #fff;
  } 

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  main {
    padding-top: 80px;
  }

  ol, ul {
    list-style: none;
  }

  figure {
    margin: 0;
  }

  img, video {
    display: block;
    max-width: 100%;
    height: auto;
  }
 
  a {
    color: unset;
    text-decoration: none;
    
    &:hover {
      color: unset;
    }
  }

  strong {
    font-weight: 600;
  }

  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow-x: auto;
    word-wrap: normal;
    
    code {
      padding: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
    }
  }

  code {
    font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    white-space: nowrap;
    border-radius: 4px;
  }

  ::selection {
    background-color: ${({ theme }) => theme.orange};
    color: #fff;
  }

  ${LightGallery};
`;
