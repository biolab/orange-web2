import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const PageButton = styled.button<{ $active?: boolean }>`
  display: inline-block;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.blackLight};
  padding: 0;
  border: 0;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;

  ${({ $active, theme }) =>
    $active &&
    `
    color: #fff;
    background-color: ${theme.violet}
  `}
`;

const PageButtonPrev = styled.button`
  position: relative;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.violet};
  padding: 3px 5px 3px 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid ${({ theme }) => theme.violet};
    border-width: 0 0 1px 1px;
    transform: rotate(45deg) translate(-3px, 0px);
    transition: transform 0.3s;
  }
  &:hover {
    &:before {
      transform: rotate(45deg) translate(-5px, 2px);
    }
  }
`;

const PageButtonNext = styled.button`
  position: relative;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.violet};
  padding: 3px 10px 3px 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid ${({ theme }) => theme.violet};
    border-width: 1px 1px 0 0;
    transform: rotate(45deg) translate(0, -3px);
    transition: transform 0.3s;
  }
  &:hover {
    &:after {
      transform: rotate(45deg) translate(2px, -5px);
    }
  }
`;

export default function Pagination({
  setPage,
  noOfPages,
  page,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
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
        <PageButtonPrev
          onClick={() => {
            setPage((v) => v - 1);
          }}
        >
          Previous
        </PageButtonPrev>
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

      {!!buttons.length && buttons[buttons.length - 1] !== noOfPages - 2 && <span>...</span>}

      <PageButton
        $active={page === noOfPages - 1}
        onClick={() => {
          setPage(noOfPages - 1);
        }}
      >
        {noOfPages}
      </PageButton>

      {page !== noOfPages - 1 && (
        <PageButtonNext
          onClick={() => {
            setPage((v) => v + 1);
          }}
        >
          Next
        </PageButtonNext>
      )}
    </PaginationWrapper>
  );
}
