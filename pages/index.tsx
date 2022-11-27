import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }) => theme.color1};
`;

export default function Home() {
  return (
    <div>
      <H1>Hello orange</H1>
    </div>
  );
}
