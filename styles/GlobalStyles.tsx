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
    font-weight: ${({ theme }) => theme.fontWeight400};
    color: ${({ theme }) => theme.black};
  }

  body {
    background: ${({ theme }) => theme.white};
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

  img, video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${({ theme }) => theme.orange};
    color: ${({ theme }) => theme.white};
  }

  ${LightGallery};
`;
