import device from "@styles/utils/breakpoints";
import React from "react";
import styled, { css } from "styled-components";
import Image from "../../components/Image/Image";
import ArrowImage from "../../public/assets/icons/icon-arrow.svg";

const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const PageButton = styled.button<{ $active?: boolean }>`
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.blackLight1};
  padding: 0;
  border: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;

  ${({ $active, theme }) =>
    $active &&
    css`
      color: #fff;
      background-color: ${theme.purple};
    `}
`;

const PageButtonNavigation = styled.button<{ $previous?: boolean }>`
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.purple};
  padding: 6px 5px;
  min-width: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${device.XS} {
    span {
      display: none;
    }
  }

  &:hover {
    img {
      transform: ${({ $previous }) =>
        $previous ? "rotate(180deg) translateX(3px)" : "translateX(3px)"};
    }
  }

  img {
    display: inline-block;
    margin: 0 4px;
    transition: transform 0.3s;
    ${({ $previous }) => $previous && `transform: rotate(180deg);`}
  }
`;

export default function Pagination({
  setPage,
  noOfPages,
  page,
}: {
  setPage: (value: number) => void;
  noOfPages: number;
  page: number;
}) {
  const buttons = React.useMemo(() => {
    const buttons = [];

    if (noOfPages <= 5) {
      for (let i = 1; i < noOfPages - 1; i++) {
        buttons.push(i);
      }
      return buttons;
    }

    for (let i = page - 1; i < page + 3; i++) {
      buttons.push(i);
    }

    return buttons.filter((v) => v > 0 && v < noOfPages - 1);
  }, [noOfPages, page]);

  if (noOfPages < 2) {
    return null;
  }
  return (
    <PaginationWrapper>
      {page !== 0 && (
        <PageButtonNavigation
          aria-label="previous page"
          $previous
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <Image
            src={ArrowImage.src}
            width={ArrowImage.width}
            height={ArrowImage.height}
            alt=""
          />
          <span>Previous</span>
        </PageButtonNavigation>
      )}

      <PageButton
        $active={page === 0}
        onClick={() => {
          setPage(0);
        }}
      >
        {1}
      </PageButton>

      {!!buttons.length && buttons[0] !== 1 && <span>...</span>}

      {buttons.map((value) => (
        <PageButton
          key={value}
          $active={page === value}
          onClick={() => {
            setPage(value as number);
          }}
        >
          {(value as number) + 1}
        </PageButton>
      ))}

      {!!buttons.length && buttons[buttons.length - 1] !== noOfPages - 2 && (
        <span>...</span>
      )}

      <PageButton
        $active={page === noOfPages - 1}
        onClick={() => {
          setPage(noOfPages - 1);
        }}
      >
        {noOfPages}
      </PageButton>

      {page !== noOfPages - 1 && (
        <PageButtonNavigation
          aria-label="next page"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <span>Next</span>
          <Image
            src={ArrowImage.src}
            width={ArrowImage.width}
            height={ArrowImage.height}
            alt=""
          />
        </PageButtonNavigation>
      )}
    </PaginationWrapper>
  );
}
