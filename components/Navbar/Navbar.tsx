import React, { useCallback, useState } from "react";
import Link from "next/link";
import config from "config.json";
import BurgerButton from "./BurgerButton/BurgerButton";
import Image from "../../components/Image/Image";
import LogoImage from "../../public/assets/icons/logo-orange.svg";
import Adapt from "@components/UiKit/Adapt";
import LinkAsButton from "@components/UiKit/LinkAsButton";
import * as Styled from "./Navbar.styled";
import styled from "styled-components";
import { useRouter } from "next/router";

const SearchWrapper = styled.form<{ searchFocused: boolean }>`
  width: 100px;
  transition: width 0.3s ease-in-out;
  display: flex;
  align-items: center;

  ${({ searchFocused: searchOpened }) => searchOpened && "width: 300px;"}
`;

const SearchInput = styled.input`
  width: 100%;
`;

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
    <SearchWrapper searchFocused={searchOpened}>
      <SearchInput
        type="text"
        placeholder="Search"
        onFocus={() => setSearchOpened(true)}
        onBlur={() => setSearchOpened(false)}
        value={input}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <button type="submit" onClick={search}>
        Go
      </button>
    </SearchWrapper>
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

          <Styled.MenuWrapper navOpened={navOpened}>
            <Styled.MenuList>
              {config.menu.map(({ name, url }) => (
                <li key={name}>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </Styled.MenuList>
            <Styled.MenuTools>
              <LinkAsButton>Donate</LinkAsButton>
              <Search />
            </Styled.MenuTools>
          </Styled.MenuWrapper>

          <BurgerButton onClick={() => setNavOpened((val) => !val)} />
        </Styled.NavInner>
      </Adapt>
    </Styled.Nav>
  );
}
