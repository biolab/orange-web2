import { createGlobalStyle } from "styled-components";
import { LightGallery } from "./libs/LightGalery.style";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
  }

  /* Reset */
  html {
    font-family: ${({ theme }) => theme.baseFont};
    color: ${({ theme }) => theme.black};
  }

  body {
    background: #fff;
  } 


  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img, video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ${LightGallery};
`;
