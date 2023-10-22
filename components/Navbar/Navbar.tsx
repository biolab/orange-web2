import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import config from "config.json";
import Link from "next/link";
import BurgerButton from "./BurgerButton/BurgerButton";
import Image from "../../components/Image/Image";
import LogoImage from "../../public/assets/icons/logo-orange.svg";
import SearchImage from "../../public/assets/icons/icon-search.svg";
import Adapt from "@components/UiKit/Adapt";
import SrOnly from "@components/UiKit/SrOnly";
import * as Styled from "./Navbar.styled";
import { SearchContext } from "@components/Search/Search.context";

function Search({ onSearchClick }: { onSearchClick: () => void }) {
  const { setShowSearch } = React.useContext(SearchContext);

  return (
    <Styled.SearchWrapper
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearch(true);
        onSearchClick();
      }}
    >
      <Styled.SearchInput>Search</Styled.SearchInput>
      <Styled.SearchButton>
        <Image
          src={SearchImage.src}
          width={SearchImage.width}
          height={SearchImage.height}
          alt="Icon for search"
        />
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

          <div>
            <BurgerButton onClick={() => setNavOpened((val) => !val)} />
            <Styled.MenuWrapper $navOpened={navOpened}>
              <Styled.MenuList>
                {config.menu.map(({ name, url }) => (
                  <li key={name}>
                    <Link
                      onClick={() => {
                        setNavOpened(false);
                      }}
                      href={url}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </Styled.MenuList>
              <Search
                onSearchClick={() => {
                  setNavOpened(false);
                }}
              />
            </Styled.MenuWrapper>
          </div>
        </Styled.NavInner>
      </Adapt>
    </Styled.Nav>
  );
}
