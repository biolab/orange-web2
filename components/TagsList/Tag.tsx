import styled, { css } from "styled-components";

const Tag = styled.button<{ $active?: boolean }>`
  padding: 4px 8px;
  font-size: 16px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.purple};
  cursor: pointer;

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.purple};
      color: #fff;
    `};
`;

export default Tag;
