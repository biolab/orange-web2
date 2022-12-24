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

    @media ${device.M} {
        display: flex;
    }
    div {
        width: 22px;
        height: 2px;
        background: ${({ theme }) => theme.white};
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'translateX(3px) rotate(45deg)' : 'translateX(0) rotate(0)'};
        }
        &:nth-child(2) {
            opacity: ${({ open }) => open ? 0 : 1};
          }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'translateX(3px) rotate(-45deg)' : 'translateX(0) rotate(0)'};
        }
      }
`;

const BurgerButton = () => {
    const [open, setOpen] = React.useState(false);

    return (

        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
            <span className="sr-only">Toggle navigation</span>
        </StyledBurger>

    )
}


export default BurgerButton;