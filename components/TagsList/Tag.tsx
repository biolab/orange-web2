import styled from "styled-components";

const Tag = styled.button<{ $active?: boolean }>`
  padding: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #fff;

  ${({ $active }) => $active && "background: #00b3ff2c;"}
`;

export default Tag;
