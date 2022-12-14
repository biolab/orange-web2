import { createGlobalStyle } from "styled-components";
import { LightGallery } from "./libs/LightGalery.style";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background: #fff;
  } 

  /* Reset */
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
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
    max-width: 100%;
    height: auto;
  }

  ${LightGallery};
`;
