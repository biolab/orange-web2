import React from "react";
import Link from "next/link";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";
import config from "config.json";
import BurgerButton from "./BurgerButton/BurgerButton";

const Nav = styled.nav<{ $open?: boolean }>`
  background: ${({ theme }) => theme.white};
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.04);

  @media ${device.M} {
    ul {
      display: none;
      ${({ $open }) => $open && "display: block;"}
    }
  }
`;

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav $open={open}>

      <div>Logo</div>

      <ul>
        {config.menu.map(({ name, url }) => {
          return (
            <li key={name}>
              <Link href={url}>{name}</Link>
            </li>
          );
        })}
      </ul>

      <BurgerButton />
    </Nav>
  );
}
