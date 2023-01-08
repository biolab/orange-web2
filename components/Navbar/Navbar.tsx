import React from "react";
import Link from "next/link";
import config from "config.json";
import BurgerButton from "./BurgerButton/BurgerButton";
import Image from "../../components/Image/Image";
import LogoImage from "../../public/assets/icons/logo-orange.svg";
import Adapt from "@components/UiKit/Adapt";
import LinkAsButton from "@components/UiKit/LinkAsButton";
import * as Styled from "./Navbar.styled";

export default function Navbar() {
  const [navOpened, setNavOpened] = React.useState(false);

  return (
    <Styled.Nav>
      <Adapt>
        <Styled.NavInner>
          <Link href="/">
            <Image
              className="img-logo"
              src={LogoImage.src}
              width={LogoImage.width}
              height={LogoImage.height}
              alt="Orange Logo"
            />
          </Link>

          <BurgerButton onClick={() => setNavOpened((val) => !val)} />

          <Styled.MenuWrapper $navOpened={navOpened}>
            <Styled.MenuList>
              {config.menu.map(({ name, url }) => (
                <li key={name}>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </Styled.MenuList>
            <Styled.MenuTools>
              <div>Search</div>
              <LinkAsButton>Donate</LinkAsButton>
            </Styled.MenuTools>
          </Styled.MenuWrapper>
        </Styled.NavInner>
      </Adapt>
    </Styled.Nav>
  );
}
