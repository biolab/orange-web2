import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import config from "config.json";
import Link from "next/link";
import BurgerButton from "./BurgerButton/BurgerButton";
import Image from "../../components/Image/Image";
import LogoImage from "../../public/assets/icons/logo-orange.svg";
import Adapt from "@components/UiKit/Adapt";
import SrOnly from "@components/UiKit/SrOnly";
import * as Styled from "./Navbar.styled";

function Search() {
  const [searchOpened, setSearchOpened] = React.useState(false);
  const router = useRouter();
  const [input, setInput] = useState("");

  const search = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      router.push({
        pathname: "/search",
        query: { q: input },
      });
    },
    [input]
  );

  return (
    <Styled.SearchWrapper>
      <Styled.SearchInput
        searchFocused={searchOpened}
        type="text"
        placeholder="Search"
        onFocus={() => setSearchOpened(true)}
        onBlur={() => setSearchOpened(false)}
        value={input}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <Styled.SearchButton type="submit" onClick={search}>
        <Image src="/assets/icons/icon-search.svg" width="16" height="16" alt="Icon for search" />
        <SrOnly>Search through page</SrOnly>
      </Styled.SearchButton>
    </Styled.SearchWrapper>
  );
}

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

          <Styled.NavRightSide>
            <BurgerButton onClick={() => setNavOpened((val) => !val)} />
            <Styled.MenuWrapper $navOpened={navOpened}>
              <Styled.MenuList>
                {config.menu.map(({ name, url }) => (
                  <li key={name}>
                    <Link href={url}>{name}</Link>
                  </li>
                ))}
              </Styled.MenuList>
              <Search />
            </Styled.MenuWrapper>
          </Styled.NavRightSide>
        </Styled.NavInner>
      </Adapt>
    </Styled.Nav>
  );
}
