import React from "react";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";

export const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 44px;
  height: 34px;
  padding: 6px;
  border-radius: 5px;
  border: none;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.orangeGradientColor1} 74.93%, ${theme.orangeGradientColor2} 100%)`};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  margin-left: auto;

  @media ${device.M} {
    display: flex;
  }
  div {
    width: 22px;
    height: 2px;
    background: #fff;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
`;

function BurgerButton({ onClick }: { onClick: any }) {
  return (
    <StyledBurger onClick={onClick}>
      <div />
      <div />
      <div />
      <span className="sr-only">Toggle navigation</span>
    </StyledBurger>
  );
}

export default BurgerButton;
