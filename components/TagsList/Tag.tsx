import styled, { css } from "styled-components";

const Tag = styled.button<{ $active?: boolean }>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.purple};
  cursor: pointer;
  font-size: 20px;
  background: #fff;
  border-radius: 5px;

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.purple};
      color: #fff;
      /* border: 1px solid ${theme.orange}; */
    `};
`;

export default Tag;
