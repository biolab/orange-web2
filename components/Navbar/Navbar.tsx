import React from "react";
import Link from "next/link";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";
import config from "config.json";
import BurgerButton from "./BurgerButton/BurgerButton";
import Image from "../../components/Image/Image";
import LogoImage from "../../public/assets/icons/logo-orange.svg";
import Adapt from "@components/UiKit/Adapt";
import LinkAsButton from "@components/UiKit/LinkAsButton";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 5;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.04);
`;
const NavInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;

  .img-logo {
    width: 115px;
    margin-top: 18px;
  }
`;
const MenuWrapper = styled.div<{ navOpened?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 115px);
  padding-left: 35px;

  @media ${device.M} {
    display: block;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 0 30px 30px;
    background-color: ${({ theme }) => theme.white};
    opacity: 0;
    z-index: -9999;
    pointer-events: none;
    transition: opacity 0.3s ease;
    box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.04);
   
    ${({ navOpened }) => navOpened && `
        opacity: 1;
        z-index: 1;
        pointer-events: visible;
        transition: opacity 0.3s ease;
    `}
  }

  @media ${device.S} {
    padding: 0 15px 15px;
  }
`;
const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${device.M} {
    display: block;
    margin-bottom: 15px;
  }
  
  li {
    + li {
      margin-left: 26px;
      @media ${device.M} {
        margin-left: 0;
      }
    }
  }

  a {
    display: inline-block;
    font-size: 1.25rem;
    line-height: 1;
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: ${({ theme }) => theme.orange};
    }
    @media ${device.M} {
      padding: 8px 0;
    }
  }
   
`;
const MenuTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${device.M} {
    display: block;
  }

  * + * {
    margin-left: 26px;

    @media ${device.M}{
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;

export default function Navbar() {
  const [navOpened, setNavOpened] = React.useState(false);

  return (
    <Nav>
      <Adapt>
        <NavInner>

          <Link href="/">
            <Image className="img-logo" src={LogoImage.src} width={LogoImage.width} height={LogoImage.height} alt="Orange Logo"/>
          </Link>
      
          <MenuWrapper navOpened={navOpened}>
            <MenuList>
              {config.menu.map(({ name, url }) => {
                return (
                  <li key={name}>
                    <Link href={url}>{name}</Link>
                  </li>
                );
              })}
            </MenuList>
            <MenuTools>
              <div>Search</div>  
              <LinkAsButton>Donate</LinkAsButton>
            </MenuTools>
          </MenuWrapper>

          <BurgerButton onClick={() => setNavOpened((val) => !val)} />
        </NavInner>
      </Adapt>
    </Nav>
  );
}
