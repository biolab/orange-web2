import React from "react";
import styled from "styled-components";

const PageButton = styled.button<{ $active?: boolean }>`
  ${({ $active }) => $active && "background: green;"}
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
    <div>
      {page !== 0 && (
        <button
          onClick={() => {
            setPage((v) => v - 1);
          }}
        >
          Previous
        </button>
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
        <button
          onClick={() => {
            setPage((v) => v + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
