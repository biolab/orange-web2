import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: inline-block;
  max-width: 100%;
  font-size: 20px;
  line-height: 1.25;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.orangeGradientColor1} 74.93%, ${theme.orangeGradientColor2} 100%)`};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03);
  background-size: 100%;
  cursor: pointer;
  z-index: 2;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: ${({ theme }) =>
      `linear-gradient(180deg, ${theme.orangeHover} 100%, ${theme.orangeGradientColor1} 100%)`};
    opacity: 0;
    z-index: -100;
    transition: opacity 0.45s;
  }

  &:hover {
    color: #fff;

    &:before {
      opacity: 1;
    }
  }
`;

export default Button;
