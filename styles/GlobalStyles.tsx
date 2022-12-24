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

  ::selection {
    background-color: ${({ theme }) => theme.orange};
    color: ${({theme}) => theme.white};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  ${LightGallery};
`;
