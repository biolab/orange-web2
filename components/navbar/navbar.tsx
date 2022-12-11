import React from "react";
import Link from "next/link";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";

const Nav = styled.nav<{ $open?: boolean }>`
  background: coral;
  height: 60px;
  display: flex;
  align-items: center;

  @media ${device.M} {
    ul {
      display: none;
      ${({ $open }) => $open && "display: block;"}
    }
  }
`;

const Burger = styled.button`
  display: none;
  font-size: 22px;
  margin-left: auto;

  @media ${device.M} {
    display: block;
  }
`

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav $open={open}>
      <ul>
        <Link href="/blog">Blog</Link>
      </ul>

      <Burger onClick={() => setOpen(!open)}>X</Burger>
    </Nav>
  );
}
