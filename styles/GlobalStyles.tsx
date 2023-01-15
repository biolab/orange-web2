import { createGlobalStyle } from "styled-components";
import { LightGallery } from "./libs/LightGalery.style";

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
      height: 100%;
      margin: 0;
  }

  html {
    font-family: ${({ theme }) => theme.baseFont};
    font-weight: 400;
    color: ${({ theme }) => theme.black};
    scroll-behavior: smooth;
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
    width: 100%;
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

  ::selection {
    background-color: ${({ theme }) => theme.orange};
    color: #fff;
  }

  ${LightGallery};
`;
