import styled from "styled-components";
import device from "@styles/utils/breakpoints";

export const Nav = styled.nav`
  z-index: 100;
  height: 80px;
  background: #fff;
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.04);
`;

export const NavInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .img-logo {
    width: 115px;
  }
`;

export const MenuWrapper = styled.div<{ $navOpened?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${device.M} {
    display: block;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 0 30px 30px;
    background-color: #fff;
    opacity: 0;
    z-index: -9999;
    pointer-events: none;
    transition: opacity 0.3s ease;
    box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.04);

    ${({ $navOpened }) =>
      $navOpened &&
      `
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

export const MenuList = styled.ul`
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

export const SearchWrapper = styled.form`
  position: relative;
  width: 160px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  transition: width 0.3s ease-in-out;
  margin-left: 26px;
  @media ${device.M} {
    width: auto;
    margin-left: 0;
  }
`;

export const SearchInput = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 42px;
  width: calc(100% - 42px);
  height: 100%;
  font-size: 16px;
  line-height: 1.25;
  padding: 10px 13px;
  background: #fff;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-right: none;
  transition: width 0.3s ease-in-out;

  @media ${device.M} {
    display: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.borderColor};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: auto;
  flex: 0 0 42px;
  height: 41px;
  border: 1px solid #474747;
  border-radius: 0px 5px 5px 0px;
  background-color: ${({ theme }) => theme.gray};
  @media ${device.M} {
    margin-left: 0;
  }
`;
