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
    flex: 1;
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
    padding: 15px;
    margin: 0 0 10px;
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    color: #000;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    overflow-x: auto;
    word-wrap: normal;
    
    code {
      padding: 0 !important;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
      border: none;
      line-height: 1.35;
    }
  }

  code {
    padding: 2px 3px;
    background: #f7f7f7;
    border: 1px solid #ededed;
    border-radius: 0.375rem;
    display: inline-block;
    line-height: 1.2;
    margin: 0;
    font-size: 78%;
  }

  ::selection {
    background-color: ${({ theme }) => theme.orange};
    color: #fff;
  }

  ${LightGallery};
`;
